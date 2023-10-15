import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import PinInput from 'react-pin-input';
import LayoutAuth from '../../../layout/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';
import { useNavigate } from 'react-router';
import { confirmOtpBe, pinAdd } from '../../../services/auth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import CustomPIN from '../../../components/reusable-components/pinInput';
import "./login.css";
import { getUserById } from '../../../services/users';
import OTPInput from '../../../components/reusable-components/pinInput/otpInput';


const OTPPage = () => {


    const [otpTampil, setOtp] = useState("");
    const [userPengguna, setUserPengguna] = useState("");
    const navigate = useNavigate();

    const confirmOtp = async (e) =>{ 
       e.preventDefault();
        try {
            
          
        const data = {
            emailUser: userPengguna.email,
            otpCode: otpTampil
        }

        
        const response = await confirmOtpBe(data);
        console.log(response.data)
        const statusRes = response.data.success;
        if (statusRes === true) {
            Swal.fire({
                icon: 'success',
                title: 'Success Verify Account',
                text: 'You have successfully verify your account!',
            }).then(() => {
                const sessi = sessionStorage.removeItem("register");
                navigate('/home');
            });
        }
        else {
            const errorMsg = response.data.message
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                html: errorMsg,
            })
        }
    } catch (error) {
        
    }
}
        
    const getDataUser = async () => {
        try {
            const data = await getUserById(localStorage.getItem("id"));
            console.log(data.data.data, "Data id user");
            setUserPengguna(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataUser();
    }, []);


    const isConfirmButtonDisabled = otpTampil.length !== 6;

    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <div className="relative-top mb-5  ">
                    <h3 className="title-mobile mt-5">Verify Your Account</h3>
                    <p className="title-mobile-grey">We have sent your OTP Code to your email.</p>
                    <h6 className='mb-4 h6-login'>Verify Your Account.</h6>
                    <p className='p-auth opacity-75 mb-5 p-login'>We have sent your OTP Code to your email.</p></div>
                    <Form onSubmit={(e) => {
                    e.preventDefault();
                    confirmOtp(e);
                }}>
                    <div className="d-flex justify-content-center mb-5 align-items-center justify-content-center">
                     {/* <PinInput
                            length={6}
                            initialValue=""
                            secret
                            secretDelay={100}
                            onChange={}
                            type="numeric"
                            inputMode="number"
                            inputStyle={{ borderColor: 'red', width: '35px', margin: '4px  !important', padding: '5px !important', borderRadius: '6px' }}
                            inputFocusStyle={{ borderColor: 'blue' }}
                            onComplete={(value, index) => { }}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                     /> */}
                     <OTPInput 
                        handleChange ={(value, index) => setOtp(value)}
                        type="text"
                        inputMode="text"
                     />
                    </div>
                    <div className="d-grid gap-4 mt-5">
                        <Button
                         disabled={isConfirmButtonDisabled}
                        
                        variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Confirm
                        </Button>
                    </div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>
    )
}

export default OTPPage