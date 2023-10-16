import { useState, useEffect } from "react";
import { Container, Button, Row, Col, Image, Modal, Form } from 'react-bootstrap'
// import PropTypes from "prop-types";
import profileimg from "../../assets/images/blank.jpg"
import { useNavigate } from 'react-router-dom';
import './profilepage.css'
import { editImage,getUserById } from "../../services/users";
import editIcon from "../../assets/profile-image/edit.png"
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
// import NotificationCard from "../reusable-components/notificationCard";

function ProfilePageComponent() {
    const [detail, setDetail] = useState([]);
    const userId = localStorage.getItem("id");
    const [selectedImage, setSelectedImage] = useState(null);
    const [file, setFile] = useState(null);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    const handleData = async () => {
        // e.preventDefault();

        try {
            const response = await getUserById(userId)
            if (response.data.success) {
                const data = response.data.data
                setDetail(data);
            } else {
                console.error(`Error  ${id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEditImage = async (e) => {
        console.log("a");
        e.preventDefault();
        try {
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                //console.log(userId);
                const id = localStorage.getItem("id");

                const response = await editImage(id, file);

                if (response.data.success) {
                    //console.log(response);
                    navigate("/profile")

                } else {
                    console.error("Error:", response.data.message);
                }
            } else {
                console.error("Pilih file terlebih dahulu.");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    useEffect(() => {
        handleData();
        // handleEditImage();
    }, [userId]);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

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
                    <Image src={detail.sharedUrl
                        != null ? detail.sharedUrl
                        : profileimg} alt='profile...' rounded className="image-profile"/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center ">
                    <div style={{ textAlign: "center" }}>
                        <div>
                            <img src={editIcon} alt="edit icon" />
                            <p className="profile-edit" onClick={openModal}>Edit  </p>
                            {/* <p className="profile-edit" onClick={ e=> handleEditImage(e) }>Edit  </p> */}
                        </div>
                        {/* <p>{}</p> */}
                        <p className="profile-name">{detail.firstName} {detail.lastName}</p>
                        <p className="profile-number">{detail.phoneNumber ? detail.phoneNumber : "-"}</p>
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
            <Modal
                className="modal-edit-image"
                show={showModal}
                onHide={closeModal}
                size="md">

                <Modal.Header>
                    <Modal.Title>Edit Gambar Profil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group
                        controlId="formFile"
                        className="mb-3"
                        value={file}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setFile(file);
                            setSelectedImage(URL.createObjectURL(file));
                        }}>
                        <Form.Label>Input Image yang akan di edit</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    {selectedImage && (
                        <Image className="modal-image-preview" src={selectedImage} alt='profile...' />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditImage}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    )
}



export default ProfilePageComponent;