import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BiLockAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

import AfterLoginLayout from '../../../layout/afterLogin'
import { IoArrowBackSharp } from "react-icons/io5";

import './changePassword.css'
import { changePassword } from '../../../services/users';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const navigate = useNavigate()
    let attempt = 0

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [cpFieldOnFocus, setCpFieldOnFocus] = useState(false)
    const [npFieldOnFocus, setNpFieldOnFocus] = useState(false)
    const [cnpFieldOnFocus, setCnpFieldOnFocus] = useState(false)

    const handleCPFocus = (e) => {
        e.preventDefault()

        setCpFieldOnFocus(true)
    }

    const handleCPBlur = (e) => {
        e.preventDefault()

        setCpFieldOnFocus(false)
    }

    const handleNPFocus = (e) => {
        e.preventDefault()

        setNpFieldOnFocus(true)
    }

    const handleNPBlur = (e) => {
        e.preventDefault()

        setNpFieldOnFocus(false)
    }

    const handleCNPFocus = (e) => {
        e.preventDefault()

        setCnpFieldOnFocus(true)
    }

    const handleCNPBlur = (e) => {
        e.preventDefault()

        setCnpFieldOnFocus(false)
    }

    const handleChangePassword = async () => {
        if (attempt < 3) {
            try {
                if (confirmPassword !== newPassword) {
                    Swal.fire({
                        icon: "error",
                        title: "Change Password Failed",
                        html: "Password confirmation doesn't match"
                    })

                    attempt++
                } else {
                    const data = {
                        userId: localStorage.getItem("id"),
                        currentPassword,
                        newPassword
                    }

                    const response = await changePassword(data);

                    if (response.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Change Password Success",
                            html: "Your password updated successfully"
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
                            title: "Change Password Failed",
                            html: errorMsg
                        })

                        attempt++
                    }
                }

            } catch (error) {
                console.log(error)
                attempt++
            }
        } else {
            navigate("/profile")
        }
    }

    return (
        <AfterLoginLayout
            children={
                <Container bsPrefix='change-password-after-login-container'>
                    <Row bsPrefix='change-password-after-login-head-container'>
                        <Col md={12}>
                            <div className="change-password-after-login-back-icon" onClick={() => navigate("/profile")}>
                                <IoArrowBackSharp />
                            </div>
                            <h2 className="change-password-after-login-title">Change password</h2>
                        </Col>
                        <Col md={12}>
                            <p className="change-password-after-login-description">You must enter your current password and then type your new password twice.</p>
                        </Col>
                    </Row>
                    <Container bsPrefix="change-password-after-login-form-container">
                        <Form className='change-password-after-login-form'>
                            <section className='change-password-after-login-input-container'>
                                <section className='input-container'>
                                    <IconContext.Provider value={{ color: `${cpFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                                        <p className='input-icon'><BiLockAlt /></p>
                                    </IconContext.Provider>
                                    <input type='password' placeholder='Current password' value={currentPassword} onFocus={handleCPFocus} onBlur={handleCPBlur} onChange={(e) => setCurrentPassword(e.target.value)} />
                                </section>
                                <section className='input-container' >
                                    <IconContext.Provider value={{ color: `${npFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                                        <p className='input-icon'><BiLockAlt /></p>
                                    </IconContext.Provider>
                                    <input type='password' placeholder='New password' value={newPassword} onFocus={handleNPFocus} onBlur={handleNPBlur} onChange={(e) => setNewPassword(e.target.value)} />
                                </section>
                                <section className='input-container'>
                                    <IconContext.Provider value={{ color: `${cnpFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                                        <p className='input-icon'><BiLockAlt /></p>
                                    </IconContext.Provider>
                                    <input type='password' placeholder='Repeat new password' value={confirmPassword} onFocus={handleCNPFocus} onBlur={handleCNPBlur} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </section>
                            </section>

                            <section className="d-grid gap-4 mt-5">
                                <Button type="button" size="lg" className='change-password-after-login-button' style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} disabled={confirmPassword === "" || newPassword === "" || currentPassword === ""} onClick={handleChangePassword}>
                                    Change Password
                                </Button>
                            </section>
                        </Form>
                    </Container>
                </Container>
            } />
    )
}

export default ChangePassword