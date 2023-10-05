import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import imagephone1 from '../../assets/images/landingphone1.png'
import './LandingPagee.css'
import backgroundImg from '../../assets/images/bg.png'

const LandingPage = () => {
    return (
        <Row>

            <Col md={6} className="landing-page-text">
                <div>
                <h2 className='tagline'>Awesome App <br /> For Saving <span style={{ color: "#6379F4" }}>Great </span> Time.</h2>

                </div>
                <div className='paragraf'>
                <p >we bring you a mobile app for banking problems </p>
                <p>that oftenly wasting much of your time</p>

                </div>
                <Button style={{ backgroundColor: "#6379F4", color: "#FFFFFF" }}>Try it free</Button>{' '}
            </Col>
            <Col md={6} className="landing-page-image">
                <div className="">

                    <div className='button-landing'>
                        <Button className='button-login' variant="outline-light">Login</Button>{' '}
                        <Button style={{ backgroundColor: "#FFFFFF", color: "#6379F4" }}>SignUp</Button>{' '}
                    </div>

                    <img
                        src={imagephone1}
                        alt="Gambar Anda"
                        className="img-fluid"
                        style={{ top:"45px", right: "145px"}}
                    />
                </div>
                <img src={backgroundImg}
                    alt="img"
                    className='bg-img' />

            </Col>
        </Row>
    )
}

export default LandingPage