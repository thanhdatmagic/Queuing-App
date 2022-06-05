import React from 'react'
import logo from '../asset/image/logoatla.png'
import '../css/menubar.css'
import { Link,useNavigate } from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import Dots from './threedot'


export default function Menubar() {
  const navitage = useNavigate()
  function logout(){
    navitage('/')
  }
  return (
    <div className="menubar">
            <img src={logo} alt="" id="logosmall"/>
            <div className="option">
                <ul className='op'>
                
                    <li className='opitem'>  <Link to='/dashboard'>Dashboard</Link></li>
                    <li className='opitem'><Link to='/device'>Thiết bị</Link></li>
                    <li className='opitem'><Link to='/service'>Dịch vụ</Link></li>
                    <li className='opitem'><Link to='/number'>Cấp số</Link></li>
                    <li className='opitem'><Link to='/report'>Báo cáo</Link></li>
                    <li className='opitem123'>Cài đặt hệ thống</li> <Dots/>
                    
                </ul>
            </div>
            <button className='btnlogout' onClick={logout}>Đăng xuất</button>
        </div>
  )
}
