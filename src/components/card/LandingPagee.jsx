import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import imagephone1 from '../../assets/images/landingphone1.png'
import './LandingPagee.css'

const LandingPage = () => {
    return (
        <Row>
            
            <Col md={6} className="landing-page-text">
                {/* Bagian kanan (teks) */}
                <div>
                    <h2 className='tagline'>All The  <span style={{ color: "#6379F4" }}>Great </span> Zwallet Features</h2>
                </div>
                {/* Card dengan fitur-fitur */}
                
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