import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import AfterLoginLayout from '../afterLogin'
import { IoArrowBackSharp } from "react-icons/io5";

import './changePin.css'
import CustomPIN from '../../components/pinInput';

const ChagePinLayout = (props) => {
  const { buttonText, handleClick, description, handleChange } = props;

  return (
    <React.Fragment>
      <AfterLoginLayout
        children={
          <Container bsPrefix='change-pin-container'>
            <Row bsPrefix='change-pin-head-container'>
              <Col md={12}>
                <div className="change-pin-back-icon">
                  <IoArrowBackSharp />
                </div>
                <h2 className="change-pin-title">Change PIN</h2>
              </Col>
              <Col md={12}>
                <p className="change-pin-description">{description}</p>
              </Col>
            </Row>
            <Container bsPrefix="change-pin-form-container">
              <Form className='change-pin-form'>
                <section className='change-pin-input-container'>
                  <CustomPIN handleChange={handleChange}/>
                </section>
                <section className="d-grid gap-4 mt-5">
                  <Button type="button" size="lg" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} onClick={handleClick}>
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