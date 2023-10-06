import { Button, Form, InputGroup } from 'react-bootstrap'

import "./login.css";

import LayoutAuth from "../../../layout/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";

const Login = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5 ">Login</h3>
                <p className="title-mobile-grey ">Login to your existing account to access
                    all the features in Zwallet.</p>
                <h6 className='mb-4 h6-login'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h6>
                <p className='p-auth opacity-75 mb-5 p-login'>Transfering money is eassier than ever, you can access PayEase wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                <Form inputStyle={{ width: '90%' }}>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i className="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Enter your email" />
                    </InputGroup>
                    <InputGroup className="mb-3">

                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}><i className="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Enter your password" />
                    </InputGroup>
                    <div className="d-flex flex-row-reverse mb-5">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Forgot password?
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Login
                        </Button>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <p className="title-mobile-grey "> Already have an account? Let’s </p>  <p className='p-auth opacity-75 mb-5 p-login'> Already have an account? Let’s  </p> <span href="" className='mx-1' style={{ color: "blue" }}> Sign Up</span></div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>
    )
}

export default Login