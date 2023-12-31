import React from "react";
import { useState, useEffect } from "react";
import AfterLoginLayout from "../../../layout/afterLogin";
import "./dashboard.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.css";
import blank from "../../../assets/images/blank.jpg"
import { getUserById } from "../../../services/users";
import Grafik from "../../../components/reusable-components/grafik";
import { Link, useNavigate } from 'react-router-dom';
import { getTopFiveUserTransactionHistory, getUserIncomesExpensesAmount } from "../../../services/transactions";
import TransactionHistoryCard from "../../../components/reusable-components/transactionHistoryCard";
import LoadingScreen from "../../loadingScreen";

const Dashboard = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [balance, setBalance] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleGetUserIncomeExpensesData = async () => {
    try {
      const response = await getUserIncomesExpensesAmount(localStorage.getItem("id"));
      //console.log(response)
      if (response.data.success) {
        setTotalIncome(response.data.data.incomes)
        setTotalExpense(response.data.data.expenses)
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   let incomeTotal = 0;
  //   let expenseTotal = 0;

  //   transactionHistory.forEach((transaction) => {
  //     console.log(transactionHistory)
  //     if (transaction.type === "Top Up" || transaction.type === "Transfer from" ) {
  //       incomeTotal += transaction.amount;
  //     } else if (transaction.type === "Transfer to") {
  //       expenseTotal += transaction.amount;
  //     }
  //   });

  //   setTotalIncome(incomeTotal);
  //   setTotalExpense(expenseTotal);
  // }, [transactionHistory]);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('id');

    const fetchData = async () => {
      try {
        const userResponse = await getUserById(userId);
        const transactionResponse = await getTopFiveUserTransactionHistory(userId);

        if (userResponse.status === 200) {
          const user = userResponse.data.data;
          setPhoneNumber(user.phoneNumber);
          setBalance(user.balance);
        } else {
          console.error('Failed to fetch user data');
        }

        if (transactionResponse.data.success) {
          setTransactionHistory(transactionResponse.data.data);
        } else {
          console.error('Failed to fetch transaction history');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleGetUserIncomeExpensesData()
    fetchData();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  const handleClickTopUp = () => {
    navigate('/top-up/input-amount');
  };

  const handleClickTransfer = () => {
    navigate('/transfer/receiver');
  };

  return (
    <React.Fragment>
      {isLoading ? <LoadingScreen /> :
        <AfterLoginLayout>
        
          <Container  className="balance">
            <Row>
              <Col md={12}>
                <Card className="dashboard-card-nya">
                  <Card.Body className="dashboard-body">
                    <div className="balance-section">
                      <Card.Title bsPrefix="balance-title">Balance</Card.Title>
                      <Card.Text bsPrefix="balance-text"> {`Rp ${parseFloat(balance).toLocaleString('id-ID')}`}</Card.Text>
                      <Card.Text bsPrefix="phone-number-text">
                        {phoneNumber}
                      </Card.Text>
                    </div>
                    <div className="buttons-section">
                      <Button variant="light" className="transfer-button" onClick={handleClickTransfer}>
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>{" "}
                        Transfer
                      </Button>
                      <Button variant="light" className="topup-button" onClick={handleClickTopUp}>
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
                <Link to={"/transfer/receiver"}>
                  <Button variant="light" className="transfer-button2">
                    <i className="fa fa-arrow-up" aria-hidden="true"></i> Transfer
                  </Button>
                </Link>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <Link to={"/top-up/input-amount  "}>
                  <Button variant="light" className="topup-button2">
                    <i className="fa fa-plus" aria-hidden="true"></i> Top Up
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
         
          <div className="d-flex flex-row  ">
          <Container className="transaction-summary">
            <Row>
              <Col md={6} className="summary-column lefts">
                <div className="arrow-icon">
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </div>
                <div className="income-section">
                  <p className="income-label">Income</p>
                  <p className="income-amount"> {`Rp ${parseFloat(totalIncome).toLocaleString('id-ID')}`}</p>
                </div>
              </Col>
              <Col md={6} className="summary-column rights">
                <div className="arrow-icon">
                  <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                <div className="expense-section">
                  <p className="expense-label">Expense</p>
                  <p className="expense-amount"> {`Rp ${parseFloat(totalExpense).toLocaleString('id-ID')}`}</p>
                </div>
              </Col>
            </Row>
            {/* Card with Bar Chart */}
            <Grafik />
          </Container>

          <Container className="history-container mobile-display">
            <div className="history-title">
              <p className="prgph1">Transaction History</p>
              <p className="prgph2" onClick={() => { navigate("/home/history") }}>See all</p>
            </div>
            {transactionHistory.map((transaction) => (
              <TransactionHistoryCard
                key={transaction.id}
                id={transaction.id}
                userName={transaction.name}
                type={transaction.type === "Transfer to" ? "expense" : "income"}
                subtype={transaction.type === "Top Up" ? "Top up" : "Transfer"}
                userPict={transaction.profile_picture_url != null ? transaction.profile_picture_url : blank}
                amount={`Rp ${parseFloat(transaction.amount).toLocaleString('id-ID')}`}
                status={transaction.status}
              />
            ))}
          </Container>
          </div>
        </AfterLoginLayout>
      }
    </React.Fragment>
  );
};

export default Dashboard;
