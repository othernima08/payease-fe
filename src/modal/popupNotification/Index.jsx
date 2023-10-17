
import React, { useEffect, useState } from 'react'
import NotificationCard from '../../components/reusable-components/notificationCard/Index'

import Modal from 'react-bootstrap/Modal';
import './popup.css'
import { getTopFiveUserTransactionHistory } from '../../services/transactions';
import { useNavigate } from 'react-router';

const NotificationModal = (props) => {
    const { handleCloseNotif, showNotif } = props;
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const handleGetData = async () => {
        try {
            const userId = localStorage.getItem('id');
            const transactionResponse = await getTopFiveUserTransactionHistory(userId);

            if (transactionResponse.status === 200) {
                setData(transactionResponse.data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <Modal
            className="custom-notif-modal"
            show={showNotif}
            onHide={handleCloseNotif}
            size="md"
        >
            <Modal.Body>
                <section style={{display:'flex', alignItems: "center", justifyContent: "space-between"}}>
                    <p className="notif-title">
                        Notification
                    </p>
                    <p className="notif-see-all" onClick={() => {navigate("/home/notification")}}>
                        See all
                    </p>
                </section>
                {( data.length != 0) ? data?.map(item => (
                    <NotificationCard
                        key={item.id}
                        id={item.id}
                        type={item.type === "Transfer to" ? "expense" : "income"}
                        notes={item.type === "Top Up" ? (item.type + " from " + item.name) : (item.type + " " + item.name)}
                        amount={`Rp ${parseFloat(item.amount).toLocaleString('id-ID')}`}
                    />
                )) : <p>No Data</p>}

            </Modal.Body>

        </Modal>

    );
}

export default NotificationModal