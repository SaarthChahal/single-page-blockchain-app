import React, { useState } from 'react';
import Web3 from 'web3';

const WalletConnection = () => {
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
    } else {
      alert('MetaMask not found!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected Address: {address}</p>}
    </div>
  );
};

export default WalletConnection;
