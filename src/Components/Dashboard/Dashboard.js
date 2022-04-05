
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import '../Dashboard/Dashboard.css';
const Dashboard = () => {
    const [chart, setChart]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data=>setChart(data))
    },[])
    return (
        <div className='Chart'>
            <div className='line-chart'>
                <h4> Sell per Month</h4>
            <LineChart  width={500} height={300} data={chart}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <CartesianGrid></CartesianGrid>
            <Tooltip></Tooltip>
            </LineChart>
            </div>
            <div className='line-chart'>
            <h4> Revenue per Month</h4>
            <AreaChart width={500} height={300} data={chart}
  margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
            </div>
            <div className='line-chart'>
            <h4> Revenue per Month</h4>
            <BarChart width={500} height={300} data={chart}
            margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Tooltip />
            <Legend></Legend>
                <Bar dataKey="investment" fill="#8884d8"></Bar>
                <Bar dataKey="revenue" fill="#82ca9d"></Bar>
            </BarChart>
            </div>
            <div className='line-chart'>
            <h4> Investment per Month</h4>
                <PieChart width={400} height={400}
                margin={{ top: 10, right: 0, left: 80, bottom: 0 }}
                >
                    <Pie dataKey="investment"
            startAngle={180}
            endAngle={0}
            data={chart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label></Pie>
            <Tooltip></Tooltip>
                </PieChart>
            </div>
           
        </div>
    );
};

export default Dashboard;