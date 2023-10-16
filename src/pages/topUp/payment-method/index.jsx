import React, { useState, useEffect } from 'react';
import AfterLoginLayout from '../../../layout/afterLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Card, Button } from 'react-bootstrap';
import './payment-method.css';
import { getVirtualAccountByUserId, topUpPost } from '../../../services/transactions';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const PaymentMethod = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [banks, setBanks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("id"); 
        const response = await getVirtualAccountByUserId(userId);
        if (response && response.data && response.data.success) {
          setBanks(response.data.data);
        } else {
          console.log("Failed to fetch virtual account data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    localStorage.setItem("selectedBankId", bank.id);
  };


  const handleNextClick = async () => {
    const userId = localStorage.getItem("id");
    const amount = localStorage.getItem("amount");
    const virtualAccountId = localStorage.getItem("selectedBankId");
  
    const response = await topUpPost({ userId, amount, virtualAccountId });
  
    if (response && response.data && response.data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Top Up Successful',
        text: 'Proceed to Payment..'
      });
      localStorage.setItem("paymentCode", response.data.data.paymentCode);
      navigate('/top-up'); 
    } else {
      const errorMsg = response.data.message;
      if(response.data.error && response.data.error.amount){
        errorMsg = response.data.error.amount;
      }
      Swal.fire({
        icon: 'error',
        title: 'Failed to process top up',
        html: errorMsg,
      });
      console.error('Failed to process top up');
    }
  };

  const handleBackButtonClick = () => {
    navigate("/top-up/input-amount");
  };

  return (
    <AfterLoginLayout>
      <Container className="payment-method-container">
        <div className="back-icons">
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButtonClick}/>
        </div>
        <h2>Top up from</h2>
        <p>Choose the source of funds you'd like to use for topping up your PayEase account</p>

        {banks.map((bank) => (
          <Card
            key={bank.id}
            className={`bank-card ${selectedBank && selectedBank.id === bank.id ? 'selected' : ''}`}
            onClick={() => handleBankSelect(bank)}
          >
            <Card.Body className="bank-card-row">
              <div className="bank-card-col">
                <img className="bank-logo" src={bank.profile_picture_url} alt={bank.name} />
                <h4 className="card-titles">{bank.name}</h4>
              </div>
              <div className="bank-card-col">
                <label className="radio-label">
                  <input
                    type="radio"
                    className="radio-button"
                    name="bank-option"
                    checked={selectedBank && selectedBank.id === bank.id}
                    onChange={() => handleBankSelect(bank)}
                  />
                </label>
              </div>
            </Card.Body>
          </Card>
        ))}

        <Button className="next-button" onClick={handleNextClick}>Next</Button>
      </Container>
    </AfterLoginLayout>
  );
};

export default PaymentMethod;