import { useState, useEffect } from "react";
import { Container, Button, Row, Col, Image } from 'react-bootstrap'
// import PropTypes from "prop-types";
import profileimg from "../../assets/images/blank.jpg"
import { useNavigate } from 'react-router-dom';
import './profilepage.css'
import { getUserById } from "../../services/users";

function ProfilePageComponent() {
    const [detail, setDetail] = useState([]);
    // const [imageData, setImageData] = useState({});
    const userId = localStorage.getItem("id");

    // const { id } = useParams();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    const handleData = async () => {
        console.log('handdata is called');

        try {
            const response = await getUserById(userId)
            if (response.data.success) {
                const data = response.data.data
                setDetail(data);
                // setImageData(data.firstName)
                console.log(data)
                console.log(data.sharedUrl)
                // console.log(imageData);
            } else {
                console.error(`Error  ${id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // const getImage= async () => {
    //     console.log("a");
    //     try {
    //         const response = await getImage(userId)
    //         if (response.data.success) {
    //             // const imageData = response
    //             setImageData(response);
    //             console.log(response);
    //         } else {
    //             console.error(`Error  ${id}`);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    useEffect(() => {
        handleData();
        // getImage();
    }, [userId]);
    return (
        <Container className="profilepage-container">
            <Row>
                <Col className="d-flex justify-content-center"
                    style={{
                        marginTop: "16px",
                        marginRight: "16px",
                        marginLeft: "16px",
                    }}>
                        {/* <img src={detail?.sharedUrl} alt="..."  style={{ width: "100%" }}/> */}
                    <Image src={  detail?.sharedUrl } alt="..." rounded style={{ width: "20%" }} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center ">
                    <div style={{ textAlign: "center" }}>

                        <p>Edit  </p>
                        {/* <p>{}</p> */}
                        <p>{detail.firstName} {detail.lastName}</p>
                        <p>{detail.phoneNumber ? detail.phoneNumber : "-"}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <div style={{ width: "60%" }}>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" onClick={() => navigate("/profile/profile-information")} style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Personal Information
                        </Button>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" onClick={() => navigate("/profile/change-password")} style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Change Password
                        </Button>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" onClick={() => navigate("/profile/change-pin-1")} style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Change PIN
                        </Button>
                        <Button className="d-grid gap-4 mt-3" type="submit" size="lg" onClick={() => logout()} style={{ backgroundColor: "#DADADA", color: "#88888F", borderColor: "#DADADA", width: "100%", textAlign: "left" }} >
                            Logout
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}



export default ProfilePageComponent