import React from 'react'
import logo from '../asset/image/logoatla.png'
import title from '../asset/image/titleforgotpass.png'
import '../css/forgotpass.css'
import {Link} from 'react-router-dom'

export default function forgotpass() {
  return (
    <>
    <div id="forgotpass">
    <img src={logo} id='logo'/>
    <p id='repasss'>Đặt lại mật khẩu</p>
    <p id='need'>Vui lòng nhập lại email của bạn để đặt lại mật khẩu *</p>
    <input type="text" id='entermail' />
    </div>
    <Link to='/' id='cancelbtn'>Hủy</Link>
    <Link to='/forgot2' id='nextbtn'>Tiếp tục</Link>
  
    <div id="infopage">
    <img src={title} id='titlepage'/>
    </div>
   
    </>
  )
}
