import React from 'react'
import '../css/device.css'
import MenuBar from '../components/menubar'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {db} from '../firebase'
import {getDoc,doc} from "firebase/firestore"



export default function DetailDevice() {

  const [device,setDevice] = useState({} as any)


  useEffect(() =>{

    const getDevice=async()=>{
 
      
    }
    getDevice()
  },[])

  return (
    <div className="newdevice">
    <MenuBar/>

        <h3 >Quản lý thiết bị</h3>
       <div className="input-device">
           <p id='info-device'>Thông tin thiết bị</p>
           <p id='name-label-detail'>Tên thiết bị: </p>   
           <p id='name-detail'></p>    
          <p id='user-label-detail'>Tên đăng nhập</p>
          <p id='user-detail'></p>
           <p id='ip-label-detail'>Địa chỉ IP: {device.ip}</p>
           <p id='ip-detail'></p>        
           <p id='pass-label-detail'>Mật khẩu</p>
           <p id='pass-detail'></p>
           <p id='type-label-detail'>Loại thiết bị:{device.type}</p>
           <p id='type-detail'></p>
           <p id='service-label-detail'>Dịch vụ sử dụng </p>
           <p id='id-label-detail'>Mã thiết bị:{device.id}</p>
       </div>
       <Link to='/device/update' className="updatebtn">
           <a href="" id='btnupdate'>I</a>
           <p id='update-label'>Cập nhật thiết bị</p>
       </Link>
      

    </div>
  )
}
