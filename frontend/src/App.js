import React from 'react';
import WalletConnection from './components/WalletConnection';
import WatchList from './components/WatchList';
import HistoricalData from './components/HistoricalData';
import Allowance from './components/Allowance';
import TokenTransfer from './components/TokenTransfer';
import './App.css';  // Import the CSS file

function App() {
  return (
    <div className="container">
      <h1>Token Tracker</h1>
      <div className="card">
        <div className="card-header">Connect Wallet</div>
        <WalletConnection />
      </div>
      <div className="card">
        <div className="card-header">Watch List</div>
        <WatchList />
      </div>
      <div className="card">
        <div className="card-header">Historical Data</div>
        <HistoricalData />
      </div>
      <div className="card">
        <div className="card-header">Token Allowance</div>
        <Allowance />
      </div>
      <div className="card">
        <div className="card-header">Transfer Tokens</div>
        <TokenTransfer />
      </div>
    </div>
  );
}

export default App;
