import React from 'react'
import '../css/dashboard.css';
import MenuBar from '../components/menubar'
import Chartday from '../components/chartday'
import Chartweek from '../components/chartweek'
import Chartmonth from '../components/chartmonth'
import PieDevice from '../components/piechartdevice'
import Calen from '../components/calendar';
import SmallImage from '../components/smallprofile'


import { useState } from 'react';
export default function Dashboard() {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  const[type,setType]=useState('ngay')
  console.log(type);
  return (
    <>
   
      <div className="dashboard">
        <MenuBar/>
       
        <h4>Dashboard</h4>
        <h4 className='dashboardlabelmain'>Biểu đồ cấp số</h4>
        <div className="static">
            <div className="stacticitem">
            <i className="fa-solid fa-calendar iconposition"></i>
                <h2 className='lconposition'>Số thứ tự đã cấp</h2>
               
                <p className='staticnumber'>4.221</p>
            </div>
            <div className="stacticitem">
            <i className="fa-solid fa-calendar-check iconposition"></i>
                <h2 className='lconposition'>Số thứ tự đã sử dụng</h2>
                <p className='staticnumber'>4.221</p>
            </div>
            <div className="stacticitem">
            <i className="fa-solid fa-circle-pause iconposition"></i>
             <h2 className='lconposition'>Số thứ tự đang chờ</h2>
             <p className='staticnumber'>4.221</p>
            </div>
            <div className="stacticitem">
            <i className="fa-solid fa-bookmark iconposition"></i>
            <h2 className='lconposition'>Số thứ tự đã bỏ qua</h2>
            <p className='staticnumber'>4.221</p>
            </div>
        </div>

        <div className="chart">
          <div className="dashboardchooseoption">
          <label htmlFor="">Xem theo</label>
          <select onChange={(e)=>{setType(e.target.value)}}>
            <option value="ngay">Ngày</option>
            <option value="tuan">Tuần</option>
            <option value="thang">Tháng</option>
          </select>
          </div>
         
          {type==='ngay'? <Chartday/>:type==='tuan'?<Chartweek/>:type==='thang'?<Chartmonth/>:''}

         
          </div>
        

        <div className="general">
        <h4 className='dashboardlabelgeneral'>Tổng quan</h4>
          <div className="containter generalpiechart">
          <div className="row no-gutters bg-light position-relative piechartposition">
                <div className="col-3 ">
                  <PieDevice/>
                </div>
                <div className="col-1 ">
                  <h5 className="mt-0 numberstatic">4.221</h5>
                  <p className="labelstatic">Thiết bị.</p>
                </div>
          </div>

          <div className="row no-gutters bg-light position-relative piechartposition">
                <div className="col-3">
                <PieDevice/>
                </div>
                <div className="col-1 ">
                  <h5 className="mt-0 numberstatic">4.221</h5>
                  <p className="labelstatic">Dịch vụ.</p>
                </div>
          </div>
          <div className="row no-gutters bg-light position-relative piechartposition">
                <div className="col-3">
                <PieDevice/>
                </div>
                <div className="col-1 ">
                  <h5 className="mt-0 numberstatic">4.221</h5>
                  <p className="labelstatic">Cấp số.</p>
                </div>
                <Calen/>
                
          </div>
         
          </div>
         
    
        </div>
    </div>
    <SmallImage />


    
    </>
  )
}
