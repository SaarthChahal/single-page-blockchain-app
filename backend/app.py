from flask import Flask, jsonify, request
from flask_cors import CORS
from web3 import Web3

app = Flask(__name__)
CORS(app)  # Enable CORS

# Connect to Ethereum node (replace with your Infura project ID)
infura_url = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
web3 = Web3(Web3.HTTPProvider(infura_url))

# Sample token data (replace with actual data)
tokens = {
    "DAI": {
        "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "decimals": 18
    },
    "USDC": {
        "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "decimals": 6
    }
}

@app.route('/api/balance', methods=['GET'])
def get_balance():
    address = request.args.get('address')
    balances = {}
    for token_name, token_data in tokens.items():
        contract = web3.eth.contract(address=token_data['address'], abi=[])
        balance = contract.functions.balanceOf(Web3.toChecksumAddress(address)).call()
        balances[token_name] = balance / (10 ** token_data['decimals'])
    return jsonify(balances)

@app.route('/api/historical', methods=['GET'])
def get_historical_data():
    address = request.args.get('address')
    # Placeholder for historical data
    # In real implementation, fetch historical data from a service or API
    data = {"dates": [], "balances": []}
    return jsonify(data)

@app.route('/api/allowance', methods=['GET'])
def get_allowance():
    address = request.args.get('address')
    # Placeholder for allowance check
    # Implement the logic for checking token allowance
    return jsonify({"allowance": "10000"})

@app.route('/api/transfer', methods=['POST'])
def transfer_tokens():
    data = request.json
    from_address = data.get('from_address')
    to_address = data.get('to_address')
    amount = data.get('amount')
    token_name = data.get('token')
    contract = web3.eth.contract(address=tokens[token_name]['address'], abi=[])
    nonce = web3.eth.getTransactionCount(Web3.toChecksumAddress(from_address))
    tx = contract.functions.transfer(Web3.toChecksumAddress(to_address), int(amount * (10 ** tokens[token_name]['decimals']))).buildTransaction({
        'nonce': nonce,
        'gas': 200000,
        'gasPrice': web3.toWei('20', 'gwei')
    })
    # Signing and sending the transaction is not implemented here for simplicity
    return jsonify({"status": "Transaction sent"})

if __name__ == "__main__":
    app.run(debug=True)
