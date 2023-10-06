import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

import "./register.css";

import LayoutAuth from '../../../layout/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';

const Register = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <div className="relative-top mb-5">
                <h3 className="title-mobile mt-5">Sign Up</h3>
                <p className="title-mobile-grey">Create your account to access Zwallet.</p>
                    <h6 className='mb-4 h6-login'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h6>
                    <p className='p-auth opacity-75 mb-5 p-login'>Transfering money is eassier than ever, you can access PayEase wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p></div>
                <Form>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i class="bi bi-person"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder=" First Name" />
                        <Form.Control type="password" className="p-auth opacity-75" placeholder=" Last Name" />
                    </InputGroup>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i class="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Enter your email" />
                    </InputGroup>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}><i class="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Enter your password" />
                    </InputGroup>

                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <p className="title-mobile-grey p-login"> Already have an account? Let’s  </p>  <p className='p-auth opacity-75 mb-5'> Already have an account? Let’s  </p> <span href="" className='mx-1' style={{ color: "blue" }}> Login</span></div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>

    )
}

export default Register