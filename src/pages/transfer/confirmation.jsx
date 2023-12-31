
import AfterLoginLayout from '../../layout/afterLogin'
import "./transfer.css";
import blankPict from '../../assets/images/blank.jpg';
import { ButtonGroup, CloseButton, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format';
import { IoArrowBack } from 'react-icons/io5';
import { Fragment, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PinInput from 'react-pin-input';
import { Link, useNavigate } from 'react-router-dom';
import CustomPIN from '../../components/reusable-components/pinInput';
import { getUserById } from '../../services/users';
import { transferPost } from '../../services/transactions';
import Swal from 'sweetalert2';
import TransferLayout from '../../layout/transfer';
import { format } from 'date-fns';

const Confirmation = () => {


    const [pin, setPin] = useState(false);
    const [idTrans, setIdtrans] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //getuserdetails
    const navigate = useNavigate();
    const amount = localStorage.getItem("amount");
    const notes = localStorage.getItem("notes");
    const transactionTime =localStorage.getItem("transactionTime")
    const [tampilUsersRecipient, setTampilUserRecipient] = useState(false);
    const [tampilUserSender, SetTampilUserSender] = useState(false);
    const [userData, setUserData] = useState({});
    const getuserId = async () => {
        try {
            const sender = localStorage.getItem("id");
            const recipient = localStorage.getItem("recipient");
            // console.log(sender);
            // console.log(recipient);
            const res = await getUserById(recipient)
            const resSender = await getUserById(sender)
            // console.log(res,"recepient");
            // console.log(resSender,"sender");
            setTampilUserRecipient(res.data.data);
            SetTampilUserSender(resSender.data.data);
        } catch (error) {
            console.log(error,"ini errornya");
            
        }
    };
    useEffect(() => {
        getuserId();
        if (!amount || !transactionTime) {
            navigate('/home');
        }
    }, []);

    const springBootDate = new Date(transactionTime);
    const formattedDate = format(springBootDate, "MMMM dd, yyyy");

    //function to save transfer

    const handleTransfer = async () => {
       
            try {
                const data = {
                    userId: localStorage.getItem("id"),
                    recipientPhoneNumber: tampilUsersRecipient.phoneNumber,
                    pin,
                    amount: parseFloat(amount),
                    transactionTime,
                    notes
                }
                const response = await transferPost(data)
                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Transfer Success",
                        html: "Transfer Success"
                    })
                    setIdtrans(response.data.data)
                    console.log(response.data.data,"ini data berhasil")
                    navigate(`/transfer/status/${response.data.data}`)
                    localStorage.removeItem("notes")
                    localStorage.removeItem("amount")
                    localStorage.removeItem("balance")
                    localStorage.removeItem("transactionTime")
                    localStorage.removeItem("senderId")
                    localStorage.removeItem("recipient")
                    
                } else {
                    let errorMsg = ""

                    if (response.data.error === null) {
                        errorMsg = response.data.message;
                    } else {
                        errorMsg = Object.values(response.data.error).join(`<br/>`)
                    }
                    Swal.fire({
                        icon: "error",
                        title: "Transfer Failed",
                        html: errorMsg
                    })

                    
                }
            } catch (error) {
                console.log(error,"ini errornya")
             
            }
        } 
    
   
        const handleButtonClicked = () => {
            navigate(`/transfer/to/${ localStorage.getItem("recipient")}`)
          };


          const pengurangan = tampilUserSender.balance - amount;
    return (
        <Fragment>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header style={{ borderBottom: "none" }} closeButton>
                    <Modal.Title >Enter Pin to Transfer</Modal.Title>

                </Modal.Header>
                <Modal.Body  >
                    <p style={{ width: "70%" }} className='mb-5'>
                        Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                    <center>
                        {/* <PinInput
                            length={6}
                            initialValue=""
                            onChange={(value, index) => { }}
                            type="numeric"
                            inputMode="number"
                            inputStyle={{
                                borderColor: 'red', maxWidth: '60px', height: '70px', margin: '4px  ', padding: '5px', borderRadius: '6px', marginLeft: "20px", margin: '4px', // Mengatur margin (opsional)
                                padding: '5px'
                            }}
                            inputFocusStyle={{ borderColor: 'blue' }}
                            onComplete={(value, index) => { }}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        /> */}
                        <CustomPIN 
                        handleChange={(value, index) => { setPin(value) }}
                        />
                    </center>
                </Modal.Body >
                <Modal.Footer style={{ borderTop: "none" }} className='mt-5'>

                    <Button variant="primary " onClick={handleTransfer} style={{ backgroundColor: "#6379F4" }}>Continue</Button>
                </Modal.Footer>
            </Modal>


            <AfterLoginLayout
            >
 <TransferLayout>
 <div className="stack-transfer">
                        <Row bsPrefix="margin-box" >
                            <Col md={12}>
                                <div className="back-icon d-flex flex-nowrap">
                                    <IoArrowBack className="button-back " onClick={handleButtonClicked} style={{ justifyContent: "center", alignItems: "center" }} />
                                    <h2 className='text-title p-balance-mobile-receiver-title'>Confirmation</h2>
                                </div>
                                <h5 className='text-title p-balance-dekstop'>Transfer To</h5>
                            </Col>
                        </Row>


                        <h5 className='text-title p-balance-mobile-receiver-title'>Transfer To</h5>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">
                                <div className='mx-1'>
                                    <img src={tampilUsersRecipient.sharedUrl != null ? tampilUsersRecipient.sharedUrl: blankPict } alt="" className='image-size'/>
                                </div>
                                <div className='d-flex flex-column p-2'>
                                    <div>{tampilUsersRecipient.firstName + " " + tampilUsersRecipient.lastName}</div>
                                    <div className='p-auth opacity-75'>{tampilUsersRecipient.phoneNumber}</div>
                                </div>
                            </div>
                        </div>

                        <h5 className='text-title p-balance-dekstop mt-4'>Details</h5>
                        <h5 className='text-title p-balance-mobile-receiver-title mt-4'>Details</h5>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">
                                <div className='d-flex flex-column p-2'>
                                    <div className='p-auth opacity-75'  >Amount</div>
                                    <div > {`Rp ${parseFloat(amount).toLocaleString('id-ID')}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div className='p-auth opacity-75'>Balance Left</div>
                                    <div >{`Rp ${parseFloat(pengurangan).toLocaleString('id-ID')}` }</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div className='p-auth opacity-75'>Date & Time</div>
                                    <div > {formattedDate}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">
                                <div className='d-flex flex-column p-2'>
                                    <div className='p-auth opacity-75'>Notes</div>
                                    <div >{notes}</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row-reverse mt-4">
                            <div className="d-flex flex-row justify-content-end custom-button-home mb-3" style={{ width: "60%" }}>
                                <Button onClick={handleShow} variant="primary custom-button-home" className='mx-2' style={{ backgroundColor: "#6379F4" }}>Continue</Button>
                            </div>
                        </div>
                 </div>
                </TransferLayout>
            </AfterLoginLayout>

        </Fragment>
    )
}

export default Confirmation