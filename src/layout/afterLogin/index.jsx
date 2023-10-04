import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './afterLogin.css'
import blankPict from '../../assets/images/blank.jpg';

import CustomNavbar from '../../components/navbar';


const AfterLoginLayout = (props) => {
    const { children } = props;

    const user = {
        profilePict: blankPict,
        fullName: "Robert Chandler",
        phoneNum: "+62 8139 3877 7946"
    }

    return (
        <Container className="after-login-container" style={{maxWidth: "100vw", padding: 0}}>
            <CustomNavbar user={user}/>
            <Row style ={{ }}>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}

export default AfterLoginLayout