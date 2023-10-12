import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./addPhone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import AfterLoginLayout from "../../../layout/afterLogin";

const AddPhoneNumber = () => {
  const [pnFieldOnFocus, setPnFieldOnFocus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("id");

  const handlePnFocus = (e) => {
    e.preventDefault();
    setPnFieldOnFocus(true);
  };

  const handlePnBlur = (e) => {
    e.preventDefault();
    setPnFieldOnFocus(false);
  };

  const handlePhoneChange = (e) => {
    let formattedPhoneNumber = e.target.value.replace(/\D/g, "");

    if (formattedPhoneNumber.startsWith("628")) {
      formattedPhoneNumber = "08" + formattedPhoneNumber.slice(3);
    }

    setIsPhoneNumberValid(
      formattedPhoneNumber.length >= 9 && formattedPhoneNumber.length <= 12
    );

    setPhoneNumber(formattedPhoneNumber);
  };

  const addPhoneNumberAPI = async (userId, phoneNumber) => {
    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'User ID not found',
        text: 'User ID not found in localStorage. Please log in.'
      });
      return;
    }

    if (!isPhoneNumberValid) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number.'
      });
      return;
    }

    try {
      const response = await axios.put(
        "http://127.0.0.1:9090/users/add-phone-number",
        {
          userId: userId,
          phoneNumber: phoneNumber,
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Phone Number Added',
          text: 'Phone Number is successfully added!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/profile/manage-phone");
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Add Phone Number',
          text: 'Failed to add phone number. Please try again later.'
        });
      }
    } catch (error) {
      console.error("Error adding phone number:", error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Add Phone Number',
        text: 'Failed to add phone number. Please try again later.'
      });
    }
  };

  const handleAddPhoneNumber = () => {
    addPhoneNumberAPI(userId, phoneNumber);
    setPhoneNumber("");
  };

  const handleBackButtonClick = () => {
    navigate("/profile/profile-information");
  };

  return (
    <AfterLoginLayout>
      <Container className="add-phone-number-container">
        <Row>
          <Col md={12}>
            <div className="back-icons">
              <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButtonClick} />
            </div>
            <h2>Add Phone Number</h2>
            <p>
              Add at least one phone number for the transfer <br /> ID so you
              can start transferring your money to <br /> another user.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={`phone-input ${pnFieldOnFocus ? "focused" : ""}`}>
              <IconContext.Provider
                value={{
                  color: `${pnFieldOnFocus ? "#6379F4" : "#CBCBCB"}`,
                  className: "global-class-names",
                }}
              >
                <div className="icon-telp">
                  <FiPhone /> +62
                </div>
              </IconContext.Provider>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onFocus={handlePnFocus}
                onBlur={handlePnBlur}
                onChange={handlePhoneChange}
                pattern="08[0-9]*"
              />
            </div>
            <Button
              className="custom-button"
              onClick={handleAddPhoneNumber}
              disabled={!isPhoneNumberValid}
            >
              Add Phone Number
            </Button>
          </Col>
        </Row>
      </Container>
    </AfterLoginLayout>
  );
};

export default AddPhoneNumber;
