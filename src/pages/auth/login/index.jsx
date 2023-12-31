import { Button, Form, InputGroup } from 'react-bootstrap'

import "./login.css";

import LayoutAuth from "../../../layout/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserById, login } from '../../../services/users';
import Swal from 'sweetalert2';
import { sendOtp } from '../../../services/auth';
import { IconContext } from 'react-icons';
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';

const Login = () => {



    const [eFieldOnFocus, seteFieldOnFocus] = useState(false)
    const [pFieldOnFocus, setpFieldOnFocus] = useState(false)

    const handlepFocus = (e) => {
        e.preventDefault()

        setpFieldOnFocus(true)
    }

    const handlepBlur = (e) => {
        e.preventDefault()

        setpFieldOnFocus(false)
    }

    const handleeFocus = (e) => {
        e.preventDefault()

        seteFieldOnFocus(true)
    }

    const handleeBlur = (e) => {
        e.preventDefault()

        seteFieldOnFocus(false)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVerified, setIsVerified] = useState('');
    const [error, setError] = useState("");

    const [userStatus, setUserStatus] = useState('');

    const navigate = useNavigate();

    const sendOtpToEmail = async () => {
        try {
            const data = {
                emailUser: email
            }
            const response = await sendOtp(data);
            //console.log(response);
            if (response.data.success) {
                navigate("/otp");
            }
            else {
                if (response.data.error == null) {
                    const errorMsg = response.data.message
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        html: errorMsg,
                    })
                }
                else {
                    const errorMsg = Object.values(response.data.error).join(`<br/>`);
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        html: errorMsg,
                    })
                }
            }


        } catch (error) {

        }
    }

    const checkUserStatus = async () => {
        try {
            const response = await getUserById(localStorage.getItem("id"));
            console.log(response.data.data);
            const isVerifiedData = response.data.data.isVerified;
            localStorage.setItem("verified", isVerifiedData);
            console.log(isVerifiedData, "ini is Verified");
            if (isVerifiedData === true) {
                navigate(`/home`);
            }
            else {
                sendOtpToEmail();

            }

        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                html: error,
            })
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = {
                email,
                password
            }

            const response = await login(data);
            //console.log(response);

            if (response.data.success) {
                localStorage.setItem("id", response.data.data.id);
                localStorage.setItem("token", response.data.data.token);

                checkUserStatus();


                // if(setUserStatus){

                // }
            } else {
                if (response.data.error == null) {
                    const errorMsg = response.data.message
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        html: errorMsg,
                    })
                }
                else {
                    const errorMsg = Object.values(response.data.error).join(`<br/>`);
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        html: errorMsg,
                    })
                }
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
                <h3 className="title-mobile mt-5 ">Login</h3>
                <p className="title-mobile-grey ">Login to your existing account to access
                    all the features in Zwallet.</p>
                <h6 className='h6-login mb-4'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h6>
                <p className='p-login opacity-75 mb-5'>Transfering money is eassier than ever, you can access PayEase wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                <Form style={{ width: '100%' }}>


                    <section className='input-container mb-5'>
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
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i className="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control
                            type="email"
                            className="p-auth opacity-75"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </InputGroup> */}


                    <section className='input-container'>
                        <IconContext.Provider value={{ color: `${pFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                            <p className='input-icon'><BiLockAlt /></p>
                        </IconContext.Provider>
                        <input type='password' onFocus={handlepFocus} onBlur={handlepBlur}
                            className="p-auth opacity-75"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </section>
                    {/* <InputGroup className="mb-3">

                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white !important', border: 'none', outline: 'none' }}><i className="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control type="password"
                            className="p-auth opacity-75"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </InputGroup> */}
                    <div className="d-flex flex-row-reverse mb-5">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Link to={"/reset-password"}>  <Form.Text className="text-muted">
                                Forgot password?
                            </Form.Text>
                            </Link>
                        </Form.Group>
                    </div>
                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" size="lg" style={{ backgroundColor: "#6379F4" }}
                            onClick={handleLogin}>
                            Login
                        </Button>
                    </div>


                    <div className="d-flex flex-row justify-content-center">
                        <p className="title-mobile-grey"> Already have an account? Let’s </p>  <p className='p-login opacity-75 mb-5'> Already have an account? Let’s  </p> <Link to={"/register"}><span href="" className='mx-1' style={{ color: "blue" }}> Register</span></Link>
                    </div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>
    )
}

export default Login