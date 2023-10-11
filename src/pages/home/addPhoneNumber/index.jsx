import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./addPhone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi"; 

import AfterLoginLayout from '../../../layout/afterLogin';

const AddPhoneNumber = () => {
  const [pnFieldOnFocus, setPnFieldOnFocus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const handlePnFocus = (e) => {
    e.preventDefault();
    setPnFieldOnFocus(true);
  };

  const handlePnBlur = (e) => {
    e.preventDefault();
    setPnFieldOnFocus(false);
  };

  const handlePhoneChange = (e) => {
    let formattedPhoneNumber = e.target.value.replace(/\D/g, '');

    if (formattedPhoneNumber.startsWith('628')) {
      formattedPhoneNumber = '08' + formattedPhoneNumber.slice(3);
    }

    setPhoneNumber(formattedPhoneNumber);
    setIsPhoneNumberValid(formattedPhoneNumber.length === 11);
  };

  const handleAddPhoneNumber = () => {
    if (isPhoneNumberValid) {
      console.log("Phone number is valid:", phoneNumber);
      setPhoneNumber("");
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <AfterLoginLayout>
      <Container className="add-phone-number-container">
        <Row>
          <Col md={12}>
            <div className="back-icons">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <h2>Add Phone Number</h2>
            <p>
              Add at least one phone number for the transfer <br /> ID so you can start transferring your money to <br /> another user.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={`phone-input ${pnFieldOnFocus ? 'focused' : ''}`}>
              <IconContext.Provider value={{ color: `${pnFieldOnFocus ?  '#6379F4' : '#CBCBCB'}`, className: "global-class-names" }}>
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
            <Button className="custom-button" onClick={handleAddPhoneNumber} disabled={!isPhoneNumberValid}>
              Add Phone Number
            </Button>
          </Col>
        </Row>
      </Container>
    </AfterLoginLayout>
  );
}

export default AddPhoneNumber;
