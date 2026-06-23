import React, { useState } from 'react';
import './DonatinCards.css';

const DonatinCards = ({ title = "Provide Food Security" }) => {
  const [selectedAmount, setSelectedAmount] = useState('55');

  const donationOptions = [
    { amount: '55', description: 'Provide food packs for 1 month for 1 family', currency: '€' },
    { amount: '120', description: 'Provide food packs for struggling families.', currency: '€' },
    { amount: '300', description: 'Deliver food aid to multiple households.', currency: '€' },
    { amount: 'other', description: 'Other amount', currency: '€' },
  ];

  return (
    <div className="donatin-cards-wrapper">
      <h2 className="donatin-cards-title">{title}</h2>
      <div className="donatin-cards-container">
        {donationOptions.map((option, index) => (
          <div
            key={index}
            className={`donatin-card ${selectedAmount === option.amount ? 'selected' : ''}`}
            onClick={() => setSelectedAmount(option.amount)}
          >
            {option.amount !== 'other' && (
              <div className="donatin-amount">
                {option.currency}
                {option.amount}
              </div>
            )}
            <div className="donatin-description">{option.description}</div>
            {selectedAmount === option.amount && (
              <div className="donatin-checkmark">✓</div>
            )}
          </div>
        ))}
      </div>
      <button className="donate-now-btn">Donate Now</button>
    </div>
  );
};

export default DonatinCards;
