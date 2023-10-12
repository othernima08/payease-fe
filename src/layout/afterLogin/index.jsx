import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './afterLogin.css'

import CustomNavbar from '../../components/navbar';
import CustomSidebar from '../../components/sidebar';
import CustomFooter from '../../components/footer';
import { getUserById } from '../../services/users';


const AfterLoginLayout = (props) => {
    const { children } = props;

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const getUser = async () => {
        try {
            const response = await getUserById(localStorage.getItem("id"));

            if (response.data.success) {
                setUser(response.data.data)
            } else {
                setError(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Container bsPrefix="after-login-container">
            <CustomNavbar user={user} />
            <Row style={{ margin: "32px 64px" }}>
                <Col xs={12} md={4}>
                    <CustomSidebar />
                </Col>
                <Col xs={12} md={8}>
                    {children}
                </Col>
            </Row>
            <CustomFooter />
        </Container>
    )
}

export default AfterLoginLayout