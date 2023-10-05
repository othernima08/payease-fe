
import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

import "./login.css";

import LayoutAuth from '../../../layouts/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';

const CreatePassword = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5">Reset Password</h3>
                <p className="title-mobile-grey">Enter your PayEase e-mail so we can send
                    you a password reset link.</p>
                <h6 className='mb-4'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h6>
                <p className='p-auth opacity-75 mb-5'>Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</p>
                <Form>

                    <InputGroup className="mb-5">

                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}><i class="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Create new password" />
                    </InputGroup>
                    <InputGroup className="mb-5">

                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}><i class="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Confirm new password" />
                    </InputGroup>

                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Reset Password
                        </Button>
                    </div>

                </Form>
            </RightLayoutAuth>
        </LayoutAuth>

    )
}

export default CreatePassword