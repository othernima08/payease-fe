import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

import ChagePinLayout from '../../../layout/changePIN'

import { changePIN } from '../../../services/users'

const ChangePinPage2 = () => {
    const [newPin, setNewPin] = useState()

    const navigate = useNavigate()

    const handleChangePin = async() => {
        try {
            const data = {
                userId: localStorage.getItem("id"),
                newPin
            }

            const response = await changePIN(data)

            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Change PIN Success",
                    html: "Your PIN updated successfully"
                })

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

                // navigate("/profile")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChagePinLayout
            buttonText={"Change PIN"}
            description={"Type your new 6 digits security PIN to use in  Zwallet."}
            handleClick={handleChangePin}
            handleChange={(value, index) => {setNewPin(value)}}
        />
    )
}

export default ChangePinPage2