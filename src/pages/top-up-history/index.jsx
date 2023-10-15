import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { IoArrowBackSharp } from "react-icons/io5";
import blank from '../../assets/images/blank.jpg'

import './tu-history.css'
import AfterLoginLayout from '../../layout/afterLogin';
import TransactionHistoryCard from '../../components/reusable-components/transactionHistoryCard';
import { getTopUpHistoryByUserId, getTopUpHistoryByUserIdAndStatus } from '../../services/transactions';
import { useNavigate } from 'react-router';

const TopUpHistory = () => {
    const [topUpHistory, setTopUpHistory] = useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleGetAllData = async () => {
        try {
            const response = await getTopUpHistoryByUserId(localStorage.getItem("id"));

            if (response.data.success) {
                setTopUpHistory(response.data.data)
            } else {
                setError(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetDataByStatus = async (isSuccess) => {
        try {
            const response = await getTopUpHistoryByUserIdAndStatus(localStorage.getItem("id"), isSuccess);

            if (response.data.success) {
                setTopUpHistory(response.data.data)
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
                    <Container bsPrefix='top-up-history-container'>
                        <Row bsPrefix='top-up-history-head-container'>
                            <Col md={12}>
                                <div className="top-up-history-back-icon" onClick={() => navigate("/home")}>
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
                                    {
                                        (topUpHistory != []  && topUpHistory?.thisWeek?.length > 0) ? topUpHistory.thisWeek.map(item => (
                                            <TransactionHistoryCard
                                                key={item.id}
                                                userName={item.name}
                                                type={"income"}
                                                subtype={item.type}
                                                status={item.status}
                                                userPict={item.profile_picture_url != null ? item.profile_picture_url : blank}
                                                amount={item.amount}
                                            />
                                        )) : <p>No Data</p>
                                    }
                                </section>
                                <section className='top-up-history-detail'>
                                    <section className="top-up-history-subtitle">
                                        This Month
                                    </section>
                                    {
                                        (topUpHistory != [] && topUpHistory?.thisMonth?.length > 0) ? topUpHistory.thisMonth.map(item => (
                                            <TransactionHistoryCard
                                                key={item.id}
                                                userName={item.name}
                                                type={"income"}
                                                subtype={item.type}
                                                status={item.status}
                                                userPict={item.profile_picture_url != null ? item.profile_picture_url : blank}
                                                amount={item.amount}
                                            />
                                        )) : <p>No Data</p>
                                    }
                                </section>
                                <section className='top-up-history-detail'>
                                    <section className="top-up-history-subtitle">
                                        Older
                                    </section>
                                    {
                                        (topUpHistory != [] && topUpHistory?.older?.length > 0) ? topUpHistory.older.map(item => (
                                            <TransactionHistoryCard
                                                key={item.id}
                                                userName={item.name}
                                                type={"income"}
                                                subtype={item.type}
                                                status={item.status}
                                                userPict={item.profile_picture_url != null ? item.profile_picture_url : blank}
                                                amount={item.amount}
                                            />
                                        )) : <p>No Data</p>
                                    }
                                </section>
                            </Row>
                            <Row bsPrefix='top-up-history-button-container'>
                                <Button style={{ width: '100%', backgroundColor: "#FFFFFF", marginRight: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg" onClick={handleGetAllData}><p style={{ color: "blue" }} >All</p></Button>
                                <Button style={{ width: '100%', backgroundColor: "#FFFFFF", marginRight: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg" onClick={() => { handleGetDataByStatus(false) }}><p style={{ color: "#FF5B37" }} >Pending</p></Button>
                                <Button style={{ width: '100%', backgroundColor: "#FFFFFF", marginLeft: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg" onClick={() => { handleGetDataByStatus(true) }}><p style={{ color: "#1EC15F" }}>Success</p></Button>
                            </Row>
                        </Row>
                    </Container>
                } />
        </React.Fragment>
    )
}

export default TopUpHistory