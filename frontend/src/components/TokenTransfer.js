import React, { useState } from 'react';

const TokenTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    // Implement token transfer logic here
    console.log(`Transferring ${amount} tokens to ${recipient}`);
    // Make API call to backend to perform the transfer
  };

  return (
    <div>
      <h2>Transfer Tokens</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleTransfer();
      }}>
        <div>
          <label>Recipient Address:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TokenTransfer;
