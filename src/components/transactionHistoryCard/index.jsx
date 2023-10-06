import React from 'react'
import './transactionHistoryCard.css'

function TransactionHistoryCard(props) {
    const {type, subtype, amount, userName, userPict} = props;

    return (
        <section className="transfer-history-card">
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
            <p className={`transaction-amount-${type}`}>
                {(type === "income" ? '+Rp' : '-Rp') +  amount}
            </p>
        </section>
    )
}

export default TransactionHistoryCard