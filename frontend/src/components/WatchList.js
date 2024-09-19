import React from 'react';
import './WatchList.css';  // Optional, for custom styling

const WatchList = ({ tokens }) => {
  return (
    <div className="watchlist-container">
      <h2>Your Watch List</h2>
      <table className="watchlist-table">
        <thead>
          <tr>
            <th>Token Symbol</th>
            <th>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.length > 0 ? (
            tokens.map((token, index) => (
              <tr key={index}>
                <td>{token.symbol}</td>
                <td>{token.balance}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="no-tokens">
                No tokens in your watchlist
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
