import React from 'react'
import { Container} from "react-bootstrap";
import gambar1 from "../../assets/images/th (1).jpeg";
import gambar2 from "../../assets/images/th (2).jpeg";
import netfix from "../../assets/images/netflixlogo.0.0.png";
import spotify from "../../assets/images/OIP2.jpeg";
import "./history.css"

const History = () => {
    const transactions = [
        {
          id: 1,
          image: gambar1,
          name: "Samuel Sushi",
          amount: 50000,
          type: "transfer",
        },
        {
          id: 2,
          image: netfix,
          name: "Netflix",
          amount: -50000,
          type: "subscription",
        },
        {
          id: 3,
          image: gambar2,
          name: "Alexander Jacob",
          amount: +50000,
          type: "transfer",
        },
        {
          id: 4,
          image: spotify,
          name: "Spotify",
          amount: -50000,
          type: "subscription",
        },
      ];
  return (
    
    <Container className="history-container">
    <div className="history-title">
      <p className="prgph1">Transaction History</p>
      <p className="prgph2">See all</p>
    </div>
    {transactions.map((transaction) => (
      <div key={transaction.id} className="history-item">
        <img src={transaction.image} alt={transaction.name} />
        <div className="history-details">
          <p className="name">{transaction.name}</p>
          <p className="type">{transaction.type}</p>
        </div>
        <p
          className={`history-amount ${
            transaction.amount >= 0 ? "green" : "red"
          }`}
        >
          {transaction.amount >= 0
            ? `+ Rp${transaction.amount}`
            : `- Rp${Math.abs(transaction.amount)}`}
        </p>
      </div>
    ))}
  </Container>
  )
}

export default History 
