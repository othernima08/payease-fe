import React from 'react'
import './profileInformation.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProfileComponent = () => {
  return (
    <Container className='profile-container'>

      <Row>
        <Col>
          <div className='personal-information'>
            <h4>Personal information</h4>
            <p className='text-profile'>We got your personal information from the sign <br />up process. if you want to make changes on <br />your information, contact our support.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-details">
                <div className="profile-info">
                  <p className='text-profile'>First Name</p>
                  <h5>Trisna</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-details">
                <div className="profile-info">
                  <p className='text-profile'>Last Name</p>
                  <h5>Bayu</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-details">
                <div className="pforile-info">
                  <p className='text-profile'>Verified E-mail</p>
                  <h5>email@email.com</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-details">
                <div className="profile-info">
                  <p className='text-profile'>Phone Number</p>
                  <h5>+62 813 9387 7946</h5>
                </div>
                <div className="manage-profile">
                  <a className='manage-button' onClick={()=>{}} > Manage</a>
                  {/* <FontAwesomeIcon icon={faTrash} className="delete-icon" /> */}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default ProfileComponent