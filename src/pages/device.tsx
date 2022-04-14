import React from 'react'
import MenuBar from '../components/menubar'
import '../css/device.css'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection,getDocs} from "firebase/firestore"
import DetailDevice from './device-detail'


export default function device() {
  const [devices,setDevices] = useState([] as any)
  const devicesCollection =collection(db,"device")
  useEffect(() =>{
    const getDevices=async()=>{
      const data= await getDocs(devicesCollection)
      console.log(data)
      setDevices(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getDevices()
  },[])
  console.log(devices)
  return (
    <>
    <div className="device">
        <MenuBar/>
        <div className="link">
        <h4 id='link1'>Thiết bi --</h4> <h4 id='link2'>Danh sách thiết bị</h4>
        </div>
      
        <h3 >Danh sách thiết bị</h3>
        <div className="status-activity">
          <p id='statusactivity'>Trạng thái hoạt động</p>
          <select id='activityoption' >
            <option value="#">Tất Cả</option>
            <option value="#">Hoạt Động</option>
            <option value="#">Ngưng Hoạt Động</option>
         
          </select>
        </div>
        <div className="status-connection">
        <p id='statusconnect'>Trạng thái kết nối</p>
          <select id='connectoption' >
            <option value="#">Tất Cả</option>
            <option value="#">Kết Nối</option>
            <option value="#">Mất Kết Nối</option>
         
          </select>
        </div>
        <div className="search">
          <p id='keyword'>Từ khóa</p>
          <input placeholder="Nhập từ khóa" id='inputkeyword'/>
        </div>
        <div className="device-data">

            <table>
              <tr>
                <th>Mã Thiết Bị</th>
                <th>Tên Thiết Bị</th>
                <th>Địa chỉ IP</th>
                <th>Trạng thái hoat động</th>
                <th>Trạng thái kết nối</th>
                <th>Dịch vụ sử dụng</th>
                <th></th>
                <th></th>
              </tr>
              {devices.map((device)=>{
                return(
                  <div>
                  <tr>
                  <td>KIO_0{device.id}</td>
                  <td>{device.name}</td>
                  <td>{device.ip}</td>
                  <td>{device.status}</td>
                  <td>{device.sttconnection}</td>
                  <td>Kham tim mạch khám mắt <br/><a href="#">Xem thêm</a></td>
                  <td>
                    <Link to={`/device/${device.id}`} key={device.id}>Chi tiết</Link>
                  
                  </td>
                  <td>
                    <Link to={`/device/${device.id}`} key={device.id}>Chi tiết</Link>               
                  </td>
                </tr>

                  </div>
                )
                
              })}
              
            </table>
        </div>
        <Link to='/device/add' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladd'>Thêm thiết bị</p>
        </Link>


    </div>
    </>
  )
}
