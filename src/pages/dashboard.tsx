import React from 'react'
import '../css/dashboard.css';
import MenuBar from '../components/menubar'
import Chart from '../components/chart'

export default function dashboard() {
  return (
    <>
    <div className="dashboard">
        <MenuBar/>
        <h4>Dashboard</h4>
        <h3>Biểu đồ cấp số</h3>
        <div className="static">
            <div className="stacticitem">
                <h2>Số thứ tự đã cấp</h2>
                <p className='staticnumber'>4.221</p>
            </div>
            <div className="stacticitem">
                <h2>Số thứ tự đã sử dụng</h2>
                <p className='staticnumber'>4.221</p>
            </div>
            <div className="stacticitem">
             <h2>Số thứ tự đang chờ</h2>
             <p className='staticnumber'>4.221</p>
            </div>
            <div className="stacticitem">
            <h2>Số thứ tự đã bỏ qua</h2>
            <p className='staticnumber'>4.221</p>
            </div>
        </div>
        <div className="chart"><Chart /></div>
        

        <div className="general">
    
        </div>
    </div>
    </>
  )
}
