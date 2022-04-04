import React from 'react'
import '../css/forgotpass2.css'
import login from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titleforgotpass.png'

export default function forgotpass2() {
    return (
        <>
        <div className='forgotpass'>
          <img src={login} className='logo'/>
          <p className='pass'>Mật khẩu *</p>
          <input className="newpass"type="password"/>
          <p className='repass'>Nhập lại mật khẩu *</p>
          <input className="newpassconfirm"type="password"/>
          <button className="btnlogin">Đăng nhập</button>
      </div>
      <div className="infopage">
          <button className='btncomfirm'>Xác nhận</button>
      <img src={titlepage} className='titlepage'/>
      </div>
        </>
    )
}
