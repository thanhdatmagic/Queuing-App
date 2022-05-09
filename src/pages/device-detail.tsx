import React from 'react'
import '../css/device.css'
import MenuBar from '../components/menubar'
import {Link} from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import {db} from '../firebase'
import {useParams} from 'react-router-dom'
import {collection,getDocs} from "firebase/firestore"


export default function DetailDevice() {
  const [devices,setDevices] = useState([] as any)
  const devicesCollection =collection(db,"device")
  useEffect(() =>{
    const getDevices=async()=>{
      const data= await getDocs(devicesCollection)
      setDevices(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getDevices()
  },[])
  const {id}=useParams()
  console.log(id)
  const detail=devices.filter(device=>device.id===id)
  console.log(detail);
  return (
    <div className="newdevice">
    <MenuBar/>

        <h3 >Quản lý thiết bị</h3>
       <div >
          
           {detail.map(d=>(
             <div className="input-device">
                <p id='info-device'>Thông tin thiết bị</p>
                <div className="container">
                  <div className="row">
                    <div className="col-6 lelfinfodevice">
                      <label className="col-3 lelfinfodevicedetail">Mã thiết bị : </label>
                      <label >{d._id} </label>
                      <br/>
                      <label className="col-3 lelfinfodevicedetail" >Tên thiết bị:</label>
                      <label>{d.name} </label>
                      <br/>
                      <label className="col-3 lelfinfodevicedetail">Địa chỉ IP:</label>
                      <label>{d.ip} </label>
                      <br/>
                      <label className="col-3 lelfinfodevicedetail">Dịch vụ sử dụng:</label>
                      <label>{d.service} </label>
                    </div>
                    <div className="col-6 lelfinfodevice">
                      <label className="col-3 lelfinfodevicedetail">Loại thiết bị : </label>
                      <label >{d.type} </label>
                      <br/>
                      <label className="col-3 lelfinfodevicedetail" >Tên đăng nhập:</label>
                      <label>dat123@gmail.com </label>
                      <br/>
                      <label className="col-3 lelfinfodevicedetail">Mật khẩu:</label>
                      <label>CMS</label>
                      <br/>
                     
                    </div>
                  </div>
                </div>
             </div>
             
             
           ))}
           <Link to={`/device/${detail.map(d=>(
             d.id
           ))}/update`} className="updatebtn">
           <p className='buttonupdateindetail'>Cập nhật thiết bị</p>
       </Link>
      
           
       </div>
       
      

    </div>
  )
}
