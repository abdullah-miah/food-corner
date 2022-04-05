
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
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
            <LineChart  width={600} height={400} data={chart}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <CartesianGrid></CartesianGrid>
            <Tooltip></Tooltip>
            </LineChart>
            </div>
            <div>
            <LineChart  width={400} height={400} data={chart}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
            </LineChart>
            </div>
           
        </div>
    );
};

export default Dashboard;