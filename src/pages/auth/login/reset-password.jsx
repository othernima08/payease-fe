
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import LayoutAuth from "../../../layout/auth";
import LeftLayoutAuth from "../../../components/auth/left";
import RightLayoutAuth from "../../../components/auth/right";

const ResetPassword = () => {
    return (
        <LayoutAuth>
            <LeftLayoutAuth />
            <RightLayoutAuth>
                <h3 className="title-mobile mt-5 ">Reset Password</h3>
                <p className="title-mobile-grey ">Create and confirm your new password so
                    you can login to PayEase.</p>
                <h6 className='mb-4 h6-login'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h6>
                <p className='p-auth opacity-75 mb-5 p-login'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                <Form onSubmit={e => {
                    e.preventDefault();
                }}>
                    <InputGroup className="mb-5">
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#FFFFFF !important', border: 'none', outline: 'none' }}><i class="bi bi-envelope-fill"></i></InputGroup.Text>
                        <Form.Control type="text" className="p-auth opacity-75" placeholder="Enter your email" />
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