import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

import ChagePinLayout from '../../../layout/changePIN'

import { changePIN } from '../../../services/users'

const ChangePinPage2 = () => {
    const [newPin, setNewPin] = useState()
    let attempt = 0

    const navigate = useNavigate()

    const handleChangePin = async () => {
        if (attempt < 3) {
            try {
                const data = {
                    userId: localStorage.getItem("id"),
                    currentPin: localStorage.getItem("currentPin"),
                    newPin
                }

                const response = await changePIN(data)

                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Change PIN Success",
                        html: "Your PIN updated successfully"
                    })

                    localStorage.removeItem("currentPin")
                    navigate("/profile")
                } else {
                    let errorMsg = ""

                    if (response.data.error === null) {
                        errorMsg = response.data.message;
                    } else {
                        errorMsg = Object.values(response.data.error).join(`<br/>`)
                    }

                    Swal.fire({
                        icon: "error",
                        title: "Change PIN Failed",
                        html: errorMsg
                    })

                    attempt++
                }
            } catch (error) {
                console.log(error)
                attempt++
            }
        } else {
            localStorage.removeItem("currentPin")
            navigate("/profile")
        }
    }

    return (
        <ChagePinLayout
            buttonText={"Change PIN"}
            description={"Type your new 6 digits security PIN to use in  Zwallet."}
            handleClick={handleChangePin}
            handleChange={(value, index) => { setNewPin(value) }}
        />
    )
}

export default ChangePinPage2