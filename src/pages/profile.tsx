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
            <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/272198675_1598893987119204_8563649991403449713_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JxhQemQLMqwAX8odNL-&_nc_oc=AQk-jnBn049F2Qoi2RoH2bce6Wj2r6AbsosKyoO9Q6p4u949JrDtpIgxaF-GCgO7017OrGnQqKTo01eFLpegeTRE&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-8QdAvxxVE6oiFkTlzrklRvQDjBRloEFHYlauagEhacw&oe=624B5BAE" alt="" className='imginfo' />
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
