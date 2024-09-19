# Token Tracker

A single-page application (SPA) for tracking and managing tokens. Users can connect their wallet, add tokens to their watch list, view current and historical balances, check token allowances, and perform token transfers.

## Features

- **Wallet Connection**: Connect your Metamask or other wallets, or input a wallet address directly.
- **Watch List**: Add tokens to your watch list and view current balances.
- **Historical Data**: Fetch and view historical balances of tokens with a date picker.
- **Allowance**: Check token allowances for different smart contracts.
- **Token Transfer**: Transfer tokens to another address and approve token operations.

## Project Structure
```
/token-tracker-app
│
├── /backend
│   ├── app.py          # Flask backend API
│   ├── requirements.txt # Python dependencies
│
├── /frontend
│   ├── /public
│   │   ├── index.html  # Main HTML file
│   │   └── styles.css  # Global styles
│   ├── /src
│   │   ├── /components # React components
│   │   │   ├── WalletConnection.js
│   │   │   ├── WatchList.js
│   │   │   ├── HistoricalData.js
│   │   │   ├── Allowance.js
│   │   │   └── TokenTransfer.js
│   │   ├── App.js      # Main React component
│   │   ├── App.css     # Styles for App component
│   │   └── index.js    # Entry point for React app
│   ├── package.json    # Node.js dependencies
│
└── README.md           # Project documentation
```


## Prerequisites

- **Node.js** and **npm**: For running the React frontend.
- **Python** and **pip**: For running the Flask backend.
- **Metamask** or other Ethereum-compatible wallet for testing.

## Setup

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt

3. Run the Flask server:
   ```bash
   python app.py

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend

2. Install Node.js dependencies
    ```bash
    npm install

3. Start the React development server:
    ```bash
    npm start

This will open the application in your default web browser.

## Usage

**Connect Wallet**: Use Metamask or input a wallet address.

**Add Tokens**: Enter token details to add to your watch list.

**View Balances**: Check current and historical balances of your tokens.

**Check Allowances**: Enter a contract address to check token allowances.

**Transfer Tokens**: Input recipient address and amount to transfer token

## Notes
- Node.js: Ensure Node.js is installed.
- Python Version: Ensure you are using Python 3.x for the backend.
- If you're using environment variables (for API keys, etc.), configure them appropriately in both frontend and backend.
