import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import imagephone1 from '../../../assets/images/landingphone1.png';
import { Link } from 'react-router-dom';
import "./LandingPagee.css"

const LandingPages = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6} className="landing-page-left">
                    <div className='landing-page-left-content'>
                        <h2 className='tagline'>Awesome App <br /> For Saving <span style={{ color: "#6379F4" }}>Great </span> Time.</h2>
                        <div className='paragraf'>
                            <p>We bring you a mobile app for banking problems that often waste much of your time</p>
                            <Link to={"/register"}>   <Button style={{ backgroundColor: "#6379F4", color: "#FFFFFF" }}>Try it free</Button></Link>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="landing-page-right">
                    <div className="button-landing">
                    <div className="button-container">
                            <Link to={"/login"} ><Button className='button-login'>Login</Button></Link>
                            <Link to={"/register"} ><Button className='button-login' style={{ backgroundColor: "#FFFFFF", color: "#6379F4" }}>SignUp</Button></Link>
                        </div>
                        <img
                            src={imagephone1}
                            alt="Gambar Anda"
                            className="img-fluid-right"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPages;
