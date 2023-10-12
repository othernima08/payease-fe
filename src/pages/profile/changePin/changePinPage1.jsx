import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

import ChagePinLayout from '../../../layout/changePIN'

import { verifyPIN } from '../../../services/users'

const ChangePinPage1 = () => {
    const [currentPin, setCurrentPin] = useState()

    const navigate = useNavigate()
    
    const handleVerifyPin = async() => {
        try {
            const data = {
                userId: localStorage.getItem("id"),
                currentPin
            }

            const response = await verifyPIN(data)

            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Verify PIN Success",
                    html: "Please input your new PIN on the next page"
                })

                navigate("/profile/change-pin-2")
            } else {
                let errorMsg = ""

                if (response.data.error === null) {
                    errorMsg = response.data.message;
                } else {
                    errorMsg = Object.values(response.data.error).join(`<br/>`)
                }

                Swal.fire({
                    icon: "error",
                    title: "Verify PIN Failed",
                    html: errorMsg
                })

                // navigate("/profile")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChagePinLayout
            buttonText={"Continue"}
            description={"Enter your current 6 digits Zwallet PIN below to continue to the next steps."}
            handleClick={handleVerifyPin}
            handleChange={(value, index) => {setCurrentPin(value)}}
        />
    )
}

export default ChangePinPage1