import { Button, Form, InputGroup} from 'react-bootstrap'

import "./login.css";

import LayoutAuth from "../../../layouts/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";

const ResetPassword = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5">Reset Password</h3>
                <p className="title-mobile-grey">Create and confirm your new password so
                    you can login to PayEase.</p>
                <h6 className='mb-4'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h6>
                <p className='p-auth opacity-75 mb-5'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                <Form>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i class="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control type="password" className="p-auth opacity-75" placeholder="Enter your email" />
                    </InputGroup>
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