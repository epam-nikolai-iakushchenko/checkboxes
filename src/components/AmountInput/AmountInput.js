import React from 'react';

export const AmountInput = ({ amount, setAmount }) => {
  return (
    <>
      <label>Amount of databases (1-18): </label>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        required
        pattern="[1-18]"
      />
    </>
  );
};
