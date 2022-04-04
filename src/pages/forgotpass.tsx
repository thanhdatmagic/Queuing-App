import React from 'react'
import logo from '../asset/image/logoatla.png'
import title from '../asset/image/titleforgotpass.png'
import '../css/forgotpass.css'

export default function forgotpass() {
  return (
    <>
    <div className="forgotpass">
    <img src={logo} className='logo'/>
    <p className='repasss'>Đặt lại mật khẩu</p>
    <p className='need'>Vui lòng nhập lại email của bạn để đặt lại mật khẩu *</p>
    <input type="text" className='entermail' />
    </div>
    <button className='cancelbtn'>Hủy</button>
    <button className='nextbtn'>Tiếp tục</button>
    <div className="infopage">
    <img src={title} className='titlepage'/>
    </div>
   
    </>
  )
}
