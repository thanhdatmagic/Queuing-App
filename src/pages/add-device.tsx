import React from 'react'
import MenuBar from '../components/menubar'
import '../css/device.css'
import { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection,addDoc,getDocs} from "firebase/firestore"
import {useNavigate} from 'react-router-dom'

export default function NewDevice() {
  const navitage=useNavigate()
  const [services,setServices] = useState([] as any)
  const ServicesCollection =collection(db,"service")
  useEffect(() =>{
    const getServices=async()=>{
      const data= await getDocs(ServicesCollection)
      console.log(data)
      setServices(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getServices()
  },[])
  console.log(services)

  const [name,setName]=useState('')
  const [id,setID]=useState('')
  const [ip,setIP]=useState('')
  const [type,setType]=useState('')
  const [service,setService]=useState('')
  const devicesCollection =collection(db,"device")
 const createNew= async ()=>{
  await addDoc(devicesCollection,{_id:id,ip:ip,name:name,type:type,status:true,sttconnection:true,service:service})
  alert("Added")
  navitage('/device')
 }
  return (
    <>
    <div className="newdevice">
    <MenuBar/>

        <h3 >Quản lý thiết bị</h3>
       <div className="input-device">
           <p id='info-device'>Thông tin thiết bị</p>
           <p id='name-label'>Tên thiết bị</p>
           <input id='name-input' placeholder='Nhập tên thiết bị' onChange={(e)=>{setName(e.target.value)}}/>
           <p id='user-label'>Tên đăng nhập</p>
           <input id='user-input'placeholder='Nhập tên đăng nhập'/>
           <p id='ip-label'>Địa chỉ IP</p>
           <input id='ip-input'placeholder='Nhập đia chỉ IP'  onChange={(e)=>{setIP(e.target.value)}}/>
           <p id='pass-label'>Mật khẩu</p>
           <input id='pass-input' type='password' placeholder='Nhập mật khẩu'/>
           <p id='type-label'>Loại thiết bị</p>
           <select id="type-input"  onChange={(e)=>{setType(e.target.value)}}>
                    <option disabled selected>Loại thiết bị</option>
                    <option value="Kiosk">Kiosk</option>
                    <option value="Display Counter">Display Counter</option>
            </select>


            
           <p id='service-label'>Dịch vụ sử dụng </p>
           <select id='service-input'  onChange={(e)=>{setService(e.target.value)}}>
                    <option disabled selected>Loại dich vu</option>
                    {services.map(s=>(
                      <option value={s.name}>{s.name}</option>
                    ))}
            </select>
           <p id='id-label'>Mã thiết bị</p>
           <input id='id-input'placeholder='Nhập mã thiết bị' onChange={(e)=>{setID(e.target.value)}}/>
       </div>
       <button id='btncancle'>Hủy bỏ</button>
       <button id ='btnaddnew' onClick={createNew}> Thêm thiết bị</button>

    </div>


    </>
  )
}
