import React, { useState } from 'react';
import './AmountPickerGrid.css';

/**
 * AmountPickerGrid
 *
 * Grid-style donation amount picker with a live editable amount
 * display + currency selector. Structurally different from
 * `DonatinCards` (no tabs, no per-option descriptions, no list layout)
 * so it's kept as its own independent component.
 *
 * Props:
 *   title            {string}  – subtitle shown above the grid
 *                                 (e.g. "Provide urgent aid to Sri Lanka flood victims")
 *   presetAmounts    {array}   – [{ value: number, label: string }]
 *                                 `label` is what's shown on the button (e.g. "7,000" or "15K"),
 *                                 `value` is the actual numeric amount used in the live display / onDonate
 *   defaultSelectedIndex {number} – which preset is selected initially (default: 1)
 *   currency         {string}  – currency symbol shown before the amount (default: "Rs")
 *   currencyCode     {string}  – currency code shown in the dropdown (default: "PKR")
 *   currencyOptions  {array}   – list of currency codes for the dropdown (default: ["PKR"])
 *   buttonText       {string}  – donate button label (default: "Donate Now")
 *   onDonate         {func}    – called with { amount, currencyCode } when the button is clicked
 */
const AmountPickerGrid = ({
  title,
  presetAmounts = [
    { value: 7000, label: '7,000' },
    { value: 15000, label: '15K' },
    { value: 25000, label: '25K' },
    { value: 70000, label: '70K' },
    { value: 150000, label: '150K' },
    { value: 250000, label: '250K' },
  ],
  defaultSelectedIndex = 1,
  currency = 'Rs',
  currencyCode = 'PKR',
  currencyOptions = ['PKR'],
  buttonText = 'Donate Now',
  onDonate,
}) => {
  const [amount, setAmount] = useState(
    presetAmounts[defaultSelectedIndex]?.value ?? presetAmounts[0]?.value ?? 0
  );
  const [selectedCurrency, setSelectedCurrency] = useState(currencyCode);

  const handlePresetClick = (value) => {
    setAmount(value);
  };

  const handleAmountChange = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, '');
    setAmount(raw === '' ? '' : Number(raw));
  };

  const handleDonateClick = () => {
    if (onDonate) onDonate({ amount, currencyCode: selectedCurrency });
  };

  const formattedAmount =
    amount === '' || amount === undefined ? '' : Number(amount).toLocaleString('en-US');

  return (
    <div className="apg">
      {title && <p className="apg__title">{title}</p>}

      {/* Preset amount grid */}
      <div className="apg__grid">
        {presetAmounts.map((preset, index) => (
          <button
            type="button"
            key={index}
            className={`apg__preset${amount === preset.value ? ' apg__preset--selected' : ''}`}
            onClick={() => handlePresetClick(preset.value)}
          >
            {currency} {preset.label}
          </button>
        ))}
      </div>

      {/* Live editable amount display */}
      <div className="apg__amount-box">
        <span className="apg__amount-currency">{currency}</span>
        <input
          type="text"
          inputMode="numeric"
          className="apg__amount-input"
          value={formattedAmount}
          onChange={handleAmountChange}
          aria-label="Donation amount"
        />
        {currencyOptions.length > 1 ? (
          <select
            className="apg__currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {currencyOptions.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        ) : (
          <span className="apg__currency-static">{selectedCurrency}</span>
        )}
      </div>

      <button className="apg__btn" type="button" onClick={handleDonateClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default AmountPickerGrid;