import React from 'react'
import '../css/profilepage.css'
import logo from '../asset/image/logoatla.png'
import MenuBar from'../components/menubar'
import Noti from '../components/notification'
export default function profile() {
  return (
    <>
    <div className="profilepage">
        <MenuBar/>
        <p className='title'>Thông tin cá nhân</p>
        <div className="info">
            <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className='imginfo' />
            <input type="file" className='inputfile'/>
            <p className='nameinfo'>Nguyễn Sài Thành Đạt</p>
            <div className="inputinfo">
                <p className='fullname'>Tên người dùng:</p>
                <input type="text" className='ifullname'/>
                <p className='phone'>Số điện thoại:</p>
                <input className='iphone'type="text"/>
                <p className='email'>Email:</p>
                <input className='iemail' type="text"/>
                <p className='user'>Tên đăng nhập:</p>
                <input className='iuser' type="text"/>
                <p className='password'>Mật khẩu:</p>
                <input className='ipassword' type="passowrd"/>
                <p className='role'>Vai trò:</p>
                <input className='irole' type="text"/>
            </div>
            <Noti/>
        </div>
    </div>
    </>
  )
}
