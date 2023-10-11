import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import sherinaImage from "../../assets/images/th (1).jpeg"
import jessicaImage from "../../assets/images/th (2).jpeg"
import robertImage from "../../assets/images/th.jpeg"

const LandingPage4 = () => {
    return (
        <div className="testimonial-container">
            <h2>What Users are <span style={{ color: "#6379F4" }}>Saying </span></h2>
            <p>We have some great features from the application and it’s totally free <br /> to use by all users around the world.</p>
            <Row className="justify-content-center" style={{marginRight: "61px", marginLeft: "61px"}}>
                <Col md={4}>
                    <Card className="testimonial-card">
                        <img src={sherinaImage} alt="Sherina Chaw" className="testimonial-image" />
                        <Card.Body>
                            <Card.Title>Sherina Chaw</Card.Title>
                            <Card.Text>
                                “I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="testimonial-card">
                        <img src={jessicaImage} alt="Jessica Mera" className="testimonial-image" />
                        <Card.Body>
                            <Card.Title>Jessica Mera</Card.Title>
                            <Card.Text>
                                “I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="testimonial-card">
                        <img src={robertImage} alt="Robert Chandler" className="testimonial-image" />
                        <Card.Body>
                            <Card.Title>Robert Chandler</Card.Title>
                            <Card.Text>
                                “Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage4