import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import "./register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import PinInput from 'react-pin-input';
import LayoutAuth from '../../../layouts/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';
const Pin = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <div className="relative-top mb-5">
                    <h6 className='mb-4'>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h6>
                    <p className='p-auth opacity-75 mb-5'>Create 6 digits pin to secure all your money and your data in PayEase app. Keep it secret and don’t tell anyone about your PayEase account password and the PIN.</p></div>
                <Form>
                    <div className="d-flex justify-content-center mb-5">
                        <PinInput
                            length={6}
                            initialValue=""
                            secret
                            secretDelay={100}
                            onChange={(value, index) => { }}
                            type="numeric"
                            inputMode="number"
                            inputStyle={{ borderColor: 'red', width: '40px', margin: '10px  ', padding: '10px', borderRadius: '6px' }}
                            inputFocusStyle={{ borderColor: 'blue' }}
                            onComplete={(value, index) => { }}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                    </div>
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

export default Pin