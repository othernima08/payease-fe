import React from 'react'
import PinInput from 'react-pin-input';

import './pinInput.css'

function CustomPIN() {
    return (
        <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={(value, index) => { }}
            type="numeric"
            inputMode="number"
            // inputStyle={{ }}
            // inputFocusStyle={{  }}
            onComplete={(value, index) => { }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
    )
}

export default CustomPIN