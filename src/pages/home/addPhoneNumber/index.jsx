import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./addPhone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addPhoneNumber } from "../../../services/users";

import AfterLoginLayout from "../../../layout/afterLogin";


const AddPhoneNumber = () => {
  const [pnFieldOnFocus, setPnFieldOnFocus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
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

    // setIsPhoneNumberValid(
    //   formattedPhoneNumber.length >= 12 && formattedPhoneNumber.length <= 13
    // );

    setPhoneNumber(formattedPhoneNumber);
  };

  const handleAddPhoneNumber = async (e) => {
    try {
      e.preventDefault();

      if (!phoneNumber) {
        return;
      }

      const data = {
          userId: userId,
          phoneNumber
      }
  
      const response = await addPhoneNumber(data);
      const statusRes = response.data.success;
      if (statusRes === true) {
        Swal.fire({
          icon: 'success',
          title: 'Phone Number Added',
          text: 'Phone Number is successfully added!'
        }).then(()=> {
          navigate('/profile/manage-phone');
        });
  
      } else {
        const errorMsg = response.data.message; 
        if (response.data.error && response.data.error.phoneNumber) {
          errorMsg = response.data.error.phoneNumber; 
        }
        Swal.fire({
          icon: 'error',
          title: 'Add Phone Number Failed',
          html: errorMsg,
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
              disabled={!phoneNumber}
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
