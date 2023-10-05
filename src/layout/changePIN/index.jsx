import React, { useEffect, useRef, useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import PinInput from 'react-pin-input';

import AfterLoginLayout from '../afterLogin'
import './changePin.css'

const ChagePinLayout = (props) => {
  const { buttonText, handleClick, description } = props;

  // const [deviceWidth, setDeviceWidth] = useState(useRef(window.innerWidth));
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const updateDeviceWidth = () => {
  //     setDeviceWidth(window.innerWidth);
  //   };

  //   // Add the event listener to listen for window resize
  //   window.addEventListener('resize', updateDeviceWidth);

  //   // if (deviceWidth.current <= 1000) {
  //   //   setIsMobile(true)
  //   // } else {
  //   //   setIsMobile(false)
  //   // }

  //   // // Clean up the event listener when the component unmounts
  //   // return () => {
  //   //   window.removeEventListener('resize', updateDeviceWidth);
  //   // };
  // }, []);

  // useEffect(() => {
  //   console.log(deviceWidth)
  // }, [deviceWidth, setDeviceWidth])


  return (
    <React.Fragment>
      {/* {deviceWidth.current >= 1000 ? */}
        <AfterLoginLayout
          children={
            <Container bsPrefix='change-pin-container'>
              <h2 className="change-pin-title">Change PIN</h2>
              <p className="change-pin-description">{description}</p>
              <Container bsPrefix="change-pin-form-container">
                <Form>
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
                  <section className="d-grid gap-4 mt-5">
                    <Button type="submit" size="lg" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} onSubmit={handleClick}>
                      {buttonText}
                    </Button>
                  </section>
                </Form>
              </Container>
            </Container>
          } />
        {/* : <></>} */}
    </React.Fragment>
  )
}

export default ChagePinLayout