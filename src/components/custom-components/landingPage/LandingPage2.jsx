import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import imagePartner from '../../../assets/images/partners.png';
import './LandingPage2.css';

const LandingPage2 = () => {
  return (
    <Container className="partners-container">
      <Row>
        <Col md={6} className="landing-page-text">
          <div className="text-container">
            <h2 className='tagline'>100+  <span style={{ color: "#6379F4" }}>Trusted </span> <br /> Partners</h2>
            <p> We have reached global level and have 100+<br /> brand partners around the globe.</p>
          </div>
        </Col>
        <Col md={6} className="landing-page-image">
          <img
            src={imagePartner}
            alt="Gambar Anda"
            className="img-fluid2"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage2;