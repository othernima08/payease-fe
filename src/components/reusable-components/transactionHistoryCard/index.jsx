import React from 'react'
import './transactionHistoryCard.css'

function TransactionHistoryCard(props) {
    const { type, subtype, status, amount, userName, id, userPict } = props;

    return (
        <section key={id} className="transfer-history-card d-flex flex-row flex-wrap">
            <section className="type-and-user">
                <img src={userPict} alt="" className="image-profile-home" />
                <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: "16px" }}>
                    <h3 className="recipient-or-provider-name">
                        {userName}
                    </h3>
                    <p className="transaction-type">
                        {subtype}
                    </p>
                </section>
            </section>
            <section className='card-mobile-amount-status d-flex flex-row justify-content-between' style={{flex:"row", alignItems:"center"}}>
                {
                    status !== undefined && 
                    <p className={`transaction-status-${status.toLowerCase()}`} style={{marginRight: "16px"}}>
                        {status}
                    </p>
                }
                <p className={`transaction-amount-${type}`}>
                    {(type === "income" ? '+' : '-') + amount}
                </p>
            </section>

        </section>
    )
}

export default TransactionHistoryCard