import React from "react";
import { useState, useEffect } from "react";
import AfterLoginLayout from "../../../layout/afterLogin";
import "./dashboard.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.css";
import gambar1 from "../../../assets/images/th (1).jpeg";
import gambar2 from "../../../assets/images/th (2).jpeg";
import netfix from "../../../assets/images/netflixlogo.0.0.png";
import spotify from "../../../assets/images/OIP2.jpeg";
import { getUserById } from "../../../services/users";
import Grafik from "../../../components/reusable-components/grafik";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
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


  const [phoneNumber, setPhoneNumber] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const fetchData = async () => {
      try {
        const response = await getUserById(userId);
        if (response.status === 200) {
          const user = response.data.data;
          setPhoneNumber(user.phoneNumber);
          setBalance(user.balance);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClickTopUp = () => {
    navigate('/top-up/input-amount');
  };

  return (
    <AfterLoginLayout>
     <Container fluid className="balance">
  <Row>
    <Col md={12}>
      <Card className="dashboard-card">
        <Card.Body className="dashboard-body">
          <div className="balance-section">
            <Card.Title bsPrefix="balance-title">Balance</Card.Title>
            <Card.Text bsPrefix="balance-text">{`Rp ${balance}`}</Card.Text>
            <Card.Text bsPrefix="phone-number-text">
            {phoneNumber}
            </Card.Text>
          </div>
          <div className="buttons-section">
            <Button variant="light" className="transfer-button">
              <i className="fa fa-arrow-up" aria-hidden="true"></i>{" "}
              Transfer
            </Button>
            <Button variant="light" className="topup-button"  onClick={handleClickTopUp}>
              <i className="fa fa-plus" aria-hidden="true"></i> Top Up
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
<Container className="buttons-section-mobile">
  <Row>
    <Col md={6} className="d-flex justify-content-center">
      <Button variant="light" className="transfer-button2">
        <i className="fa fa-arrow-up" aria-hidden="true"></i> Transfer
      </Button>
    </Col>
    <Col md={6} className="d-flex justify-content-center">
      <Button variant="light" className="topup-button2">
        <i className="fa fa-plus" aria-hidden="true"></i> Top Up
      </Button>
    </Col>
  </Row>
</Container>


      <Container className="transaction-summary">
        <Row>
          <Col md={6} className="summary-column lefts">
            <div className="arrow-icon">
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
            <div className="income-section">
              <p className="income-label">Income</p>
              <p className="income-amount">Rp 2.500.000</p>
            </div>
          </Col>
          <Col md={6} className="summary-column rights">
            <div className="arrow-icon">
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
            <div className="expense-section">
              <p className="expense-label">Expense</p>
              <p className="expense-amount">Rp 1.500.000</p>
            </div>
          </Col>
        </Row>
        {/* Card with Bar Chart */}
        <Grafik/>
      </Container>

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
    </AfterLoginLayout>
  );
};

export default Dashboard;
