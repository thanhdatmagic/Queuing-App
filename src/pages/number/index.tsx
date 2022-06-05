import React,{useState} from 'react'
import MenuBar from '../../components/menubar'
import TableNumber from './table'
import './number.css'
import {Link} from 'react-router-dom'
import Noti from '../../components/smallprofile'


export default function Number() {
  const [search,setSearch]=useState('')
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
        <MenuBar/>
        </div>
       
        <div className="col-8 numberlist">
        <label className='mainlabelprovidenumber'>Quản lý cấp số</label>
          <label className="inputsearchnumbertype">Từ khóa</label>
          <br/>
          <input type="text" className="inputsearchnumbertype" onChange={e=>setSearch(e.target.value)}/>
          <br/>
        <TableNumber props={search}/>
        </div>
        <div className="col-1">
        <Link to='/number/add' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladddevice'>Cấp số mới</p>
        </Link>
        </div>

      </div>
       
       
        
    <Noti/>
    </div>
  )
}
