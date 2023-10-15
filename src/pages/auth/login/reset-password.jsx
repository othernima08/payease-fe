
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import LayoutAuth from "../../../layout/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";
import { useState } from "react";
import { findAccountReset } from "../../../services/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { IconContext } from "react-icons";
import { BiEnvelope } from "react-icons/bi";

const ResetPassword = () => {

    const [eFieldOnFocus, seteFieldOnFocus] = useState(false)
  

    const handleeFocus = (e) => {
        e.preventDefault()

        seteFieldOnFocus(true)
    }

    const handleeBlur = (e) => {
        e.preventDefault()

        seteFieldOnFocus(false)
    }



    const navigate = useNavigate();
    const [email,setEmail] = useState("");

    const findAccount = async (e) => {
        try {
            e.preventDefault();
            const data = {
                email,
            }
            // console.log(data);
            

            const response = await findAccountReset(data)
            // console.log(response.data);
            // console.log(response.data.message);
            const statusRes = response.data.success;

            if (statusRes === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Please Check Your Email',
                    text: 'Account has found, please kindly check your email for reset instruction!',
                }).then(() => {
                    navigate('/login');
                });
            }
            else {
                const errorMsg = response.data.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Account Not Found',
                    html: errorMsg,
                })
            }

        } catch (error) {
            console.log(error);
        }
    }





    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5 ">Reset Password</h3>
                <p className="title-mobile-grey ">Create and confirm your new password so
                    you can login to PayEase.</p>
                <h6 className='mb-4 h6-login'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h6>
                <p className='p-auth opacity-75 mb-5 p-login'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                <Form 
                className="w-100"
                
                onSubmit={e => {
                    e.preventDefault();
                    findAccount(e);
                }}>



<section className='input-container mb-4'>
                        <IconContext.Provider value={{ color: `${eFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                            <p className='input-icon'><BiEnvelope /></p>
                        </IconContext.Provider>
                        <input
                            onFocus={handleeFocus}
                            onBlur={handleeBlur}
                            type="email"
                            className="p-auth opacity-75"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </section>

                    {/* <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i class="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control type="text" className="p-auth opacity-75" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                    </InputGroup> */}
                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Confirm
                        </Button>
                    </div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>

    )
}

export default ResetPassword