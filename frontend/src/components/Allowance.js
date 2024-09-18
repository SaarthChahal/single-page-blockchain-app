import React, { useState } from 'react';
import { getAllowance } from '../api';

const Allowance = () => {
  const [address, setAddress] = useState('');
  const [allowance, setAllowance] = useState('');

  const checkAllowance = () => {
    getAllowance(address).then(data => setAllowance(data.allowance));
  };

  return (
    <div>
      <h2>Token Allowance</h2>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <button onClick={checkAllowance}>Check Allowance</button>
      {allowance && <p>Allowance: {allowance}</p>}
    </div>
  );
};

export default Allowance;
