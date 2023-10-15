import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import "./notificationCard.css"

function NotificationCard(props) {
    const { id, type, notes, amount } = props

    return (
        <section key={id} className="notification-card">
            <section className="notification-icon">
                <p className={`notification-${type}`}>
                    {type === "income" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
                </p>
            </section>
            <section style={{ width: "100%" }}>
                <section className="notification-text">
                    <p className="notification-notes">
                        {notes}
                    </p>
                    <p className="notification-amount">
                        Rp{amount}
                    </p>

                </section>
            </section>
        </section>
    )
}

export default NotificationCard