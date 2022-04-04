import React from 'react'
import logo from '../asset/image/logoatla.png'
import '../css/menubar.css'

export default function menubar() {
  return (
    <div className="menubar">
            <img src={logo} alt="" className="logo"/>
            <div className="option">
                <u className='op'>
                    <li className='opitem'>Dashboard</li>
                    <li className='opitem'>Thiết bị</li>
                    <li className='opitem'>Dịch vụ</li>
                    <li className='opitem'>Cấp số</li>
                    <li className='opitem'>Báo cáo</li>
                    <li className='opitem'>Cài đặt hệ thống </li>
                </u>
            </div>
            <button className='btnlogout'>Đăng xuất</button>
        </div>
  )
}
