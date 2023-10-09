import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import { IoArrowBackSharp } from "react-icons/io5";
import blank from '../../assets/images/blank.jpg'

import './history.css'
import AfterLoginLayout from '../../layout/afterLogin';
import TransactionHistoryCard from '../../components/transactionHistoryCard';
import DatePickerModal from '../../modal/datepicker';

const TransactionHistory = () => {
    const [openDateModal, setOpenDateModal] = useState(false)

    const handleOpenDateModal = ()=>  setOpenDateModal(true)

    const handleCloseDateModal = ()=>setOpenDateModal(false)

    return (
        <React.Fragment>
            <AfterLoginLayout
                children={
                    <Container bsPrefix='transfer-history-container'>
                        <Row bsPrefix='transfer-history-head-container'>
                            <Col md={12}>
                                <div className="transfer-history-back-icon">
                                    <IoArrowBackSharp />
                                </div>
                                <h2 className="transfer-history-title">Transaction History</h2>
                            </Col>
                        </Row>
                        <Row bsPrefix="transfer-history-detail-container">
                            <section className='transfer-history-detail'>
                                <section className="transfer-history-subtitle">
                                    This Week
                                </section>
                                <TransactionHistoryCard
                                    userName={"Samuel Suhi"}
                                    type={"income"}
                                    subtype={"Transfer"}
                                    userPict={blank}
                                    amount={"50.000"}
                                />
                                <TransactionHistoryCard
                                    userName={"Netflix"}
                                    type={"expense"}
                                    subtype={"Subscription"}
                                    userPict={blank}
                                    amount={"149.000"}
                                />
                            </section>
                            <section className='transfer-history-detail'>
                                <section className="transfer-history-subtitle">
                                    This Month
                                </section>
                                <TransactionHistoryCard
                                    userName={"Christine Mariani"}
                                    type={"income"}
                                    subtype={"Transfer"}
                                    userPict={blank}
                                    amount={"150.000"}
                                />
                                <TransactionHistoryCard
                                    userName={"Adobe Inc."}
                                    type={"expense"}
                                    subtype={"Subscription"}
                                    userPict={blank}
                                    amount={"249.000"}
                                />
                            </section>
                        </Row>
                        <Row bsPrefix='transaction-history-button-container'>
                            <Button style={{ backgroundColor: "#FFFFFF", border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg"><p style={{ color: "#FF5B37" }}><AiOutlineArrowDown /></p></Button>
                            <Button style={{ backgroundColor: "#FFFFFF", border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg"><p style={{ color: "#1EC15F" }}><AiOutlineArrowUp /></p></Button>
                            <Button style={{ width:"60%", backgroundColor: "#FFFFFF", border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg"><p style={{ color: "#6379F4" }} onClick={handleOpenDateModal}>Filter by Date</p></Button>
                        </Row>
                    </Container>
                } />
                {openDateModal && <DatePickerModal open={openDateModal} handleClose={handleCloseDateModal}/>}
        </React.Fragment>
    )
}

export default TransactionHistory