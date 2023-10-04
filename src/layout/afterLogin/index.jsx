import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './afterLogin.css'

import CustomNavbar from '../../components/navbar';


const AfterLoginLayout = (props) => {
    const { children } = props;

    return (
        <Container className="after-login-container" style={{maxWidth: "100vw", padding: 0}}>
            <CustomNavbar />
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