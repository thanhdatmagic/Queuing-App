import React from 'react'
import '../css/forgotpass2.css'
import login from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titleforgotpass.png'
import {Link} from 'react-router-dom'

export default function forgotpass2() {
    return (
        <>
        <div id='forgotpass'>
          <img src={login} id='logo'/>
          <p id='passlabel'>Mật khẩu *</p>
          <input id="newpass"type="password"/>
          <p id='repass'>Nhập lại mật khẩu *</p>
          <input id="newpassconfirm"type="password"/>

      </div>
      <div id="infopage">
          <Link to='/'id='btncomfirm'>Xác nhận</Link>
        
      <img src={titlepage} id='titlepage'/>
      </div>
        </>
    )
}
