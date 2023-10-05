import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import imagephone1 from '../../assets/images/landingphone1.png'
import './LandingPagee.css'

const LandingPage = () => {
    return (
        <Row>
            
            <Col md={6} className="landing-page-text">
                <h2 className='tagline'>Awesome App <br /> For Saving <span style={{ color: "#6379F4" }}>Great </span> Time.</h2>
                <p>we bring you a mobile app for banking problems <br />that oftenly wasting much of your time</p>
            </Col>
            <Col md={6} className="landing-page-image">
                {/* Bagian kiri (gambar) */}
                <img
                    src={imagephone1}
                    alt="Gambar Anda"
                    className="img-fluid"
                />
            </Col>
        </Row>
    )
}

export default LandingPage