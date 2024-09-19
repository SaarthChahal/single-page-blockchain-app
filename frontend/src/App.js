import React from 'react';
import WalletConnection from './components/WalletConnection';
import WatchList from './components/WatchList';
import HistoricalData from './components/HistoricalData';
import Allowance from './components/Allowance';
import TokenTransfer from './components/TokenTransfer';
import './App.css';

function App() {
  // Dummy data for example purposes
  const tokens = [
    { symbol: 'ETH', balance: '1.5' },
    { symbol: 'BTC', balance: '0.1' }
  ];

  const historicalData = [
    { date: '2024-01-01', balance: 1.5 },
    { date: '2024-02-01', balance: 1.8 },
    { date: '2024-03-01', balance: 1.2 }
  ];

  const allowances = [
    { contract: '0x123...', amount: 100 },
    { contract: '0x456...', amount: 50 }
  ];

  return (
    <div className="container">
      <h1>Token Tracker App</h1>

      <div className="card">
        <div className="card-header">Connect Wallet</div>
        <WalletConnection />
      </div>

      <div className="card">
        <div className="card-header">Watch List</div>
        <WatchList tokens={tokens} />
      </div>

      <div className="card">
        <div className="card-header">Historical Data</div>
        <HistoricalData data={historicalData} />
      </div>

      <div className="card">
        <div className="card-header">Token Allowance</div>
        <Allowance allowances={allowances} />
      </div>

      <div className="card">
        <div className="card-header">Transfer Tokens</div>
        <TokenTransfer />
      </div>
    </div>
  );
}

export default App;
