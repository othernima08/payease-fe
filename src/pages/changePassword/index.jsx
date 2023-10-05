import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { BiLockAlt } from "react-icons/bi";

import AfterLoginLayout from '../../layout/afterLogin'

import './changePassword.css'

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    useState(() => {
        console.log(newPassword);
        console.log(currentPassword);
        console.log(confirmPassword);
    }, [currentPassword])

    return (
        <AfterLoginLayout
            children={
                <Container bsPrefix='change-password-container'>
                    <h2 className="change-password-title">Change password</h2>
                    <p className="change-password-description">You must enter your current password and then<br></br>type your new password twice.</p>
                    <Container bsPrefix="change-password-form-container">
                        <Form style={{ width: '60%' }}>
                            <section className='input-container'>
                                <p className='input-icon'><BiLockAlt /></p>
                                <input type='password' placeholder='Current password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>
                            </section>
                            <section className='input-container' style={{marginTop: 24}} >
                                <p className='input-icon'><BiLockAlt /></p>
                                <input type='password' placeholder='New password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            </section>
                            <section className='input-container' style={{marginTop: 24}}>
                                <p className='input-icon'><BiLockAlt /></p>
                                <input type='password' placeholder='Repeat new password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
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