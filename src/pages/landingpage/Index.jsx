import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gambarhp from "../../assets/images/gambarhp.png";
import sherinaImage from "../../assets/images/th (1).jpeg"
import jessicaImage from "../../assets/images/th (2).jpeg"
import robertImage from "../../assets/images/th.jpeg"
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div>
      <Container style={{ backgroundColor: "#fff" }}>
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
            <Card className="landing-page-card">
              <Card.Body>
                <Card.Title> <span style={{ color: "#6379F4" }}>1. </span> Small Fee</Card.Title>
                <Card.Text>
                  We only charge 5% of every success transaction done in Zwallet
                  app.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="landing-page-card">
              <Card.Body>
                <Card.Title><span style={{ color: "#6379F4" }}>2. </span>  Data Secured</Card.Title>
                <Card.Text>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="landing-page-card">
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

        {/* Testimoni section */}
        <div className="testimonial-container">
          <h2>What Users are <span style={{ color: "#6379F4" }}>Saying </span></h2>
          <p>We have some great features from the application and it’s totally free <br /> to use by all users around the world.</p>
          <Row className="justify-content-center">
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
      </Container>

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
