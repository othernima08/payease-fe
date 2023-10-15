import React, { useEffect, useState } from 'react'
import AfterLoginLayout from '../../layout/afterLogin'
import "./transfer.css";
import { ButtonGroup, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import blank from "../../assets/images/blank.jpg"
import { NumericFormat } from 'react-number-format';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../../services/users';
import ReceiverCard from '../../components/transferComponents/receiverCard';
import Swal from 'sweetalert2';
import { IconContext } from 'react-icons';
import { BiEnvelope, BiPencil } from 'react-icons/bi';

const InputAmount = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inAMount, setAmount] = useState('');
    const [notes, setNotes] = useState('');
    const [tampilUsersRecipient, setTampilUserRecipient] = useState(false);
    const [tampilUserSender, SetTampilUserSender] = useState(false);
    const { id } = useParams();
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


    const navigate = useNavigate();



    const getuserId = async () => {
        try {

            const sender = localStorage.getItem("id");
            //  console.log(sender);
            const res = await getUserById(id)
            const resSender = await getUserById(sender)
            // console.log(res,"recepient");
            // console.log(resSender,"sender");
            setTampilUserRecipient(res.data.data);
            SetTampilUserSender(resSender.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getuserId();
    }, []);

    // console.log(tampilUsersRecipient, "mapsnyna");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (inAMount === '' || parseFloat(inAMount) > tampilUserSender.balance) {

                Swal.fire({
                    icon: "error",
                    title: "Invalid PIN or insufficient balance",
                    html: "Invalid PIN or insufficient balance"
                })
            }


            else {
                const formatDateForServer = (date) => {
                    // Assuming that 'date' is a string in the format 'yyyy-MM-dd HH:mm:ss'
                    const parts = date.split(' ');
                    const [datePart, timePart] = parts;
                    const [year, month, day] = datePart.split('-');
                    const [hour, minute, second] = timePart.split(':');

                    // Create a JavaScript Date object
                    const formattedDate = new Date(year, month - 1, day, hour, minute, second);

                    // Convert the JavaScript Date to ISO-8601 format
                    const isoFormattedDate = formattedDate.toISOString();

                    return isoFormattedDate;
                };

                const originalDateTime = "2023-10-13 09:43:00";
                const isoFormattedDateTime = formatDateForServer(originalDateTime);
                localStorage.setItem("senderId", tampilUserSender.id);
                localStorage.setItem("recipient", tampilUsersRecipient.id);
                localStorage.setItem("notes", notes);
                localStorage.setItem("amount", inAMount);
                localStorage.setItem("balance", tampilUserSender.balance);
                localStorage.setItem("transactionTime", isoFormattedDateTime); // Store the formatted time
                navigate("/transfer/confirmation")
            }

        } catch (error) {

        }
    }


    const [eFieldOnFocus, seteFieldOnFocus] = useState(false)
    const handleeFocus = (e) => {
        e.preventDefault()

        seteFieldOnFocus(true)
    }

    const handleeBlur = (e) => {
        e.preventDefault()

        seteFieldOnFocus(false)
    }


    return (
        <AfterLoginLayout
        >
            <div className="transfer-container ">
                <div className="content-container ">
                    <Row bsPrefix="margin-box" >
                        <Col md={12}>
                            <div className=" back-icon d-flex flex-nowrap"> <Link to={"/transfer/receiver"}>
                                <IoArrowBack className="button-back" style={{ justifyContent: "center", alignItems: "center" }}
                                /></Link>

                                <h2 className='text-title'>Transfer Money</h2>
                            </div>
                        </Col>
                    </Row>

                    <ReceiverCard
                        key={tampilUsersRecipient.id}
                        email={tampilUsersRecipient.email}
                        firstName={tampilUsersRecipient.firstName}
                        lastName={tampilUsersRecipient.lastName}
                        phoneNumber={tampilUsersRecipient.phoneNumber}
                        profilePicture={tampilUsersRecipient.profilePictureUrl != null ? tampilUsersRecipient.profilePictureUrl : blank}
                        id={tampilUsersRecipient.id}
                    />


                    <div className='p-content opacity-75'>Type the amount you want to transfer and then</div>
                    <div className='p-content opacity-75 mb-5'>  press continue to the next steps.</div>
                    <div className='d-flex  align-item-center justify-content-center flex-column'>

                        <center ><p className='p-balance-mobile-receiver mb-5 d-flex justify-content-center'>{`Rp. ${parseFloat(tampilUserSender.balance).toLocaleString('id-ID')}`}  Available</p></center>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', }}>

                            <NumericFormat
                                placeholder="0.00"
                                thousandSeparator={true}
                                prefix={'Rp.'}
                                style={{
                                    maxWidth: '400px',
                                    height: '40px',
                                    marginTop: '10px',
                                    fontSize: '30px',
                                    marginBottom: '50px',
                                    border: 'none',
                                    textAlign: 'center',
                                }}

                                className={isFocused ? 'input-focus' : ''}
                                onValueChange={(values) => {
                                    setAmount(values.value);
                                }}
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                            />

                        </div>
                    </div>

                    <center className='mb-5 '><p className='p-balance-dekstop'>  {`Rp. ${parseFloat(tampilUserSender.balance).toLocaleString('id-ID')}`}  Available</p></center>
                    <div className="d-flex align-time-center justify-content-center">
                        <div className="d-inline-flex w-50 flex-column " style={{
                            marginBottom: '80px',
                            textAlign: 'center'
                        }}>

                            {/* <InputGroup className="mb-4"
                            >
                                <InputGroup.Text id="basic-addon1"><i className="bi bi-pencil"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Notes"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    style={{
                                        width: '50px',
                                        textAlign: 'center'
                                    }}
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </InputGroup> */}
<div className="w-100">

                            <section className='input-container mb-5'>
                                <IconContext.Provider value={{ color: `${eFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                                    <p className='input-icon'><BiPencil /></p>
                                </IconContext.Provider>
                                <input
                                    onFocus={handleeFocus}
                                    onBlur={handleeBlur}
                                    type="email"
                                    className="p-auth opacity-75"
                                    placeholder="Enter your email"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    required />
                            </section>
                            </div>

                        </div>
                    </div>


                    <div className='d-flex flex-row-reverse'>
                        <div className="d-inline-flex w-50 align-item-end flex-row-reverse" >
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Continue
                            </Button>
                        </div>

                    </div>

                </div>

            </div>

        </AfterLoginLayout >
    )
}

export default InputAmount