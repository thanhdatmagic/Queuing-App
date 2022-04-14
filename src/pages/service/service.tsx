import React from 'react'
import MenuBar from '../../components/menubar'
import './service.css'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,getDocs} from "firebase/firestore"


export default function service() {
  const [services,setServices] = useState([] as any)
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
    <div className="device">
        <MenuBar/>
        <div className="link">
        <h4 id='link1'>Dịch vụ</h4> <h4 id='link2'>Quản lý dịch vụ</h4>
        </div>
      
        <h3 >Quản lý dịch vụ</h3>
        <div className="status-activity">
          <p id='statusactivity'>Trạng thái hoạt động</p>
          <select id='activityoption' >
            <option value="#">Tất Cả</option>
            <option value="#">Hoạt Động</option>
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
          <input placeholder="Nhập từ khóa" id='inputkeyword'/>
        </div>
        <div id="service-data">
            <table>
              <tr>
                <th>Mã Dịch Vụ</th>
                <th>Tên Dịch vụ</th>
                <th>Mô tả</th>
                <th>Trạng thái hoat động</th>
                <th></th>
                <th></th>
              </tr>
              {services.map((service)=>{
                return(
                  <div>
                      <tr>
                        <td id='data'>KIO_0{service._id}</td>
                        <td id='data'>{service.name}</td>
                        <td id='data'>{service.desc}</td>
                        <td id='data'>Hoạt động</td>
                        <td id='data'><a href="#">Chi tiết</a></td>
                        <td id='data'><a href="#">Cập nhật</a></td>
                      </tr>

                  </div>
                )
                
              })}
              
            </table>
        </div>
        <div className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladd'>Thêm dịch vụ</p>
        </div>


    </div>
    </>
  )
}
