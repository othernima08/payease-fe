import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './afterLogin.css'

import CustomNavbar from '../../components/custom-components/navbar';
import CustomSidebar from '../../components/custom-components/sidebar';
import CustomFooter from '../../components/custom-components/footer';
import { getUserById } from '../../services/users';
import { Navigate } from 'react-router';


const AfterLoginLayout = (props) => {
    const { children } = props;
    
    // tambahin state buat cek notificationnya open/gak, cth:
    const [isOpen, setIsOpen] =useState(false)
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const isLoggedIn = localStorage.length !== 0 
    && localStorage.getItem("id") !== undefined 
    && localStorage.getItem("token") !== undefined
    && localStorage.getItem("verified") !== "null" 
    && localStorage.getItem("verified") !== "false" 
    && localStorage.getItem("verified") !== undefined

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
        <React.Fragment>
            {isLoggedIn ?
                <Container bsPrefix="after-login-container">
                    <CustomNavbar user={user} />
                    <Row style={{ margin: "32px 64px" }}>

                        <Col xs={12} md={3} className='mobile-see'>
                            <CustomSidebar />
                        </Col>
                        <Col xs={12} md={9} className='mobile-see-content'>

                            {children}
                        </Col>
                    </Row>
                    <CustomFooter />
                </Container> : <Navigate to="/login" />
            }
        </React.Fragment>
    )
}

export default AfterLoginLayout