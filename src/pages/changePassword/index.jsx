import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BiLockAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

import AfterLoginLayout from '../../layout/afterLogin'
import { IoArrowBackSharp } from "react-icons/io5";

import './changePassword.css'

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [cpFieldOnFocus, setCpFieldOnFocus] = useState(false)
    const [npFieldOnFocus, setNpFieldOnFocus] = useState(false)
    const [cnpFieldOnFocus, setCnpFieldOnFocus] = useState(false)

    useState(() => {
        console.log(newPassword);
        console.log(currentPassword);
        console.log(confirmPassword);
    }, [currentPassword])

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

    return (
        <AfterLoginLayout
            children={
                <Container bsPrefix='change-password-container'>
                    <Row bsPrefix='change-password-head-container'>
                        <Col md={12}>
                            <div className="back-icon">
                                <IoArrowBackSharp />
                            </div>
                            <h2 className="change-password-title">Change password</h2>
                        </Col>
                        <Col md={12}>
                            <p className="change-password-description">You must enter your current password and then type your new password twice.</p>
                        </Col>
                    </Row>
                    <Container bsPrefix="change-password-form-container">
                        <Form className='change-password-form'>
                            <section className='change-password-input-container'>
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
                                <Button type="submit" size="lg" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} disabled={confirmPassword === "" || newPassword === "" || currentPassword === ""}>
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