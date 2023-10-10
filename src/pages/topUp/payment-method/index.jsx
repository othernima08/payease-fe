import React, { useState } from 'react';
import AfterLoginLayout from '../../../layout/afterLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Card, Button } from 'react-bootstrap';
import './payment-method.css';
import bank1 from '../../../assets/images/Logo Bank BNI.jpg';
import bank2 from '../../../assets/images/bni.png';
import bank3 from '../../../assets/images/Logo Bank Mandiri.jpg'

const PaymentMethod = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
  };

  return (
    <AfterLoginLayout>
      <Container className="payment-method-container">
      <div className="back-icon">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </div>
        <h2>Top up from</h2>
        <p>Choose the source of funds you'd like to use for topping up your PayEase account</p>

        <Card
          className={`bank-card ${selectedBank === 'Bank BNI' ? 'selected' : ''}`}
          onClick={() => handleBankSelect('Bank BNI')}
        >
          <Card.Body className="bank-card-row">
            <div className="bank-card-col">
              <img className="bank-logo" src={bank1} alt="Bank BNI" />
              <h4 className="card-titles">Bank BNI</h4>
            </div>
            <div className="bank-card-col">
              <label className="radio-label">
                <input
                  type="radio"
                  className="radio-button"
                  name="bank-option"
                  checked={selectedBank === 'Bank BNI'}
                  onChange={() => handleBankSelect('Bank BNI')}
                />
              </label>
            </div>
          </Card.Body>
        </Card>

        <Card
          className={`bank-card ${selectedBank === 'Bank BRI' ? 'selected' : ''}`}
          onClick={() => handleBankSelect('Bank BRI')}
        >
          <Card.Body className="bank-card-row">
            <div className="bank-card-col">
              <img className="bank-logo" src={bank2} alt="Bank BRI" />
              <h4 className="card-titles">Bank BRI</h4>
            </div>
            <div className="bank-card-col">
              <label className="radio-label">
                <input
                  type="radio"
                  className="radio-button"
                  name="bank-option"
                  checked={selectedBank === 'Bank BRI'}
                  onChange={() => handleBankSelect('Bank BRI')}
                />
              </label>
            </div>
          </Card.Body>
        </Card>

        <Card
          className={`bank-card ${selectedBank === 'Bank Mandiri' ? 'selected' : ''}`}
          onClick={() => handleBankSelect('Bank Mandiri')}
        >
          <Card.Body className="bank-card-row">
            <div className="bank-card-col">
              <img className="bank-logo" src={bank3} alt="Bank Mandiri" />
              <h4 className="card-titles">Bank Mandiri</h4>
            </div>
            <div className="bank-card-col">
              <label className="radio-label">
                <input
                  type="radio"
                  className="radio-button"
                  name="bank-option"
                  checked={selectedBank === 'Bank Mandiri'}
                  onChange={() => handleBankSelect('Bank Mandiri')}
                />
              </label>
            </div>
          </Card.Body>
        </Card>
        <Button className="next-button">Next</Button>
      </Container>
    </AfterLoginLayout>
  );
};

export default PaymentMethod;
