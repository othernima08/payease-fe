import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import CustomNavbar from '../../components/navbar'
import CustomSidebar from '../../components/sidebar'
import blankPict from '../../assets/images/blank.jpg';
import CustomFooter from '../../components/footer';
import AfterLoginLayout from '../../layout/afterLogin';
import "./transfer.css";
import { ButtonGroup,  } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5';

const Transfer = () => {

    return (
        <AfterLoginLayout
        >
                <div className="transfer-container ">
                <div className="content-container ">
                    <div className="stack">
                    <Row bsPrefix="margin-box" >
                        <Col md={12}>
                            <div className="back-icon">
                                <IoArrowBack />
                            </div>
                            <h2 className='text-title p-balance-dekstop'>Search Receiver</h2>
                            <h2 className='text-title p-balance-mobile-receiver'>Find Receiver</h2>
                        </Col>
                    </Row>
       
                <InputGroup className="mb-4 ">
                    <InputGroup.Text id="basic-addon1"><i className="bi bi-search"></i></InputGroup.Text>
                    <Form.Control
                        placeholder="Search receiver here"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </div>

                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/samuel.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Samuel Suhi</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>

                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/momo.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Momo Taro</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/jessica.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Jessica Keen</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/michael.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Michael Le</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/michael.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Michael Le</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/michael.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Michael Le</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/michael.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Michael Le</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/michael.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Michael Le</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="card-container mb-2">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/michael.png" alt="" />
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <div>Michael Le</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </AfterLoginLayout>
    )
}

export default Transfer