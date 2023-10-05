import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import PinInput from 'react-pin-input';

import AfterLoginLayout from '../afterLogin'
import { IoArrowBackSharp } from "react-icons/io5";

import './changePin.css'

const ChagePinLayout = (props) => {
  const { buttonText, handleClick, description } = props;

  return (
    <React.Fragment>
      <AfterLoginLayout
        children={
          <Container bsPrefix='change-pin-container'>
            <Row bsPrefix='change-pin-head-container'>
              <Col md={12}>
                <div className="back-icon">
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
                  <PinInput
                    length={6}
                    initialValue=""
                    // secret
                    // secretDelay={100}
                    onChange={(value, index) => { }}
                    type="numeric"
                    inputMode="number"
                    inputStyle={{ borderColor: '#CBCBCB', width: '56px', height: '80px', margin: '4px 12px', fontSize: "30px", padding: '5px', borderRadius: '6px' }}
                    inputFocusStyle={{ borderColor: '#6379F4' }}
                    onComplete={(value, index) => { }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </section>
                <section className="d-grid gap-4 mt-5">
                  <Button type="submit" size="lg" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} onSubmit={handleClick}>
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