import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import CustomNavbar from '../../components/navbar'
import CustomSidebar from '../../components/sidebar'
import blankPict from '../../assets/images/blank.jpg';
import CustomFooter from '../../components/footer';
import AfterLoginLayout from '../../layout/afterLogin';
import "./transfer.css";
import { ButtonGroup, } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5';

const TransferStatus = () => {
    return (
        <AfterLoginLayout
        >
            <div className="transfer-container ">
                <div className="content-container ">
                    <Row bsPrefix="margin-box" >
                        <Col md={12}>
                            <div className="back-icon">
                                <IoArrowBack />
                            </div>

                            <h2 className='text-title p-balance-mobile-receiver'>Confirmation</h2>
                        </Col>
                    </Row>


                    <div className="d-flex img-success-mobile mb-1 mt-2 flex-column">
                        <img src="/src/assets/pin-image/success.png" style={{ width: "10%" }} alt="" className=' mb-3' />
                        <h5 className='text-title '>Transfer Success</h5>
                    </div>




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
                    <h5 className='text-title mt-2 mb-2'>Transfer To</h5>

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
                    <div className="d-flex flex-row-reverse mt-4">
                        <div className="d-flex flex-row custom-button-home" style={{ width: "60%" }}>
                            <Button variant="primary custom-button" className='mx-2' style={{ width: "60px" , backgroundColor:"rgba(99, 121, 244, 0.15)"}}><i class="bi bi-share"  style={{ color: "black" }}></i></Button>
                            <Button variant="primary custom-button" className='mx-2'  style={{ backgroundColor: "rgba(99, 121, 244, 0.15)", color: "#6379F4", width: "200px" }}><i class="bi bi-download mx-2"></i>Download PDF</Button>
                            <Button variant="primary custom-button-home" className='mx-2' style={{backgroundColor:"#6379F4"}}>Back to Home</Button>
                        </div>
                    </div>

                </div>
            </div>
        </AfterLoginLayout>
    )
}

export default TransferStatus