import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

import { Navbar, Container, Button } from 'react-bootstrap';

import { BsBell } from "react-icons/bs";

import './navbar.css'

function CustomNavbar(props) {
    const navigate = useNavigate();

    const { user } = props;

    return (
        <Navbar className="navbar-container">
            <Container>
                <Navbar.Brand onClick={() => navigate("/home")} id="logo">PayEase</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <figure className='profile-container' style={{ margin: 0}}>
                        <img src={user.profilePict} alt="profile-pict" className='profile-picture' />
                    </figure>
                    <section className="profile-text">
                        <p className="fullName">
                           {user.fullName}
                        </p>
                        <p className="phoneNumber">
                            {user.phoneNum}
                        </p>
                    </section>
                    <p className="icon"><BsBell /></p>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

CustomNavbar.propTypes = {
    user: PropTypes.objects
}

export default CustomNavbar;