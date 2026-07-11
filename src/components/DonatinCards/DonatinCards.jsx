import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './DonatinCards.css';

/**
 * DonatinCards
 *
 * Fully prop-driven donation amount picker — matches the
 * "One-time / Monthly" tabbed card used on emergency/campaign pages.
 *
 * Props:
 *   campaignTitle    {string}   – subtitle shown under the tabs (e.g. "Lebanon Emergency Relief")
 *   currencyPrefix   {string}   – prefix shown before each amount (default: "Rs ")
 *   options          {array}    – [{ amount, description }] — amount is a display string (e.g. "50K")
 *   otherAmountLabel {string}   – label for the free-input "other amount" row (default: "Other amount")
 *   buttonText       {string}   – donate button label (default: "Donate Now")
 *   showMonthlyTab   {bool}     – show the One-time/Monthly tab row (default: true)
 *   defaultFrequency {string}   – "one-time" | "monthly" (default: "one-time")
 *   defaultSelectedIndex {number} – which option is pre-selected (default: 0)
 *   onDonate         {func}     – called with { frequency, amount } when the button is clicked
 */
const DonatinCards = ({
  campaignTitle,
  currencyPrefix = 'Rs ',
  options = [
    { amount: '50K', description: 'Emergency support for a family' },
    { amount: '100K', description: 'Covers essentials for 2 families' },
    { amount: '150K', description: 'Helps 3 families survive' },
  ],
  otherAmountLabel = 'Other amount',
  buttonText = 'Donate Now',
  showMonthlyTab = true,
  defaultFrequency = 'one-time',
  defaultSelectedIndex = 0,
  onDonate,
}) => {
  const [frequency, setFrequency] = useState(defaultFrequency);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const [otherValue, setOtherValue] = useState('');

  const isOtherSelected = selectedIndex === options.length;

  const handleDonateClick = () => {
    const amount = isOtherSelected ? otherValue : options[selectedIndex]?.amount;
    if (onDonate) onDonate({ frequency, amount });
  };

  return (
    <div className="dcard">
      {/* One-time / Monthly tabs */}
      {showMonthlyTab && (
        <div className="dcard__tabs">
          <button
            type="button"
            className={`dcard__tab${frequency === 'one-time' ? ' dcard__tab--active' : ''}`}
            onClick={() => setFrequency('one-time')}
          >
            One-time
          </button>
          <button
            type="button"
            className={`dcard__tab${frequency === 'monthly' ? ' dcard__tab--active' : ''}`}
            onClick={() => setFrequency('monthly')}
          >
            <FaHeart className="dcard__tab-icon" /> Monthly
          </button>
        </div>
      )}

      {/* Campaign name */}
      {campaignTitle && <p className="dcard__campaign">{campaignTitle}</p>}

      {/* Amount options */}
      <div className="dcard__options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`dcard__option${selectedIndex === index ? ' dcard__option--selected' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="dcard__option-text">
              <span className="dcard__option-amount">
                {currencyPrefix}
                {option.amount}
              </span>
              <span className="dcard__option-desc">{option.description}</span>
            </div>
            {selectedIndex === index && <span className="dcard__check">✓</span>}
          </div>
        ))}

        {/* Other amount */}
        <div
          className={`dcard__option dcard__option--other${isOtherSelected ? ' dcard__option--selected' : ''}`}
          onClick={() => setSelectedIndex(options.length)}
        >
          {isOtherSelected ? (
            <input
              type="number"
              className="dcard__other-input"
              placeholder={otherAmountLabel}
              value={otherValue}
              onChange={(e) => setOtherValue(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          ) : (
            <span className="dcard__option-desc dcard__option-desc--other">{otherAmountLabel}</span>
          )}
          {isOtherSelected && <span className="dcard__check">✓</span>}
        </div>
      </div>

      <button className="dcard__btn" type="button" onClick={handleDonateClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default DonatinCards;