import React from 'react'
import NotificationCard from '../../../components/reusable-components/notificationCard'

const NotificationModal = () => {

    const [showNotif, setShowNotif] = useState(false);

    const handleCloseNotif = () => setShowNotif(false);
    const handleShowNotif = () => setShowNotif(true);
    return (
        <>
        <p className="icon" onClick={handleShowNotif}><BsBell /></p>
        <Modal
            show={showNotif}
            onHide={handleCloseNotif}
            size="lg">

            <Modal.Body>
                <p className='today-font'>Today</p>
                <NotificationCard />
                <p className='week-font'>This Week</p>
                <NotificationCard />
            </Modal.Body>

        </Modal>
        </>
    );
}

export default NotificationModal