import React from 'react'
import MenuBar from '../../components/menubar'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,doc,getDocs} from "firebase/firestore"
import './service.css'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


  
export default function Servicedetail() {
    const {id}=useParams()
 

    const [numbers,setNumber] = useState([] as any)
  const numbersColection =collection(db,"number")
  useEffect(() =>{
    const getNumber=async()=>{
      const data= await getDocs(numbersColection)
      console.log(data)
      setNumber(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getNumber()
  },[])
  console.log(numbers)

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

    const detail = services.filter(d=>d.id ===id)

  return (
    <div>
        {detail.map(d=>(
               <div className="container">
               <div className="row">
                   <div className="col-3">
                       <MenuBar/>
                   </div>
                   <div className="col-8 detailcontainerservice">
                       <label className="labelmanageservicedetail">Quản lý dịch vụ</label>
                           <div className="col-4 infodetailservice">
                               <label className='labelinfodetailservice'>Thông tin dịch vụ</label>
                         
                               <br />
                               <label className='labelinfodetailsingleservice'>Mã dịch vụ:</label>
                               <label className='labelinfodetailsingleservice'>{d._id}</label>
                               <br />
                               <label className='labelinfodetailsingleservice'>Tên dịch vụ:</label>
                               <label className='labelinfodetailsingleservice'>{d.name}</label>
                               <br />
                               <label className='labelinfodetailsingleservice'>Mô tả:</label>
                               <label className='labelinfodetailsingleservice'>{d.desc}</label>
   
                           </div>
                           <br />
                           <div className="col-4 infodetailservice">
                               <label className='labelinfodetailservice'>Tăng tự động:</label>
                               <br />
                               <label className='labelinfodetailsingleservice'>Prefix:</label>
                               <br />
                               <label className='labelinfodetailsingleservice'>Reset mỗi ngày:</label>
                               <br />
                               <label className='labelinfodetailsingleservice'>Mô tả:</label>
   
                           </div>
                           
                           <div className="col-6 tabledetailservice">
              
                           <table className="table table-striped table-hover table-warning tableservicenumber ">
                               
           <thead>
             <tr>
               <th scope="col">Số thứ tự</th>
               <th scope="col">Trạng thái</th>
             </tr>
           </thead>
           <tbody>
             {numbers.map((number)=>{
                 return ( 
                   <>
                   <tr>
                 <th scope="row">{number.number}</th>
                 <td>{number.status}</td>
                 
               </tr>   
               </>  )})}
           </tbody>
         </table>
         <div className="featureservicenumber">
             <label >Từ khóa</label>
             <br />
             <input placeholder="Nhập từ khóa"   />
         </div>
         
                   </div>
                   </div>
           
               </div>
           </div>

       

        ))}
            <Link to={`/service/${id}/update`} className="add-device positionfixbtnservicedetail1"> <p id='labeladddevice' >Cập nhât</p></Link>
            <Link to='/service' className="add-device positionfixbtnservicedetail"> <p id='labeladddevice'>Quay lại</p></Link>
     
    </div>
  )
}
