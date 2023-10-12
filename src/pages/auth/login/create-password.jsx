
import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

import "./login.css";

import LayoutAuth from '../../../layout/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';
import { changePassword, checkToken } from '../../../services/auth';
import { useParams } from 'react-router';

const CreatePassword = () => {


    const [newPassword, setnewPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const { token } = useParams();

    const checktokenRender = async () => {
        try {
            const res = await checkToken(token)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    const changePasswordAction = async (e) => {
        try {
            e.preventDefault();
            const data = {
                newPassword,
                confirmPassword
            }
            console.log(data);
            

            const response = await changePassword(data, token)
            console.log(response.data);
            const statusRes = response.data.success;

            if (statusRes === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have successfully registered your account, please configure your pin!',
                }).then(() => {
                    sessionStorage.setItem("register", email)
                    navigate('/pin-confirm');
                });
            }
            else {
                const errorMsg = Object.values(response.data.error).join(`<br/>`);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    html: errorMsg,
                })
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        checktokenRender();
    }, []);


    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5">Reset Password</h3>
                <p className="title-mobile-grey">Enter your PayEase e-mail so we can send
                    you a password reset link.</p>
                <h6 className='mb-4 h6-login'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h6>
                <p className='p-auth opacity-75 mb-5 p-login'>Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</p>

                <Form onSubmit={e => {
                    e.preventDefault();
                    changePasswordAction(e)
                }}>

                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }} ><i class="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Create new password" onChange={(e) => setnewPassword(e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}   ><i class="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Confirm new password" onChange={(e) => setconfirmPassword(e.target.value)}/>
                    </InputGroup>

                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }} >
                            Reset Password
                        </Button>
                    </div>

                </Form>
            </RightLayoutAuth>
        </LayoutAuth>

    )
}

export default CreatePassword