import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import "./LandingPage1.css"
import imageCall from '../../assets/images/call.png'
import imageLock from '../../assets/images/lock.png'
import imageDownload from '../../assets/images/downloadicon.png'

const LandingPage1 = () => {
    return (
            <div className="features-container">
                <h2><span style={{ color: "#6379F4" }}>About </span>the Application</h2>
                <p>We have some great features from the application and it’s totally free <br /> to use by all users around the world.</p>
                <br />
                <Row className="row-card">
                    {/* background: #473AD10F; */}
                    <Col md={4}>
                        <Card className="testimonial-card">
                            {/* icon */}
                            <img src={imageCall} alt="icon..." className='card-icon' />
                            <Card.Body>
                                <Card.Title>24/7 Support</Card.Title>
                                <Card.Text className='card-text'>
                                    We Have 24/7 contact support so you can contact us whenever you want and we will respond it.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={4}>

                        <Card className="testimonial-card">
                            {/* icon */}
                            <img src={imageLock} alt="icon..." className='card-icon' />
                            <Card.Body>
                                <Card.Title>Data Privacy</Card.Title>
                                <Card.Text className='card-text'>
                                    We make sure your data is safe in our database and we will encrypt any data you submitted to us.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col >
                        <Card className="testimonial-card">
                            {/* icon */}
                            <img src={imageDownload} alt="icon..." className='card-icon' />
                            <Card.Body>
                                <Card.Title>Easy Download</Card.Title>
                                <Card.Text className='card-text'>
                                    PayEase is 100% totally free to use it's now available on Google Play Store and App Store.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>

                </Row>
            </div>

    )
}

export default LandingPage1