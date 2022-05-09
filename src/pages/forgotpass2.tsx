import React from 'react'
import '../css/forgotpass2.css'
import login from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titleforgotpass.png'
import {Link} from 'react-router-dom'

export default function forgotpass2() {
    return (
        <>
        <div id="forgotpass2forgotpass">
          <img src={login} id='logo'/>
          <p id="forgotpass2passlabel">Mật khẩu *</p>
          <input id="forgotpass2newpass"type="password"/>
          <p id='repass'>Nhập lại mật khẩu *</p>
          <input id="forgotpass2newpassconfirm"type="password"/>

      </div>
      <div id="forgotpass2infopage">
          <Link to='/'id="forgotpass2btncomfirm">Xác nhận</Link>
        
      <img src={titlepage} id="forgotpass2titlepage"/>
      </div>
        </>
    )
}
