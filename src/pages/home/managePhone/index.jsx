import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "./managePhone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AfterLoginLayout from "../../../layout/afterLogin";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { getUserById, deletePhoneNumberService } from "../../../services/users";

const ManagePhoneNumber = () => {
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteConfirmationMessage, setDeleteConfirmationMessage] =
    useState("");
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();


  useEffect(() => {
    //fetch no hp user
    const fetchUserPhoneNumber = async () => {
      try {
        const response = await getUserById(userId);
        if (response.status === 200) {
          const data = response.data;
          let phoneNumber = data.data?.phoneNumber || "";
          // ubah format no hp
          phoneNumber = phoneNumber.replace(/^0/, "+62");
          setUserPhoneNumber(phoneNumber);
        } else {
          console.error("Error fetching user data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchUserPhoneNumber();
  }, [userId]);

  // button back
  const handleBackButtonClick = () => {
    navigate("/profile/profile-information");
  };

  // modal konfirmasi
  const handleShowDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
    setDeleteConfirmationMessage("Are you sure to delete the phone number?");
  };

  const handleDeletePhoneNumber = async () => {
    try {
      const response = await deletePhoneNumberService(userId);
      if (response.status === 200) {
        setShowDeleteConfirmation(false);
        Swal.fire({
          icon: 'success',
          title: 'Phone Number is successfully deleted!',
        }); 
        navigate("/profile/profile-information");
      } else {
        console.error("Error deleting phone number");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <AfterLoginLayout>
      <Container className="manage-phone-container">
        <Row>
          <Col md={12}>
            <div className="back-icons">
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={handleBackButtonClick}
              />
            </div>
            <h2>Manage Phone Number</h2>
            <p className="text1">
              You can only delete the phone number and <br /> then you must add
              another phone number.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className="phone-card">
              <Card.Body>
                <div className="phone-details">
                  <div className="phone-info">
                    <h5>Primary</h5>
                    <p>{userPhoneNumber || "-"}</p>
                  </div>
                  <div className="delete-icon-container">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="delete-icon"
                      onClick={handleShowDeleteConfirmation}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showDeleteConfirmation} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Phone Number Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{deleteConfirmationMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            No
          </Button>
          <Button variant="primary" onClick={handleDeletePhoneNumber}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </AfterLoginLayout>
  );
};

export default ManagePhoneNumber;
