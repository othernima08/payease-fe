
import React from 'react'
import PinInput from 'react-pin-input';
import './pinInput.css'



function OTPInput(props) {
    const {handleChange} =props;
    return (
        <PinInput
         secret={false}
            length={6}
            initialValue=""
            onChange={handleChange}
            type="text"
            inputMode="text"
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
    )
}

export default OTPInput