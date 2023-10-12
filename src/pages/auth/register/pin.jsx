import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import PinInput from 'react-pin-input';
import LayoutAuth from '../../../layout/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';
import { useNavigate } from 'react-router';
import { pinAdd } from '../../../services/auth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import CustomPIN from '../../../components/pinInput';


const Pin = () => {
    const [pin, setPin] = useState("");
    
    const navigate = useNavigate();
    
    const email = sessionStorage.getItem("register");
    
    const pinSubmit = async (e) => {
        try {

            e.preventDefault();
            const data = {
                emailUser: email,
                pin
            }

            console.log(data);
            const response = await pinAdd(data)
            console.log(response.data);
            const statusRes = response.data.success;
            if (statusRes === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Pin Added',
                    text: 'You have successfully add pin to your account!',
                }).then(() => {
                    const sessi = sessionStorage.removeItem("register");
                    navigate('/pin-success');
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

        }
    }

    useEffect(() => {
        const sessi = sessionStorage.getItem("register");
        console.log(sessi);
        if (sessi === null) {
            navigate("/login")
        }
    }, []);

    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <div className="relative-top mb-5">
                    <h3 className="title-mobile mt-5">Create Security PIN</h3>
                    <p className="title-mobile-grey">Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</p>
                    <h6 className='mb-4 h6-login'>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h6>
                    <p className='p-auth opacity-75 mb-5 p-login'>Create 6 digits pin to secure all your money and your data in PayEase app. Keep it secret and don’t tell anyone about your PayEase account password and the PIN.</p></div>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    pinSubmit(e);
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
                     <CustomPIN 
                        handleChange={(value, index) => { setPin(value) }}
                     />
                    </div>
                    <div className="d-grid gap-4 mt-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Confirm
                        </Button>
                    </div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>
    )
}

export default Pin