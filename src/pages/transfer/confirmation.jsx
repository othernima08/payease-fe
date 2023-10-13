
import AfterLoginLayout from '../../layout/afterLogin'
import "./transfer.css";
import { ButtonGroup, CloseButton, Col, Form, InputGroup, Row } from 'react-bootstrap';


import { NumericFormat } from 'react-number-format';
import { IoArrowBack } from 'react-icons/io5';
import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PinInput from 'react-pin-input';
import { Link } from 'react-router-dom';
import CustomPIN from '../../components/reusable-components/pinInput';

const Confirmation = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <CustomPIN />
                    </center>
                </Modal.Body >
                <Modal.Footer style={{ borderTop: "none" }} className='mt-5'>

                    <Button variant="primary " style={{ backgroundColor: "#6379F4" }}>Continue</Button>
                </Modal.Footer>
            </Modal>


            <AfterLoginLayout
            >

                <div className="transfer-container ">
                    <div className="content-container ">
                        <Row bsPrefix="margin-box" >
                            <Col md={12}>
                                <div className="back-icon d-flex flex-nowrap"><Link to={"/transfer/input"}>
                                    <IoArrowBack className="button-back" style={{ justifyContent: "center", alignItems: "center" }} /></Link>
                                    <h2 className='text-title p-balance-mobile-receiver'>Confirmation</h2>
                                </div>
                                <h5 className='text-title p-balance-dekstop'>Transfer To</h5>
                            </Col>
                        </Row>


                        <h5 className='text-title p-balance-mobile-receiver'>Transfer To</h5>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">
                                <div className='mx-1'>
                                    <img src="/src/assets/transfer-image/samuel.png" alt="" />
                                </div>
                                <div className='d-flex flex-column p-2'>
                                    <div>Amount</div>
                                    <div className='p-auth opacity-75'>Rp100.000</div>
                                </div>
                            </div>
                        </div>

                        <h5 className='text-title p-balance-dekstop mt-4'>Details</h5>
                        <h5 className='text-title p-balance-mobile-receiver mt-4'>Details</h5>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Amount</div>
                                    <div className='p-auth opacity-75'>Rp100.000</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Balance Left</div>
                                    <div className='p-auth opacity-75'>Rp20.000</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Date & Time</div>
                                    <div className='p-auth opacity-75'>May 11, 2020 - 12.20</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Notes</div>
                                    <div className='p-auth opacity-75'>For buying some socks</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row-reverse mt-4">
                            <div className="d-flex flex-row justify-content-end custom-button-home" style={{ width: "60%" }}>
                                <Button onClick={handleShow} variant="primary custom-button-home" className='mx-2' style={{ backgroundColor: "#6379F4" }}>Continue</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </AfterLoginLayout>

        </Fragment>
    )
}

export default Confirmation