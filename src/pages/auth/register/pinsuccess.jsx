import React from 'react'
import { Button, Form } from 'react-bootstrap'

import "./register.css";

import LayoutAuth from '../../../layouts/auth';
import LeftLayoutAuth from '../../../components/auth/left';
import RightLayoutAuth from '../../../components/auth/right';

const Success = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <div className="relative-top mb-5">
                    <div className="d-flex img-success-mobile mb-1 mt-5">
                        <img src="src/assets/pin-image/success.png" style={{ width: "15%" }} alt="" className=' mb-5' />
                    </div>
                    <h3 className="title-mobile">PIN Successfully Created</h3>
                    <p className="title-mobile-grey">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                    <h6 className='mb-5'>Your PIN Was Successfully Created.</h6>
                    <p className='p-auth opacity-75 mb-5'>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p></div>
                <Form>
                    <div className="d-grid gap-4 mb-5">
                        <Button variant="primary" type="submit" size="lg" style={{ backgroundColor: "#6379F4" }}>
                            Login now
                        </Button>
                    </div>
                </Form>
            </RightLayoutAuth>
        </LayoutAuth>
    )
}

export default Success



