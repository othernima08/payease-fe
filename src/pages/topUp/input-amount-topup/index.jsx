import React, { useState, useEffect } from 'react';
import "./input-amount-topup.css";
import AfterLoginLayout from "../../../layout/afterLogin";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../../services/users';
import Swal from 'sweetalert2';

const InputAmountTopUp = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById(userId);
        const user = response.data.data;
        if (!user.phoneNumber) {
          Swal.fire({
            icon: 'error',
            title: 'Phone Number Not Found',
            text: 'You cannot access this page because your phone number is not available. Please add your phone number first.',
          }).then(() => {
            navigate('/home');
          });
        } else {
          setPhoneNumber(user.phoneNumber);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userId, navigate]);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleContinueClick = () => {
    if (amount) {
      localStorage.setItem('amount', amount);
      navigate('/top-up/payment-method');
    }
  };


  const handleTopUpHistoryClick = () =>{
    navigate('/top-up/history');
  }

  const handleBackButtonClick = () => {
    navigate("/home");
  };

  return (
    <AfterLoginLayout>
      <Container className="input-amount-container">
      <div className="back-icons">
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButtonClick}/>
        </div>
        <Row>
          <Col md={12}>
            <h2>Top Up</h2>
            <p className="deskripsi">Set Amount Top Up - How much do you want to top up?</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form.Group>
              <NumericFormat
                placeholder="0.00"
                thousandSeparator={true}
                prefix={'Rp.'}
                style={{
                  maxWidth: '400px',
                  height: '40px',
                  marginTop: '80px',
                  fontSize: '30px',
                  marginBottom: '20px',
                  border: 'none',
                  textAlign: 'center',
                }}
                className={isFocused ? 'input-focus' : ''}
                onChange={handleFocus}
                value={amount}
                onValueChange={(values) => {
                  const { value } = values;
                  setAmount(value);
                }}
                onFocus={handleFocus}
                onBlur={handleFocus}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={12}>
            <p className="balance-topup">Set Amount Top Up. Min : 10.000</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4}>
            <Button variant="primary" className="w-100 custom-topup-button" onClick={handleTopUpHistoryClick}>
              Top Up History
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="primary" className="w-100 custom-topup-button" onClick={handleContinueClick}>
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    </AfterLoginLayout>
  );
}

export default InputAmountTopUp;
