import { Button, Form, InputGroup } from 'react-bootstrap'

import "./register.css";

import LayoutAuth from "../../../layout/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserById, login } from '../../../services/users';
import Swal from 'sweetalert2';
import { registerUser, sendOtp } from '../../../services/auth';
import { IconContext } from 'react-icons';
import { BiEnvelope, BiLockAlt, BiSolidUser } from 'react-icons/bi';
const Register = () => {

    const [eFieldOnFocus, seteFieldOnFocus] = useState(false)
    const [pFieldOnFocus, setpFieldOnFocus] = useState(false)
    const [nFieldOnFocus, setnFieldOnFocus] = useState(false)
    

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

    const handlenFocus = (e) => {
        e.preventDefault()

        setnFieldOnFocus(true)
    }

    const handlenBlur = (e) => {
        e.preventDefault()

        setnFieldOnFocus(false)
    }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const registerUserSubmit = async (e) => {

        try {
            e.preventDefault();
            const data = {
                email,
                password,
                firstName,
                lastName
            }
            const response = await registerUser(data)
            // console.log(response.data);
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
            else if (response.data.error !== null) {
                const errorMsg = Object.values(response.data.error).join(`<br/>`);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    html: errorMsg,
                })


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

    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <div className="relative-top ">
                    <h3 className="title-mobile mt-5">Sign Up</h3>
                    <p className="title-mobile-grey">Create your account to access Zwallet.</p>
                    <h6 className='mb-4 h6-login'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h6>
                    <p className='p-auth opacity-75 mb-3 p-login'>Transfering money is eassier than ever, you can access PayEase wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p></div>
                <Form className='d-flex flex-column'>

{/* 
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i class="bi bi-person"></i></InputGroup.Text>
                        <Form.Control type="text" className="p-auth opacity-75" placeholder=" First Name" onChange={(e) => setFirstName(e.target.value)} />
                        <Form.Control type="text" className="p-auth opacity-75" placeholder=" Last Name" onChange={(e) => setLastName(e.target.value)} />
                    </InputGroup> */}
                    <section className='input-container mb-4'>
                        <IconContext.Provider value={{ color: `${nFieldOnFocus ? '#6379F4' : '#CBCBCB'} `, className: "global-class-name" }}>
                            <p className='input-icon'><BiSolidUser /></p>
                        </IconContext.Provider>
                        <input
                            onFocus={handlenFocus}
                            onBlur={handlenBlur}
                            type="text"
                            className="p-auth opacity-75"
                            placeholder=" First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required />
                        <input
                            onFocus={handlenFocus}
                            onBlur={handlenBlur}
                            type="text"
                            className="p-auth opacity-75"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required />
                    </section>

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

                    <section className='input-container mb-4'>
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

                    <div className="d-grid gap-4 mb-5">
                        <Button onClick={e => registerUserSubmit(e)} variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <p className="title-mobile-grey p-login"> Already have an account? Let’s  </p>  <p className='p-login opacity-75 mb-5'> Already have an account? Let’s  </p> <Link to={"/login"} ><span href="" className='mx-1' style={{ color: "blue" }}> Login</span></Link></div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>

    )
}

export default Register