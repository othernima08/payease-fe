import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import { IoArrowBackSharp } from "react-icons/io5";
import blank from '../../../assets/images/blank.jpg'

import './history.css'
import AfterLoginLayout from '../../../layout/afterLogin';
import TransactionHistoryCard from '../../../components/reusable-components/transactionHistoryCard';
import DatePickerModal from '../../../modal/datepicker';

import { getTransactionHistoryByUserId, getTransactionHistoryByUserIdAndStatus } from '../../../services/transactions';
import NotificationCard from '../../../components/reusable-components/notificationCard';

const TransactionHistory = () => {
    const [openDateModal, setOpenDateModal] = useState(false)
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleOpenDateModal = () => setOpenDateModal(true)
    const handleCloseDateModal = () => setOpenDateModal(false)

    const handleGetAllData = async () => {
        try {
            const response = await getTransactionHistoryByUserId(localStorage.getItem("id"));

            if (response.data.success) {
                setTransactionHistory(response.data.data)
                console.log(response.data.data)
            } else {
                setError(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetDataByStatus = async (isIncome) => {
        try {
            const response = await getTransactionHistoryByUserIdAndStatus(localStorage.getItem("id"), isIncome);

            if (response.data.success) {
                setTransactionHistory(response.data.data)
            } else {
                setError(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetAllData()
    }, [])

    return (
        <React.Fragment>
            <AfterLoginLayout
                children={
                    <Container bsPrefix='transaction-history-container'>
                        <Row bsPrefix='transaction-history-head-container'>
                            <Col md={12}>
                                <div className="transaction-history-back-icon" onClick={() => navigate("/home")}>
                                    <IoArrowBackSharp />
                                </div>
                                <h2 className="transaction-history-title">Transaction History</h2>
                            </Col>
                        </Row>
                        <Row bsPrefix="transaction-history-content">
                            <Row bsPrefix="transaction-history-detail-container">
                                <section className='transaction-history-detail'>
                                    <section className="transaction-history-subtitle">
                                        This Week
                                    </section>
                                    {
                                        (transactionHistory != [] && transactionHistory?.thisWeek?.length > 0) ? transactionHistory.thisWeek.map(item => (
                                            <TransactionHistoryCard
                                                key={item.id}
                                                userName={item.name}
                                                type={item.type === "Transfer to" ? "expense" : "income"}
                                                subtype={item.type === "Top Up" ? "Top up" : "Transfer"}
                                                userPict={item.profile_picture_url != null ? item.profile_picture_url : blank}
                                                amount={item.amount}
                                            />
                                        )) : <p>No Data</p>
                                    }
                                </section>
                                <section className='transaction-history-detail'>
                                    <section className="transaction-history-subtitle">
                                        This Month
                                    </section>
                                    {
                                        (transactionHistory != [] &&  transactionHistory?.thisMonth?.length > 0) ? transactionHistory.thisMonth.map(item => (
                                            <TransactionHistoryCard
                                                key={item.id}
                                                userName={item.name}
                                                type={item.type === "Transfer to" ? "expense" : "income"}
                                                subtype={item.type === "Top Up" ? "Top up" : "Transfer"}
                                                userPict={item.profile_picture_url != null ? item.profile_picture_url : blank}
                                                amount={item.amount}
                                            />
                                        )) : <p>No Data</p>
                                    }
                                </section>
                                <section className='transaction-history-detail'>
                                    <section className="transaction-history-subtitle">
                                        Older
                                    </section>
                                    {
                                        (transactionHistory != [] && transactionHistory?.older?.length > 0)? transactionHistory.older.map(item => (
                                            <TransactionHistoryCard
                                                key={item.id}
                                                userName={item.name}
                                                type={item.type === "Transfer to" ? "expense" : "income"}
                                                subtype={item.type === "Top Up" ? "Top up" : "Transfer"}
                                                userPict={item.profile_picture_url != null ? item.profile_picture_url : blank}
                                                amount={item.amount}
                                            />
                                        )) : <p>No Data</p>
                                    }
                                </section>
                            </Row>
                            <Row bsPrefix='transaction-history-button-container'>
                                <Button className='button-amount-expenses-filter' size="lg" onClick={() => {handleGetDataByStatus(false)}}><p style={{ color: "#FF5B37" }}><AiOutlineArrowDown /></p></Button>
                                <Button className='button-amount-expenses-filter' style={{ margin: "0px 8px" }} size="lg" onClick={() => {handleGetDataByStatus(true)}}><p style={{ color: "#1EC15F" }}><AiOutlineArrowUp /></p></Button>
                                <Button className='button-filter-date' size="lg"><p style={{ color: "#6379F4" }} onClick={handleOpenDateModal}>Filter by Date</p></Button>
                            </Row>
                        </Row>
                    </Container>
                } />
            {openDateModal && <DatePickerModal open={openDateModal} handleClose={handleCloseDateModal} />}
        </React.Fragment>
    )
}

export default TransactionHistory