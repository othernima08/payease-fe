import { useState, useEffect } from "react";
import './profileInformation.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { getUserById } from "../../../services/users";
// import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProfileComponent = () => {
  const [detail, setDetail] = useState({});
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

  // const { id } = useParams();

  const handleData = async () => {
      // e.preventDefault();
      console.log('handdata is called');

      try {
          const response = await getUserById(userId)
              if (response.data.success) {
                  const data = response.data.data
                  setDetail(data);                   
                  console.log(data)
              }else {
              console.error(`Error  ${id}`);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  };

  useEffect(() => {
      handleData();
  }, [userId]);

  const handleManageButtonClick = () => {

    if (detail && detail.phoneNumber) {
      // kalau ada ke halaman manage-phone
      navigate('/profile/manage-phone');
    } else {
      // kalau blm ke halaman add-phone
      navigate('/profile/add-phone');
    }
  };

  return (
    <Container className='profileinformation-container'>
      <Row>
        <Col>
          <div className='personal-information'>
            <h4>Personal information</h4>
            <p className='text-subtitle'>We got your personal information from the sign<br />up process. if you want to make changes on <br />your information, contact our support.</p>
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
                  <h5>{detail.firstName}</h5>
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
                  <h5>{detail.lastName}</h5>
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
                  <h5>{detail.email}</h5>
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
                  <h5>{detail.phoneNumber || "-" }</h5>
                </div>
                <div className="manage-profile">
                  <a className='manage-button' onClick={handleManageButtonClick} > Manage</a> {/*route ke halaman edit nomer hp*/ }
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