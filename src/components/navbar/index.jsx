import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { Navbar, Container } from 'react-bootstrap';

import './navbar.css'

import blankPict from '../../assets/images/blank.jpg';

function CustomNavbar(props) {
    const navigate =  useNavigate();
    const { user } = props;

    return (
        <Navbar className="navbar-container">
            <Container>
                <Navbar.Brand onClick={() => navigate("/home")} id="logo">PayEase</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <section className='profile-container'>
                            <figure style={{margin: 0, paddingRight: 12}}>
                                <img src={blankPict} alt="profile-pict" className='profile-picture'/>
                            </figure>
                            <section className="profile-text">
                                <p className="fullName">

                                </p>
                            </section>
                        </section>
                        
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

CustomNavbar.propTypes = {
    user: PropTypes.object
}

CustomNavbar.defaultProps = {
    user: {
        profilePict: blankPict
    }
}

export default CustomNavbar;