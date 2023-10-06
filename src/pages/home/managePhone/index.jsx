import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./managePhone.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManagePhoneNumber = () => {
  return (
    <Container className="manage-phone-container">
      <Row>
        <Col md={12}>
          <h2>Manage Phone Number</h2>
          <p className="text1">
            You can only delete the phone number and <br /> then you must add another phone number.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className='phone'>
            <Card.Body>
              <div className="phone-details">
                <div className="phone-info">
                  <h5>Primary</h5>
                  <p>+62 813 9387 7946</p>
                </div>
                <div className="delete-icon-container">
                  <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ManagePhoneNumber;
