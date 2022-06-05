import React from 'react'
import MenuBar from '../components/menubar'
import '../css/device.css'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection,getDocs,updateDoc,doc} from "firebase/firestore"
import {useParams,useNavigate} from 'react-router-dom'
import Select from 'react-select'


export default function UpdateDevice() {
  const navigate=useNavigate()
  
 

  //service 
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
  const options = services.map(service =>(
    { value:service._id,label:service.name}
  ))

  


  const [name,setName]=useState('')

  const [_id,setID]=useState('')
  const [type,setType]=useState('')
  const [ip,setIP]=useState('')
  const [selectedOptions,setSelectedOptions] =useState([] as any)
  const [service,setService]=useState('')
  

  //update devices
 
   const UpdateDevice =async(id)=>{
     const deviceDoc=doc(db,'device',id)
   
     const newDevice={_id:_id,name:name,type:type,ip:ip,service:selectedOptions}
     
     await updateDoc(deviceDoc,newDevice)
     alert('ok')
     navigate('/device')
   }

 
  
  return (
    <>
    <div className="newdevice">
    <MenuBar/>
    {detail.map(d=>(
      <>
      <h3 >Quản lý thiết bị</h3>
       <div className="input-device">
           <p id='info-device'>Thông tin thiết bị</p>
           <p id='name-label'>Tên thiết bị</p>
           <input id='name-input' placeholder={d.name} onChange={(e)=>{setName(e.target.value)}}/>
           <p id='user-label'>Tên đăng nhập</p>
           <input id='user-input'placeholder='dat512'/>
           <p id='ip-label'>Địa chỉ IP</p>
           <input id='ip-input'placeholder={d.ip} onChange={(e)=>{setIP(e.target.value)}}/>
           <p id='pass-label'>Mật khẩu</p>
           <input id='pass-input' type='password' placeholder='Nhập mật khẩu'/>
           <p id='type-label'>Loại thiết bị</p>
           <select id="type-input" onChange={(e)=>{setType(e.target.value)}}>
                    <option disabled selected>{d.type}</option>
                    <option value="Kiosk">Kiosk</option>
                    <option value="Display Counter">Display Counter</option>
            </select>
           <p id='service-label'>Dịch vụ sử dụng </p>
           <Select options={options} id='service-input' isMulti
            onChange={(item)=>setSelectedOptions(item)}
            defaultValue={d.service.map(s=>s.value)}
            />
           <p id='id-label'>Mã thiết bị</p>
           <input id='id-input'placeholder={d._id}  onChange={(e)=>{setID(e.target.value)}}/>
           <Link to='/device' id ='btncancle'>Huy bỏ</Link>
      <button  id ='btnaddnew' onClick={()=>UpdateDevice(d.id)}>Cập nhật</button>
       </div>
       

      </>
     
    ))}
    
     

        

      
  
       </div>
    </>
  )
}
