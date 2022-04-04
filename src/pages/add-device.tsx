import React from 'react'
import MenuBar from '../components/menubar'
import '../css/device.css'

export default function NewDevice() {
  return (
    <>
    <div className="newdevice">
    <MenuBar/>

        <h3 >Quản lý thiết bị</h3>
       <div className="input-device">
           <p id='info-device'>Thông tin thiết bị</p>
           <p id='name-label'>Tên thiết bị</p>
           <input id='name-input' placeholder='Nhập tên thiết bị'/>
           <p id='user-label'>Tên đăng nhập</p>
           <input id='user-input'placeholder='Nhập tên đăng nhập'/>
           <p id='ip-label'>Địa chỉ IP</p>
           <input id='ip-input'placeholder='Nhập đia chỉ IP'/>
           <p id='pass-label'>Mật khẩu</p>
           <input id='pass-input' type='password' placeholder='Nhập mật khẩu'/>
           <p id='type-label'>Loại thiết bị</p>
           <select id="type-input">
                    <option disabled selected>Loại thiết bị</option>
                    <option value="saab">Kiosk</option>
                    <option value="vw">Display Counter</option>
            </select>
           <p id='service-label'>Dịch vụ sử dụng </p>
           <input id='service-input'placeholder='Nhập dịch vụ sử dụng'/>
           <p id='id-label'>Mã thiết bị</p>
           <input id='id-input'placeholder='Nhập mã thiết bị'/>
       </div>
       <button id='btncancle'>Hủy bỏ</button>
       <button id ='btnaddnew'> Thêm thiết bị</button>

    </div>


    </>
  )
}
