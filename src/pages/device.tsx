import React from 'react'
import MenuBar from '../components/menubar'
import '../css/device.css'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection,getDocs} from "firebase/firestore"
import DetailDevice from './device-detail'
import Noti from '../components/smallprofile'


export default function Device() {
  const [devices,setDevices] = useState([] as any)
  const devicesCollection =collection(db,"device")
  const status=true
  const [search,setSearch]=useState('')
  console.log(devices)
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
            <option  >Hoạt Động</option>
            <option >Ngưng Hoạt Động</option>
         
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
          <input placeholder="Nhập từ khóa" id='inputkeyword' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="device-data">
        <table className="table table-striped table-hover table-warning tablenumber">
        <thead>
          <tr>
            <th scope="col">Mã thiết bị</th>
            <th scope="col">Tên thiết bị</th>
            <th scope="col">Địa chỉ IP</th>
            <th scope="col">Trạng thái hoạt động</th>
            <th scope="col">Trạng thái kết nối</th>
            <th scope="col">Dịch vụ sử dụng</th>
            <th scope="col">  </th>
            <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>
          {devices.filter(device=>device.name.toLowerCase().includes(search)).map((device)=>{
              return (
                <>
                <tr>
              <th scope="row">{device._id}</th>
              <td>{device.name}</td>
              <td>{device.ip}</td>
              <td>Hoạt động</td>
              <td>Kết nối</td>
              <td>{device.service.map(s=>(s.label))}
              </td>
              <td ><Link to={`/device/${device.id}`}className='devicedetaillinkposition' >Chi tiết</Link></td>
              <td><Link to={`/device/${device.id}/update`} className='devicedetaillinkposition' >Cập nhật</Link></td>
              
            </tr>   
            </>
              )
          

})}
            
        </tbody>
      </table>

           
        </div>
        <Link to='/device/add' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladddevice'>Thêm thiết bị</p>
        </Link>


    </div>
    <Noti/>
    </>
  )
}
