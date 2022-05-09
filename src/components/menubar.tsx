import React from 'react'
import logo from '../asset/image/logoatla.png'
import '../css/menubar.css'
import { Link,useNavigate } from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'


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
                    <Dropdown className='colordropdown'>
                            <Dropdown.Toggle  id="dropdown-basic">
                              Cài đặt hệ thống
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1"> <Link to='/role'>Quản lý vai trò</Link></Dropdown.Item>
                              <Dropdown.Item href="#/action-2"> <Link to='/user'>Quản lý người dùng</Link></Dropdown.Item>
                              <Dropdown.Item href="#/action-3"> <Link to='/history'>Nhật ký hoạt động</Link></Dropdown.Item>
                            </Dropdown.Menu>
                      </Dropdown>
                </ul>
            </div>
            <button className='btnlogout' onClick={logout}>Đăng xuất</button>
        </div>
  )
}
