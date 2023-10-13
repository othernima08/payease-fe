import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import AfterLoginLayout from '../../layout/afterLogin';
import "./transfer.css";
import { ButtonGroup, } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import TransferLayout from '../../layout/transfer';
import ReceiverCard from '../../components/transferComponents/receiverCard';
import { getUsers } from '../../services/users';

const Transfer = () => {


    const [tampilUsers, setTampilUser] = useState([]);
    const [searchVal, setSearchVal] = useState(""); // Tambahkan state untuk nilai pencarian


    //     const result = tampilUsers.filter((user) =>
    //     user.title.toLowerCase().includes(searchVal.toLowerCase())
    // );
    const getDataReceiver = async () => {
        try {
            const data = await getUsers();
            // console.log(data, "from axios");
            // console.log(data.data.data, "Data nya");
            setTampilUser(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataReceiver();

    }, []);

    console.log(tampilUsers, "mapsnya");


    return (
        <AfterLoginLayout
        >
            <TransferLayout>
                <div className="stack-transfer">
                    <Row bsPrefix="margin-box" >
                        <Col md={12}>
                            <div className="back-icon d-flex flex-nowrap">
                                <IoArrowBack className="button-back" style={{ justifyContent: "center", alignItems: "center" }} />

                                <h2 className='text-title p-balance-mobile-receiver'>Find Receiver</h2>
                            </div>
                            <h2 className='text-title p-balance-dekstop'>Search Receiver</h2>
                        </Col>
                    </Row>

                    <InputGroup className="mb-4 ">
                        <InputGroup.Text id="basic-addon1"><i className="bi bi-search"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="Search receiver here"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>
                <div className="content">
                    <Link to={"/transfer/input"}>


                        {/* {tampilUsers.length > 0 ? (
                            result.map(p => (
                                <ReceiverCard
                                    key={p.id}
                                    email={p.email}
                                    firstName={p.firstname}
                                    lastName={p.lastName}
                                    phoneNumber={p.phoneNumber}
                                    profilePicture={p.profilePictureUrl}
                                    id={p.id}
                                />
                            ))
                        ) : (
                            <div>Loading...</div>
                        )} */}

                        {tampilUsers.length > 0 ? (
                            tampilUsers.map(p => (
                                <ReceiverCard
                                    key={p.id}
                                    email={p.email}
                                    firstName={p.firstName}
                                    lastName={p.lastName}
                                    phoneNumber={p.phoneNumber}
                                    profilePicture={p.profilePictureUrl}
                                    id={p.id}
                                />
                            ))
                        ) : (
                            <div>Loading...</div>
                        )}


                    </Link>
                </div>
            </TransferLayout>
        </AfterLoginLayout >
    )
}

export default Transfer