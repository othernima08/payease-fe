import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { IoArrowBackSharp } from "react-icons/io5";
import blank from '../../assets/images/blank.jpg'

import './history.css'
import AfterLoginLayout from '../../layout/afterLogin';
import TransactionHistoryCard from '../../components/transactionHistoryCard';

const TransactionHistory = () => {
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
                        <Container bsPrefix="transfer-history-detail-container">
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
                        </Container>
                    </Container>
                } />
        </React.Fragment>
    )
}

export default TransactionHistory