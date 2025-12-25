import React from 'react';

const NumberInputGuess = ({ value, onChange }) => {

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^[0-9]$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength="1"
      className="w-16 text-6xl p-2 border-none rounded text-center focus:outline-none"
      placeholder="0"
      value={value}
      onChange={handleChange}
    />
  );
};

export default NumberInputGuess;
