import React from 'react'
import PinInput from 'react-pin-input';

import './pinInput.css'

function CustomPIN(props) {
    const {handleChange} =props;

    return (
        <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={handleChange}
            type="numeric"
            inputMode="number"
            // inputStyle={{ }}
            // inputFocusStyle={{  }}
            // onComplete={(value, index) => { }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
    )
}

export default CustomPIN