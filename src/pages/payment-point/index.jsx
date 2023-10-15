import React, { useState } from 'react';
import './payment-point.css';
import { topUpPayment } from '../../services/transactions';
import Swal from 'sweetalert2';

const PaymentPoint = () => {
  const storedPaymentCode = localStorage.getItem('paymentCode') || '';
  const [paymentCode, setPaymentCode] = useState(storedPaymentCode);

  const handleInputChange = (event) => {
    const { value } = event.target;
    localStorage.setItem('paymentCode', value);
    setPaymentCode(value);
  };

  const handlePaymentProcess = async () => {
    try {
      const response = await topUpPayment(paymentCode);
      if (response.success === false) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message,
        });
      }  else if (response.success === true) {
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: `Response Message: ${response.message}`,
        }).then(() => {
          setPaymentCode('');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while processing the payment. Please try again later.',
        });
      }
    } catch (error) {
      console.error(error);
    }
    setPaymentCode('');
  };

  return (
    <div className="payment-point-container">
      <div className="payment-point-text-center">
        <h2>Payment Point</h2>
      </div>
      <div className="payment-point-input-container">
        <input
          type="text"
          placeholder="Payment Code"
          value={paymentCode}
          onChange={handleInputChange}
        />
      </div>
      <div className="payment-point-button-container">
        <button
          className="payment-point-process-button"
          disabled={!paymentCode}
          onClick={handlePaymentProcess}
        >
          Process
        </button>
      </div>
    </div>
  );
};

export default PaymentPoint;
