import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import imagePartner from '../../assets/images/partners.png'
import './LandingPage2.css'

const LandingPage2 = () => {
    return (
        <Row>
            <Col md={6} className="landing-page-text">
                    <h2 className='tagline'>100+  <span style={{ color: "#6379F4" }}>Trusted </span> <br /> Partners</h2>
                    <p> We have reached global level and have 100+ brand partners around the globe.</p>
            </Col>
            <Col md={6} className="landing-page-image">
                
                <img
                    src={imagePartner}
                    alt="Gambar Anda"
                    className="img-fluid"
                />
            </Col>
        </Row>
    )
}

export default LandingPage2








