import React from 'react'
import MenuBar from '../../components/menubar'
import {useParams,Link} from 'react-router-dom'
import './number.css'
import {db} from '../../firebase'
import {collection,doc,getDocs} from "firebase/firestore"
import { useState,useEffect } from 'react'

export default function Detailnumber() {
    const {id}=useParams()
    console.log(id)
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
  const detail=numbers.filter(number=>number.id===id)

  return (
    <div>
        {detail.map(n=>(
            <>
                     <div className="container">
           
           <div className="row">
               <div className="col-3"><MenuBar/></div>
               <div className="col-6">
               <div className="row ">
               <label className='mainlabelprovidenumberindetail'>Quản lý cấp số</label>
                 <label id='labelnameinfonumber'>Thông tin cấp số</label>
                   <div className="col">
                   <label  className="form-label infodetailnumber ">Họ tên: Nguyen Sai Thanh Dat</label>
                   <br />
                   <label  className="form-label infodetailnumber">Tên dịch vụ: {n.service} </label>
                   <br />
                   <label  className="form-label infodetailnumber">Số thứ tự: {n.number}</label>
                   <br />
                   <label  className="form-label infodetailnumber">Thời gian cấp: 5/5/2022</label>
                   <br />
                   <label  className="form-label infodetailnumber">Thời hạn sử dụng: 5/5/2020</label>
                   </div>
                   <div className="col">
                   <label  className="form-label infodetailnumberr">Nguồn cấp:{n.src}</label>
                   <br/>
                   <label  className="form-label infodetailnumberr">Trạng thái: Đang chờ</label>
                   <br/>
                   <label  className="form-labe infodetailnumberr">Số điện thoại thoại: 0123456789</label>
                   <br/>
                   <label  className="form-label infodetailnumberr">Địa chỉ Email: dat@gmail.com</label>
                   </div>
                   </div>
                   <Link to='/number' className="add-device">
                    
                      <p id='labeladddevice'>Quay lại</p>
                    </Link>


               </div>
           </div>
       </div>
            </>
        ))}
       
    </div>
  )
}
