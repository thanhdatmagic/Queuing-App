import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';
import '../css/dashboard.css';


export default function chart() {
    const data = [{name: 'Tuan 1' ,tuần: 2400, amt: 6000},
    {name: 'Tuan 2' ,tuần: 1600, amt: 6000},
    {name: 'Tuan 3' ,tuần: 1500, amt: 6000},
    {name: 'Tuan4' ,tuần: 2000, amt: 6000},
  
  
  
  ];
  return (
    <div>
        <p className='labelreport'>Bảng thống kê theo tuần</p>
        <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="tuần" stroke="#8884d8" />
  </LineChart>

    </div>  
    
  )
}
