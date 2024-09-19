import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Allowance = ({ allowances }) => {
  return (
    <div className="allowance-bar-chart">
      <h2>Token Allowances</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={allowances}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="contract" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Allowance;
