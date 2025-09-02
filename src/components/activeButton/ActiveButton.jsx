

import { useState } from 'react';
import './style.css'; // Don't forget to create this CSS file

function ActiveButton() {
  // State to hold the value of the currently active button
  const [activeButton, setActiveButton] = useState('daily'); // Set an initial active button

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  const buttonOptions = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ];

  return (
    <div className="button-group">
      {buttonOptions.map((option) => (
        <button
          key={option.value}
          className={`button-item ${activeButton === option.value ? 'active' : ''}`}
          onClick={() => handleButtonClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default ActiveButton;