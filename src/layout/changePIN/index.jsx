import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router';

import AfterLoginLayout from '../afterLogin'
import { IoArrowBackSharp } from "react-icons/io5";

import './changePin.css'
import CustomPIN from '../../components/reusable-components/pinInput';

const ChagePinLayout = (props) => {
  const { buttonText, handleClick, description, handleChange } = props;
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <AfterLoginLayout
        children={
          <Container bsPrefix='change-pin-container'>
            <Row bsPrefix='change-pin-head-container'>
              <Col md={12}>
                <div className="change-pin-back-icon" onClick={() => navigate("/profile")}>
                  <IoArrowBackSharp />
                </div>
                <h2 className="change-pin-title">Change PIN</h2>
              </Col>
              <Col md={12}>
                <p className="change-pin-description">{description}</p>
              </Col>
            </Row>
            <Container bsPrefix="change-pin-form-container">
              <Form className='change-pin-form d-flex flex-column no-wrap '>
                <section className='change-pin-input-container justify-content-center d-flex flex-column no-wrap align-itmes-center'>
                  <CustomPIN handleChange={handleChange}/>
                </section>
                <section className="d-grid gap-4 mt-5">
                  <Button type="button" size="lg" className='change-pin-button' onClick={handleClick}>
                    {buttonText}
                  </Button>
                </section>
              </Form>
            </Container>
          </Container>
        } />
    </React.Fragment>
  )
}

export default ChagePinLayout