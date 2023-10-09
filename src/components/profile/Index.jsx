import React from 'react'
import { Container, Button, Row, Col, Image } from 'react-bootstrap'
// import PropTypes from "prop-types";
import profileimg from "../../assets/images/blank.jpg"
import { useNavigate } from 'react-router-dom';

function ProfilePageComponent() {

    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center"
                    style={{
                        marginTop: "16px",
                        marginRight: "16px",
                        marginLeft: "16px",
                    }}>
                    {/* <div> */}

                    <Image src={profileimg} alt='profile...' rounded style={{ width: "20%" }} />
                    {/* </div> */}
                    {/* <div>

                    <p>Edit</p>
                    </div> */}
                </Col>

            </Row>
            <Row>
                <Col className="d-flex justify-content-center ">
                    <div style={{ textAlign: "center" }}>

                        <p>Edit</p>

                        <p>Full Name</p>
                        <p>+62 813 9387 7946</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <div style={{ width: "60%" }}>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" onClick={() => navigate("/profile-information")} style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Personal
                        </Button>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Change Password
                        </Button>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Change PIN
                        </Button>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" onClick={() => navigate("/login")} style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Logout
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}



export default ProfilePageComponent