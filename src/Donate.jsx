import { useState } from "react";
import PaymentFormModal from './PaymentFormModal';
import './Donate.css'

const Donate = () => {

    const [donateAmount, setDonateAmount] = useState(0);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleSelectAmount = (amount) => {
        setDonateAmount(parseFloat(amount));
      };

    const togglePaymentModal = () => {
        setIsPaymentModalOpen(!isPaymentModalOpen);
      };
    
      
  const handlePaymentSubmit = (paymentDetails) => {
    // Implement secure payment processing using a payment gateway (e.g., Stripe)
    
    
    console.log('Payment Details:', paymentDetails);
  };



   
    return ( 
        
    <div className="donate-card" id="real-donate">
          <h2>Donate now!</h2>
          <p>Donate now to help us make a positive impact in the lives of those in need.</p>
          <div className="money-grid">
            <div className="amount" onClick={() => handleSelectAmount('10')}>₵10</div>
            <div className="amount" onClick={() => handleSelectAmount('25')}>₵25</div>
            <div className="amount" onClick={() => handleSelectAmount('50')}>₵50</div>
            <div className="amount" onClick={() => handleSelectAmount('75')}>₵75</div>
            <div className="amount" onClick={() => handleSelectAmount('100')}>₵100</div>
            <div className="amount" onClick={() => handleSelectAmount('125')}>₵125</div>
          </div>
          <div class="form-container">
            <label for="donate-input">Amount:</label>
            <input
              type="text"
              id="donate-input"
              class="donate-input"
              placeholder="₵"
              value={`₵${donateAmount}`}
            />
            <button id="short-donate" onClick={togglePaymentModal}>Donate Now</button>
          </div>
          {isPaymentModalOpen && (
        <PaymentFormModal
          donateAmount={donateAmount}
          onClose={togglePaymentModal}
          onSubmit={handlePaymentSubmit}
        />
      )}
        </div>


     );
}
 
export default Donate;


