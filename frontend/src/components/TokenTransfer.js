import React, { useState } from 'react';
import './TokenTransfer.css';

const TokenTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    if (recipient && amount) {
      alert(`Transferring ${amount} tokens to ${recipient}`);
    } else {
      alert('Please enter both recipient address and amount.');
    }
  };

  return (
    <div className="token-transfer-form">
      <h2>Transfer Tokens</h2>
      <label htmlFor="recipient">Recipient Address</label>
      <input 
        type="text" 
        id="recipient" 
        placeholder="Enter recipient address" 
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      
      <label htmlFor="amount">Amount</label>
      <input 
        type="number" 
        id="amount" 
        placeholder="Enter amount to transfer" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      
      <button className="token-transfer-button" onClick={handleTransfer}>
        Transfer
      </button>
    </div>
  );
};

export default TokenTransfer;
