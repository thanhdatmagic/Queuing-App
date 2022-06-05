import React from 'react'
import MenuBar from '../../components/menubar'
import './service.css'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {Link} from 'react-router-dom'
import {collection,getDocs} from "firebase/firestore"
import Noti from '../../components/smallprofile'

export default function Service() {
  const [services,setServices] = useState([] as any)
  const [search,setSearch]=useState('')
  const devicesCollection =collection(db,"service")
  useEffect(() =>{
    const getServices=async()=>{
      const data= await getDocs(devicesCollection)
      console.log(data)
      setServices(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getServices()
  },[])
  console.log(services)
  
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-3">
        <MenuBar/>
        </div>
        <div className="col-8">
        <div className="link">
       <label className='mainlabelservicemange'>Quản lý dịch vụ</label>
        </div>
      
    
        <div className="status-activity">
          <p id='statusactivity'>Trạng thái hoạt động</p>
          <select id='activityoption' >
            <option value="#">Tất Cả</option>
            <option value='Hoạt động'>Hoạt Động</option>
            <option value="#">Ngưng Hoạt Động</option>
         
          </select>
        </div>
        <div className="status-connection">
        <p id='statusconnect'>Chọn thời gian</p>
         <input id='datein' type="date"/>
         <input id='dateout'type="date"/>
        </div>
        <div className="search">
          <p id='keyword'>Từ khóa</p>
          <input placeholder="Nhập từ khóa" id='inputkeyword' onChange={e=>setSearch(e.target.value)}/>
        </div>
        <div id="service-data">
        <table className="table table-striped table-hover table-warning tableservice ">
        <thead>
          <tr>
            <th scope="col">Mã dịch vụ</th>
            <th scope="col">Tên dịch vụ</th>
            <th scope="col">Mô tả dịch vụ</th>
            <th scope="col">Trạng thái hoạt động</th>
            <th scope="col">  </th>
            <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>
          {services.filter(service=>service.name.toLowerCase().includes(search)).map((serivce)=>{
              return (
                <>
              
                <tr>
              <th scope="row">{serivce._id}</th>
              <td>{serivce.name}</td>
              <td>{serivce.desc}</td>
              <td>Hoạt động</td>
              <td><Link to={`/service/${serivce.id}/update`} className='serviceupdatedetaillabel'>Cập nhật</Link></td>
              <td><Link to={`/service/${serivce.id}`} className='serviceupdatedetaillabel'>Chi tiêt</Link></td>
            </tr>   
            </>
              )
          

})}
            
        </tbody>
      </table>
        </div>

        </div>
      </div>
        
        
        <Link to='/service/add' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladddevice'>Thêm dịch vụ</p>
        </Link>


    </div>
    <Noti/>
    </>
  )
}
