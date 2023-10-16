
import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

import "./login.css";

import LayoutAuth from '../../../layout/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';
import { changePassword, checkToken } from '../../../services/auth';
import { Navigate, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { IconContext } from 'react-icons';
import { BiLockAlt } from 'react-icons/bi';

const CreatePassword = () => {


    const [pFieldOnFocus, setpFieldOnFocus] = useState(false)
    const [cpFieldOnFocus, setcpFieldOnFocus] = useState(false)


    const handlepFocus = (e) => {
        e.preventDefault()
        setpFieldOnFocus(true)
    }

    const handlepBlur = (e) => {
        e.preventDefault()
        setpFieldOnFocus(false)
    }
    const handlecpFocus = (e) => {
        e.preventDefault()
        setcpFieldOnFocus(true)
    }

    const handlecpBlur = (e) => {
        e.preventDefault()
        setcpFieldOnFocus(false)
    }




    const [newPassword, setnewPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const navigate = useNavigate();

    const { token } = useParams();

    const checktokenRender = async () => {
        try {
            const res = await checkToken(token)

            const statusRes = res.data.success;
            if (statusRes === true) {
                // console.log(res);
            }
            else {
                const errorMsg = res.data.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    html: errorMsg,
                }).then(() => {
                    navigate('/login');
                });
            }

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
            // console.log(data);


            const response = await changePassword(data, token)
            // console.log(response.data);
            // console.log(response.data.message);
            const statusRes = response.data.success;

            if (statusRes === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Changed Successfully',
                    text: 'You have successfully changed your password, please login!',
                }).then(() => {
                    navigate('/login');
                });
            }
            else {
                const errorMsg = response.data.message;
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

                <Form
                className='w-100'
                onSubmit={e => {
                    e.preventDefault();
                    changePasswordAction(e)
                }}>




                    <section className='input-container mb-4'>
                        <IconContext.Provider value={{ color: `${pFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                            <p className='input-icon'><BiLockAlt /></p>
                        </IconContext.Provider>
                        <input type='password' onFocus={handlepFocus} onBlur={handlepBlur}
                            className="p-auth opacity-75"
                            placeholder="Enter your password"
                            value={newPassword}
                            onChange={(e) => setnewPassword(e.target.value)}
                            required />
                    </section>


                    <section className='input-container mb-4'>
                        <IconContext.Provider value={{ color: `${cpFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                            <p className='input-icon'><BiLockAlt /></p>
                        </IconContext.Provider>
                        <input type='password' onFocus={handlecpFocus} onBlur={handlecpBlur}
                            className="p-auth opacity-75"
                            placeholder="Confirm your new password"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            required />
                    </section>
        
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