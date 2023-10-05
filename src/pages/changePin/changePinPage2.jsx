import React from 'react'

import ChagePinLayout from '../../layout/changePIN'

const ChangePinPage2 = () => {
    return (
        <ChagePinLayout
            buttonText={"Change PIN"}
            description={<>Type your new 6 digits security PIN to use in  <br></br> Zwallet.</>}
            handleClick={() => { }}
        />
    )
}

export default ChangePinPage2