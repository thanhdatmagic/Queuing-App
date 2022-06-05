import React,{useState} from 'react'
import MenuBar from '../../components/menubar'
import TabelRole from './table'
import './roel.css'
import {Link} from 'react-router-dom'
import Noti from '../../components/smallprofile'
export default function Role() {
  const [search,setSearch] =useState('')
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3"><MenuBar/></div>
       
          <div className="col-6 positiontablerole">
          <label className="mainlabellistroleindex">Danh sách vai trò</label>
            <label className="inputsearchlabel">Nhập từ khóa</label>
            <br/>
            <input type="text" className="inputsearchlabel" placeholder="Nhập từ khóa" onChange={e=>setSearch(e.target.value)}/>
              <TabelRole props={search}/>
          </div>
          <Link to='/role/add' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladddevice'>Thêm vai trò</p>
        </Link>
        </div>
      </div>
      <Noti/>
    </div>
  )
}
