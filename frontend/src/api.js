const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const getBalance = async (address) => {
  const response = await fetch(`${API_BASE_URL}/balance?address=${address}`);
  return response.json();
};

export const getHistoricalData = async (address) => {
  const response = await fetch(`${API_BASE_URL}/historical?address=${address}`);
  return response.json();
};

export const getAllowance = async (address) => {
  const response = await fetch(`${API_BASE_URL}/allowance?address=${address}`);
  return response.json();
};

export const transferTokens = async (fromAddress, toAddress, amount, token) => {
  const response = await fetch(`${API_BASE_URL}/transfer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ from_address: fromAddress, to_address: toAddress, amount, token }),
  });
  return response.json();
};
