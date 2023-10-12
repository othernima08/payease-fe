import React from 'react'
import './transactionHistoryCard.css'

function TransactionHistoryCard(props) {
    const { type, subtype, status, amount, userName, userPict } = props;

    return (
        <section className="transfer-history-card d-flex flex-row flex-wrap">
            <section className="type-and-user">
                <img src={userPict} alt="" className="recipient-or-provider-img" />
                <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: "16px" }}>
                    <h3 className="recipient-or-provider-name">
                        {userName}
                    </h3>
                    <p className="transaction-type">
                        {subtype}
                    </p>
                </section>
            </section>
            <section className='card-mobile-amount-status d-flex flex-row w-100 justify-content-between' style={{flex:"row", alignItems:"center"}}>
                {
                    status !== undefined && 
                    <p className={`transaction-status-${status.toLowerCase()}`} style={{marginRight: "16px"}}>
                        {status}
                    </p>
                }
                <p className={`transaction-amount-${type}`}>
                    {(type === "income" ? '+Rp' : '-Rp') + amount}
                </p>
            </section>

        </section>
    )
}

export default TransactionHistoryCard