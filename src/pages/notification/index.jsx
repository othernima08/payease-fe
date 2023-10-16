import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, Col, Container, Row } from 'react-bootstrap'

import { IoArrowBackSharp } from "react-icons/io5";

import NotificationCard from '../../components/reusable-components/notificationCard/Index';
import AfterLoginLayout from '../../layout/afterLogin';
import { getTransactionHistoryByUserId } from '../../services/transactions';

import "./notification.css"
import { is } from 'date-fns/locale';
import LoadingScreen from '../loadingScreen';

const Notification = () => {
    const [notification, setNotification] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const handleGetAllData = async () => {
        try {
            const response = await getTransactionHistoryByUserId(localStorage.getItem("id"));

            if (response.data.success) {
                setNotification(response.data.data)
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

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <React.Fragment>
            {!isLoading ?
                <AfterLoginLayout
                    children={
                        <Container bsPrefix='notification-container'>
                            <Row bsPrefix='notification-head-container'>
                                <Col md={12}>
                                    <div className="notification-back-icon" onClick={() => navigate("/home")}>
                                        <IoArrowBackSharp />
                                    </div>
                                    <h2 className="notification-title">Notification</h2>
                                </Col>
                            </Row>
                            <Row bsPrefix="notification-content">
                                <Row bsPrefix="notification-detail-container">
                                    <section className='notification-detail'>
                                        <section className="notification-subtitle">
                                            This Week
                                        </section>
                                        {
                                            (notification != [] && notification?.thisWeek?.length > 0) ? notification.thisWeek.map(item => (
                                                <NotificationCard
                                                    key={item.id}
                                                    id={item.id}
                                                    type={item.type === "Transfer to" ? "expense" : "income"}
                                                    notes={item.type === "Top Up" ? (item.type + " from " + item.name) : (item.type + " " + item.name)}
                                                    amount={`Rp ${parseFloat(item.amount).toLocaleString('id-ID')}`}
                                                />
                                            )) : <p>No Data</p>
                                        }
                                    </section>
                                    <section className='notification-detail'>
                                        <section className="notification-subtitle">
                                            This Month
                                        </section>
                                        {
                                            (notification != [] && notification?.thisMonth?.length > 0) ? notification.thisMonth.map(item => (
                                                <NotificationCard
                                                    key={item.id}
                                                    id={item.id}
                                                    type={item.type === "Transfer to" ? "expense" : "income"}
                                                    notes={item.type === "Top Up" ? (item.type + " from " + item.name) : (item.type + " " + item.name)}
                                                    amount={`Rp ${parseFloat(item.amount).toLocaleString('id-ID')}`}
                                                />
                                            )) : <p>No Data</p>
                                        }
                                    </section>
                                    <section className='notification-detail'>
                                        <section className="notification-subtitle">
                                            Older
                                        </section>
                                        {
                                            (notification != [] && notification?.older?.length > 0) ? notification.older.map(item => (
                                                <NotificationCard
                                                    key={item.id}
                                                    id={item.id}
                                                    type={item.type === "Transfer to" ? "expense" : "income"}
                                                    notes={item.type === "Top Up" ? (item.type + " from " + item.name) : (item.type + " " + item.name)}
                                                    amount={`Rp ${parseFloat(item.amount).toLocaleString('id-ID')}`}
                                                />
                                            )) : <p>No Data</p>
                                        }
                                    </section>
                                </Row>
                            </Row>
                        </Container>
                    } /> : <LoadingScreen />
            }
        </React.Fragment>
    )
}

export default Notification