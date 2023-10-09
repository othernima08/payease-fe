
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import LayoutAuth from "../../../layouts/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigatetoProfile = useNavigate();
    // const routetoprofile = () => {
    //     navigatetoProfile(`/profile-information`);
    // };

    const handleLogin = async () => {
        // console.log('data:', email);
        // console.log('Password:', password);
        console.log('handleLogin function is called');

        try {
            const response = await fetch('http://127.0.0.1:9090/users/login', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
                // },

                body: JSON.stringify({ email, password }),
            });
            // console.log('1');
            const data = await response.json();
            console.log(data);
            if (data.success) {
                console.log('Login successful');
                navigatetoProfile('/profile-information');
                // localStorage.setItem("username", email)
            } else {

                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while logging in.');
        }
    };
    return (
        <LayoutAuth>

            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5">Login</h3>
                <p className="title-mobile-grey">Login to your existing account to access
                    all the features in Zwallet.</p>
                <h6 className='mb-4'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h6>
                <p className='p-auth opacity-75 mb-5'>Transfering money is eassier than ever, you can access PayEase wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                <Form style={{ width: '90%' }}>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i className="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control
                            type="email"
                            className="p-auth opacity-75"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </InputGroup>
                    <InputGroup className="mb-3">

                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}><i className="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password"
                            className="p-auth opacity-75"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </InputGroup>
                    <div className="d-flex flex-row-reverse mb-5">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Forgot password?
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}
                            onClick={() =>handleLogin}>
                            Login
                        </Button>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <p className="title-mobile-grey"> Already have an account? Let’s </p>  <p className='p-auth opacity-75 mb-5'> Already have an account? Let’s  </p> <span href="" className='mx-1' style={{ color: "blue" }}> Login</span></div>
                </Form>
            </RightLayoutAuth>



        </LayoutAuth>
    )
}

export default Login