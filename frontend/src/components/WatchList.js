import React, { useState, useEffect } from 'react';
import { getBalance } from '../api';

const WatchList = () => {
  const [address, setAddress] = useState('');
  const [balances, setBalances] = useState({});

  useEffect(() => {
    if (address) {
      getBalance(address).then(data => setBalances(data));
    }
  }, [address]);

  return (
    <div>
      <h2>Watch List</h2>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <ul>
        {Object.entries(balances).map(([token, balance]) => (
          <li key={token}>{token}: {balance}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
