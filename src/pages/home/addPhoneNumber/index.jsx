import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./addPhone.css";
import "font-awesome/css/font-awesome.css";

const AddPhoneNumber = () => {
  return (
    <Container className="add-phone-number-container">
      <Row>
        <Col md={12}>
          <h2>Add Phone Number</h2>
          <p>
            Add at least one phone number for the transfer <br /> ID so you can start transferring your money to <br /> another user.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="phone-input">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <input type="text" placeholder="+62 Enter your phone number" />
          </div>
          <button>Add Phone Number</button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPhoneNumber;
