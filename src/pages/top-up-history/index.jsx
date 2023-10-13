import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { IoArrowBackSharp } from "react-icons/io5";
import blank from '../../assets/images/blank.jpg'

import './tu-history.css'
import AfterLoginLayout from '../../layout/afterLogin';
import TransactionHistoryCard from '../../components/reusable-components/transactionHistoryCard';
import { getTopUpHistoryByUserId, getTopUpHistoryByUserIdAndStatus } from '../../services/transactions';

const TopUpHistory = () => {
    const [topUpHistory, setTopUpHistory] = useState([]);
    const [error, setError] = useState(null);

    const handleGetAllData = async () => {
        try {
            const response = await getTopUpHistoryByUserId(localStorage.getItem("id"));

            if (response.data.success) {
                setTopUpHistory(response.data.data)
                console.log(response.data.data)
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
                console.log(response.data.data)
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
                                <div className="top-up-history-back-icon">
                                    <IoArrowBackSharp />
                                </div>
                                <h2 className="top-up-history-title">Top Up History</h2>
                            </Col>
                        </Row>
                        <Row bsPrefix="top-up-history-content">
                            <Row bsPrefix="top-up-history-detail-container">
                                <section className='top-up-history-detail'>
                                    {
                                        topUpHistory?.map(item => (
                                            <TransactionHistoryCard
                                                userName={item.name}
                                                type={"income"}
                                                subtype={item.type}
                                                status={item.status}
                                                userPict={item.profile_picture_url}
                                                amount={item.amount}
                                            />
                                        ))
                                    }
                                    {/* <section className="top-up-history-subtitle">
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
                                    /> */}
                                </section>
                            </Row>
                            <Row bsPrefix='top-up-history-button-container'>
                                <Button style={{ width: '100%', backgroundColor: "#FFFFFF", marginRight: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg" onClick={handleGetAllData}><p style={{ color: "blue" }} >All</p></Button>
                                <Button style={{ width: '100%', backgroundColor: "#FFFFFF", marginRight: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg" onClick={()=>{handleGetDataByStatus(false)}}><p style={{ color: "#FF5B37" }} >Pending</p></Button>
                                <Button style={{ width: '100%', backgroundColor: "#FFFFFF", marginLeft: 8, border: "none", boxShadow: "0px 0px 20px 4px #ebebeb" }} size="lg" onClick={()=>{handleGetDataByStatus(true)}}><p style={{ color: "#1EC15F" }}>Success</p></Button>
                            </Row>
                        </Row>
                    </Container>
                } />
        </React.Fragment>
    )
}

export default TopUpHistory