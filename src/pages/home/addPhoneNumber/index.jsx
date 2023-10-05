import React from 'react';
import { Container, Row, Col, Button,InputGroup, FormControl } from 'react-bootstrap';
import "./addPhone.css";
import "font-awesome/css/font-awesome.css";
import AfterLoginLayout from '../../../layout/afterLogin';

const AddPhoneNumber = () => {
  return (
   <AfterLoginLayout>
      <Container className="add-phone-number-container">
      <Row>
        <Col md={12}>
        <div className="back-icon">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </div>
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
          <Button className="custom-button">Add Phone Number</Button>
        </Col>
      </Row>
    </Container>

   </AfterLoginLayout>
  );
}

export default AddPhoneNumber;
