import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gambarhp from "../../assets/images/gambarhp.png";

import "./landingPage.css";
import LandingPage1 from '../../components/card/LandingPage1';
import LandingPage2 from '../../components/card/LandingPage2';
import LandingPages from '../../components/card/LandingPagee';
import LandingPage4 from '../../components/card/LandingPage4';

const LandingPage = () => {
    return (
        <div>
            <LandingPages />
            <LandingPage1 />
            <LandingPage2 />
            <Container fluid style={{ backgroundColor: "#473AD10F" }}>
                {/* container jadiin fluid */}
                <Row>
                    <Col md={6} className="landing-page-image">
                        {/* Bagian kiri (gambar) */}
                        <img
                            src={gambarhp}
                            alt="Gambar Anda"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6} className="landing-page-text">
                        {/* Bagian kanan (teks) */}
                        <div>
                            <h2 className='tagline'>All The  <span style={{ color: "#6379F4" }}>Great </span> Zwallet Features</h2>
                        </div>
                        {/* Card dengan fitur-fitur */}
                        <Card>
                            <Card.Body>
                                <Card.Title> <span style={{ color: "#6379F4" }}>1. </span> Small Fee</Card.Title>
                                <Card.Text>
                                    We only charge 5% of every success transaction done in Zwallet
                                    app.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><span style={{ color: "#6379F4" }}>2. </span>  Data Secured</Card.Title>
                                <Card.Text>
                                    All your data is secured properly in our system and it’s
                                    encrypted.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><span style={{ color: "#6379F4" }}>3. </span> User Friendly</Card.Title>
                                <Card.Text>
                                    Zwallet comes with a modern and sleek design that is not
                                    complicated.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
            <LandingPage4 />

            {/* Footer section */}
            <div className="footer">
                <h2>Zwallet</h2>
                <p>Simplify financial needs and save much time in banking needs with one single app.</p>
                <hr style={{ backgroundColor: "#fff", margin: "20px 0" }} />
                <div className="footer-details">
                    <div className="footer-left">
                        <p>2020 Zwallet. All rights reserved.</p>
                    </div>
                    <div className="footer-right">
                        <p>+62 5637 8882 9901    contact@zwallet.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
