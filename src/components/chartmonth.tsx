import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';
import '../css/dashboard.css';


export default function chart() {
    const data = [{name: '1' ,thang: 2400, amt: 6000},
    {name: '2' ,thang: 2000, amt: 6000},
    {name: '3' ,thang: 2600, amt: 6000},
    {name: '4' ,thang: 1800, amt: 6000},
    {name: '5' ,thang: 2000, amt: 6000},
    {name: '6' ,thang: 2600, amt: 6000},
    {name: '7' ,thang: 1800, amt: 6000},
    {name: '8' ,thang: 2000, amt: 6000},
    {name: '9' ,thang: 2600, amt: 6000},
    {name: '10' ,thang: 1800, amt: 6000},
    {name: '11' ,thang: 2000, amt: 6000},
    {name: '12' ,thang: 2600, amt: 6000},
  ];
  return (
    <>
    <p className='labelreport'>Bảng thống kê theo tháng</p>
    <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="thang" stroke="#8884d8" />
  </LineChart>    
    </>
  
  )
}
