import { useState, useEffect } from "react";
import { Container, Button, Row, Col, Image } from 'react-bootstrap'
// import PropTypes from "prop-types";
import profileimg from "../../assets/images/blank.jpg"
import { useNavigate } from 'react-router-dom';
import './profilepage.css'
import { getUserById } from "../../services/users";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
// import NotificationCard from "../reusable-components/notificationCard";

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
        // e.preventDefault();
        // console.log('handdata is called');

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
            <Row bsPrefix='profile-head-container'>
                <div className="profile-back-icon" onClick={() => navigate("/home")}>
                    <IoArrowBackSharp />
                </div>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center"
                    style={{
                        marginTop: "16px",
                        marginRight: "16px",
                        marginLeft: "16px",
                    }}>
                    <Image src={detail.sharedUrl != null ? detail.sharedUrl : profileimg} alt='profile...' rounded style={{ width: "20%" }} />
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
                    <div className="button-profile-container">
                        <Button className="button-profile" type="submit" size="lg" onClick={() => navigate("/profile/profile-information")} >
                            <p style={{ margin: 0 }}>Personal Information</p>
                            <p style={{ margin: 0 }}><AiOutlineArrowRight /></p>
                        </Button>
                        <Button className="button-profile" type="submit" size="lg" onClick={() => navigate("/profile/change-password")}  >
                            <p style={{ margin: 0 }}>Change Password</p>
                            <p style={{ margin: 0 }}><AiOutlineArrowRight /></p>
                        </Button>
                        <Button className="button-profile" type="submit" size="lg" onClick={() => navigate("/profile/change-pin-1")} >
                            <p style={{ margin: 0 }}>Change PIN</p>
                            <p style={{ margin: 0 }}><AiOutlineArrowRight /></p>
                        </Button>
                        <Button className="button-profile" type="submit" size="lg" onClick={() => logout()} >
                            Logout
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}



export default ProfilePageComponent