import { useState, useEffect } from "react";
import './profileInformation.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { getUserById } from "../../../services/users";
import { IoArrowBackSharp } from "react-icons/io5";
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

    try {
      const response = await getUserById(userId)
      if (response.data.success) {
        const data = response.data.data
        setDetail(data);
        // console.log(data)
      } else {
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
      <Row bsPrefix='d-flex flex-column'>
        <Col md={12}>
          <Row bsPrefix='profile-head-container d-flex flex-row'>
            <div className="profile-back-icon mt-2" onClick={() => navigate("/profile")}>
              <IoArrowBackSharp />
            </div>

            <h2 className="change-password-title">Personal information</h2>
          </Row>
        </Col>

      </Row>

      {/* <p className="change-password-description">You must enter your current password and then type your new password twice.</p>

            */}
      <p className='p-auth opacity-75 mt-2 p-3'>We got your personal information from the sign up process. if you want to make changes on your information, contact our support.</p>


      <div className="card-container mb-2">
        <div className="d-flex flex-row">
          <div className='d-flex flex-column p-2'>
            <div className='p-auth opacity-75'>First Name</div>
            <h5>{detail.firstName}</h5>
          </div>
        </div>
      </div>

      <div className="card-container mb-2">
        <div className="d-flex flex-row">
          <div className='d-flex flex-column p-2'>
            <div className='p-auth opacity-75'>Last Name</div>
            <h5>{detail.lastName}</h5>
          </div>
        </div>
      </div>
      
      <div className="card-container mb-2">
        <div className="d-flex flex-row">
          <div className='d-flex flex-column p-2'>
            <div className='p-auth opacity-75'>Verified E-Mail</div>
            <h5>{detail.email}</h5>
          </div>
        </div>
      </div>

      <div className="card-container mb-2">
        <div className="d-flex flex-row justify-content-around w-100">
        <div className="profile-details w-100 justify-content-around">
                <div className="profile-info-cek ">
                  <p className='p-auth opacity-75'>Phone Number</p>
                  <h5>{detail.phoneNumber || "-"}</h5>
                </div>
                <div className="manage-profile w-100 d-flex flex-row-reverse">
                  <a className='manage-button' onClick={handleManageButtonClick} > Manage</a> {/*route ke halaman edit nomer hp*/}
                  {/* <FontAwesomeIcon icon={faTrash} className="delete-icon" /> */}
                </div>
              </div>
        </div>
      </div>




  
    </Container>

  )
}

export default ProfileComponent