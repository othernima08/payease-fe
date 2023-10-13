import React, { useEffect, useState } from 'react'
import AfterLoginLayout from '../../layout/afterLogin'
import "./transfer.css";
import { ButtonGroup, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NumericFormat } from 'react-number-format';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from '../../services/users';
import ReceiverCard from '../../components/receiverCard';

const InputAmount = () => {
    const [isFocused, setIsFocused] = useState(false);

    const [tampilUsers, setTampilUser] = useState(false);
    const { id } = useParams();
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

        
    const getuserId = async () => {
        try {
           const res = await getUserById(id)
            console.log(res);
            setTampilUser(res.data.data);
         
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getuserId();
    }, []);

    console.log(tampilUsers,"mapsnyna");

    const handleSubmit = async (e) => {
try {
    e.preventDefault();
    set
    
} catch (error) {
    
}
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
                                    key={tampilUsers.id}
                                    email={tampilUsers.email}
                                    firstName={tampilUsers.firstName}
                                    lastName={tampilUsers.lastName}
                                    phoneNumber={tampilUsers.phoneNumber}
                                    profilePicture={tampilUsers.profilePictureUrl}
                                    id={tampilUsers.id}
                                />
                     

                    <div className='p-content opacity-75'>Type the amount you want to transfer and then</div>
                    <div className='p-content opacity-75'>  press continue to the next steps.</div>
                    <div className='d-flex  align-item-center justify-content-center flex-column'>
                
                    <center ><p className='p-balance-mobile-receiver mb-5 d-flex justify-content-center'>Rp.{tampilUsers.balance}  Available</p></center>
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
                                onChange={(e)=> handleSubmit(e)}
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                            />
                        </div>
                    </div>

                    <center className='mb-5 '><p className='p-balance-dekstop'>Rp.{tampilUsers.balance} Available</p></center>
                    <div className="d-flex align-time-center justify-content-center">
                        <div className="d-inline-flex w-50 flex-column " style={{
                            marginBottom: '80px',
                            textAlign: 'center'
                        }}>

                            <InputGroup className="mb-4"
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
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <Link to={"/transfer/confirmation"}>
                    <div className='d-flex flex-row-reverse'>
                        <div className="d-inline-flex w-50 align-item-end flex-row-reverse" >
                            <Button variant="primary" >
                                Continue
                            </Button>
                        </div>
                    </div>
                    </Link>
                </div>

            </div>

        </AfterLoginLayout>
    )
}

export default InputAmount