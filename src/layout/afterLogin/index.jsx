import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './afterLogin.css'
import blankPict from '../../assets/images/blank.jpg';

import CustomNavbar from '../../components/navbar';
import CustomSidebar from '../../components/sidebar';
import CustomFooter from '../../components/footer';


const AfterLoginLayout = (props) => {
    const { children } = props;

    const user = {
        profilePict: blankPict,
        fullName: "Robert Chandler",
        phoneNum: "+62 8139 3877 7946"
    }

    return (
        <Container bsPrefix="after-login-container">
            <CustomNavbar user={user} />
            <Row style={{ margin: "32px 72px" }}>
                <Col xs={12} md={4}>
                    <CustomSidebar />
                </Col>
                <Col xs={12} md={4}>
                    {children}
                </Col>
            </Row>
            <CustomFooter />
        </Container>
    )
}

export default AfterLoginLayout