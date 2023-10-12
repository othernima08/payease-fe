import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import { IoArrowBackSharp } from "react-icons/io5";
import blank from '../../assets/images/blank.jpg'

import './tu-history.css'
import AfterLoginLayout from '../../layout/afterLogin';
import TransactionHistoryCard from '../../components/reusable-components/transactionHistoryCard';
import DatePickerModal from '../../modal/datepicker';

const TopUpHistory = () => {
    return (
        <React.Fragment>
            <AfterLoginLayout
                children={
                    <Container bsPrefix='top-up-history-container'>
                        <Row bsPrefix='top-up-history-head-container'>
                            <Col md={12}>
                                <div className="top-up-history-back-icon">
                                    <IoArrowBackSharp />
                                </div>
                                <h2 className="top-up-history-title">Top Up History</h2>
                            </Col>
                        </Row>
                        <Row bsPrefix="top-up-history-content">
                            <Row bsPrefix="top-up-history-detail-container">
                                <section className='top-up-history-detail'>
                                    <section className="top-up-history-subtitle">
                                        This Week
                                    </section>
                                    <TransactionHistoryCard
                                        userName={"Bank BCA"}
                                        type={"income"}
                                        subtype={"Top up"}
                                        status={"Success"}
                                        userPict={blank}
                                        amount={"50.000"}
                                    />
                                    <TransactionHistoryCard
                                        userName={"Bank BCA"}
                                        type={"income"}
                                        subtype={"Top up"}
                                        status={"Pending"}
                                        userPict={blank}
                                        amount={"50.000"}
                                    />
                                </section>
                                <section className='top-up-history-detail'>
                                    <section className="top-up-history-subtitle">
                                        This Month
                                    </section>
                                    <TransactionHistoryCard
                                        userName={"Bank BCA"}
                                        type={"income"}
                                        subtype={"Top up"}
                                        status={"Success"}
                                        userPict={blank}
                                        amount={"50.000"}
                                    />
                                </section>
                            </Row>
                            <Row bsPrefix='top-up-history-button-container'>
                                <Button style={{width: '100%', backgroundColor: "#FFFFFF", marginRight: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg"><p style={{ color: "#FF5B37" }} >Pending</p></Button>
                                <Button style={{width: '100%',backgroundColor: "#FFFFFF", marginLeft: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg"><p style={{ color: "#1EC15F" }}>Success</p></Button>
                            </Row>
                        </Row>
                    </Container>
                } />
        </React.Fragment>
    )
}

export default TopUpHistory