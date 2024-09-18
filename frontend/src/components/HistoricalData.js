import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HistoricalData = ({ data }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Filter data based on selected date range
  const filteredData = data.filter(d => new Date(d.date) >= startDate && new Date(d.date) <= endDate);

  return (
    <div>
      <h2>Historical Data</h2>
      <div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <LineChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default HistoricalData;
