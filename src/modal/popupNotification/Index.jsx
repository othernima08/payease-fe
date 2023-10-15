import React from 'react'
import NotificationCard from '../../components/reusable-components/notificationCard/Index'
import Modal from 'react-bootstrap/Modal';
import './popup.css'

const NotificationModal = (props) => {
    const { handleCloseNotif, showNotif } = props;
    return (
        // <>
        // <p className="icon" onClick={handleShowNotif}><BsBell /></p>
        <Modal
            className="custom-notif-modal"
            show={showNotif}
            onHide={handleCloseNotif}
            size="md">
        

            <Modal.Body>
                <p className='today-font'>Today</p>
                <NotificationCard />
                <p className='week-font'>This Week</p>
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />

            </Modal.Body>

        </Modal>
        
    );
}

export default NotificationModal