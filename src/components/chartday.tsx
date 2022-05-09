import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';
import '../css/dashboard.css';

export default function chart() {
    const data = [{name: '1' ,ngày: 2400, amt: 6000},
    {name: '13' ,ngày: 2000, amt: 6000},
    {name: '19' ,ngày: 2600, amt: 6000},
    {name: '30' ,ngày: 1800, amt: 6000},
  ];
  return (
    <>
    <p className='labelreport'>Bảng thống kê theo ngày</p>
     <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="ngày" stroke="#8884d8" />
  </LineChart>
    
    </>
   
  )
}
