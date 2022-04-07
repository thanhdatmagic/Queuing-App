import React from 'react'
import '../css/device.css'
import MenuBar from '../components/menubar'
import {Link} from 'react-router-dom'

export default function DetailDevice() {
  return (
    <div className="newdevice">
    <MenuBar/>

        <h3 >Quản lý thiết bị</h3>
       <div className="input-device">
           <p id='info-device'>Thông tin thiết bị</p>
           <p id='name-label-detail'>Tên thiết bị</p>   
           <p id='name-detail'></p>    
          <p id='user-label-detail'>Tên đăng nhập</p>
          <p id='user-detail'></p>
           <p id='ip-label-detail'>Địa chỉ IP</p>
           <p id='ip-detail'></p>        
           <p id='pass-label-detail'>Mật khẩu</p>
           <p id='pass-detail'></p>
           <p id='type-label-detail'>Loại thiết bị</p>
           <p id='type-detail'></p>
           <p id='service-label-detail'>Dịch vụ sử dụng </p>
           <p id='id-label-detail'>Mã thiết bị</p>
       </div>
       <Link to='/device/update' className="updatebtn">
           <a href="" id='btnupdate'>I</a>
           <p id='update-label'>Cập nhật thiết bị</p>
       </Link>
      

    </div>
  )
}
