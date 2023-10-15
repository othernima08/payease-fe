import React from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import './notificationCard.css'

const NotificationCard = () => {
    return (
        <Card className='notif-card'>
            <Card.Body className='notif-card'>
                <div className="d-flex align-items-center">
                    <div className="notif-icon">
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div>
                        <div>
                            <Card.Title className='pop-up-title'>Transfer to mamat</Card.Title>
                        </div>
                        <div className="pop-up-amount">
                            <p className="mb-0">Rp30.000</p>  
                        </div>

                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default NotificationCard