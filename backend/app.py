from flask import Flask, jsonify, request
from web3 import Web3
import os

app = Flask(__name__)

# Connect to Ethereum node via Infura or another provider
INFURA_URL = os.getenv('INFURA_URL', 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID')
web3 = Web3(Web3.HTTPProvider(INFURA_URL))

# Check if the connection is successful
if not web3.isConnected():
    raise ConnectionError("Failed to connect to Ethereum network")

# Replace with your actual token contract address and ABI
TOKEN_CONTRACT_ADDRESS = '0xYourTokenContractAddress'
TOKEN_ABI = [
    # Add your token contract ABI JSON here
]

contract = web3.eth.contract(address=TOKEN_CONTRACT_ADDRESS, abi=TOKEN_ABI)

@app.route('/balance', methods=['GET'])
def get_balance():
    address = request.args.get('address')
    if not web3.isAddress(address):
        return jsonify({'error': 'Invalid address'}), 400

    try:
        balance = contract.functions.balanceOf(address).call()
        return jsonify({'balance': web3.fromWei(balance, 'ether')}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/allowance', methods=['GET'])
def get_allowance():
    owner = request.args.get('owner')
    spender = request.args.get('spender')
    if not (web3.isAddress(owner) and web3.isAddress(spender)):
        return jsonify({'error': 'Invalid address'}), 400

    try:
        allowance = contract.functions.allowance(owner, spender).call()
        return jsonify({'allowance': web3.fromWei(allowance, 'ether')}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/transfer', methods=['POST'])
def transfer_tokens():
    data = request.json
    sender = data.get('sender')
    recipient = data.get('recipient')
    amount = data.get('amount')
    private_key = data.get('private_key')

    if not (web3.isAddress(sender) and web3.isAddress(recipient)):
        return jsonify({'error': 'Invalid address'}), 400
    if amount <= 0:
        return jsonify({'error': 'Amount must be greater than zero'}), 400

    nonce = web3.eth.getTransactionCount(sender)

    transaction = contract.functions.transfer(recipient, web3.toWei(amount, 'ether')).buildTransaction({
        'chainId': 1,  # Mainnet chain ID; adjust if using a testnet
        'gas': 2000000,
        'gasPrice': web3.toWei('50', 'gwei'),
        'nonce': nonce
    })

    try:
        signed_txn = web3.eth.account.signTransaction(transaction, private_key=private_key)
        tx_hash = web3.eth.sendRawTransaction(signed_txn.rawTransaction)
        return jsonify({'transaction_hash': web3.toHex(tx_hash)}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
