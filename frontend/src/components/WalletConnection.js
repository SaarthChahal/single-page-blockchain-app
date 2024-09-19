import React, { useState } from 'react';

const WalletConnection = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = () => {
    alert('Wallet connected: ' + walletAddress);
  };

  return (
    <div className="wallet-connection">
      <input 
        type="text" 
        placeholder="Enter wallet address or connect" 
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button className="wallet-button" onClick={handleConnectWallet}>
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletConnection;
