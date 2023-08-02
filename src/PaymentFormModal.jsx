import React, { useState, useEffect } from 'react';
import './PaymentFormModal.css';

const PaymentFormModal = ({ donateAmount, onClose, onSubmit, onChangeDonateAmount }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [isAmountValid, setIsAmountValid] = useState(false);

  useEffect(() => {
    setCustomAmount(donateAmount); // Initialize customAmount with donateAmount when the component mounts
    setIsAmountValid(parseFloat(donateAmount) > 0 || parseFloat(customAmount) > 0);
  }, [donateAmount, customAmount]);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardExpiryChange = (e) => {
    setCardExpiry(e.target.value);
  };

  const handleCardCvcChange = (e) => {
    setCardCvc(e.target.value);
  };

  const handleCustomAmountChange = (e) => {
    const amount = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(amount);
    onChangeDonateAmount(amount); // Update the donateAmount state in the parent component
  };

  const handleSubmit = () => {
    // perform form validation here...
    const selectedAmount = parseFloat(customAmount) || parseFloat(donateAmount);
    if (selectedAmount > 0) {
      onSubmit({
        amount: selectedAmount,
        cardNumber,
        cardExpiry,
        cardCvc,
      });
    }
  };

  return (
    <div className="payment-modal">
      <div className="payment-modal-content">
        <h2>Donate ₵{donateAmount}</h2>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="Card Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardExpiry">Card Expiry</label>
          <input
            type="text"
            id="cardExpiry"
            value={cardExpiry}
            onChange={handleCardExpiryChange}
            placeholder="MM/YY"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardCvc">CVC</label>
          <input
            type="text"
            id="cardCvc"
            value={cardCvc}
            onChange={handleCardCvcChange}
            placeholder="CVC"
          />
        </div>
     
        <div className="form-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit} disabled={!isAmountValid}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFormModal;
