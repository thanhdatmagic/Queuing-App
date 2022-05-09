import React from 'react'
import MenuBar from '../../components/menubar'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,setDoc,addDoc,doc} from "firebase/firestore"
import {useNavigate} from 'react-router-dom'



export default function AddService() {
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [id,setID]=useState('')
    const [desc,setDesc]=useState('')
    console.log(name)
    const ServiceCollection =collection(db,"service")
    const  createNew= async ()=>{
         await addDoc(ServiceCollection,{desc:desc,name:name,status:true,_id:id})
        alert('add') 
        navigate('/service') 
       }
         
  return (
    <div>
        <div className="container  ">
        <div className=" row addservice">
            <div className="col-3">
            <MenuBar/>  
            </div>
            <div className="col-8 contentaddservice ">
            <h3 className='labelmanageservice'>Quản lý dịch vụ</h3> 
            <div className="row add ">
            <form className="row g-3  ">
                        <div className="col-md-6 ">
                            <label  className="form-label labelpositionservice"placeholder="Mã dịch vụ">Mã dịch vụ *</label>
                            <input type="text" className="form-control" onChange={(e)=>{setID(e.target.value)}} />
                            <label className="form-label labelpositionservice"placeholder="Tên dịch vụ">Tên dịch vụ *</label>
                            <input type="text" className="form-control"onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="col-md-6">
                        <label className="form-label labelpositionservice">Mô tả *</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Mô tả dịch vụ" onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                        </div>
                        <label className="labelrulenumberservice">
                            Quy tắc cấp số
                        </label>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label labelrulenumberserviceoption" >
                                    Tăng tự động
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label labelrulenumberserviceoption">
                                    Prefix
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label labelrulenumberserviceoption" >
                                    Surfix
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label labelrulenumberserviceoption" >
                                    Reset mỗi ngày
                                </label>
                                </div>
                                
                       
                        </form>
                        <button className="btn btn-primary btnaddservice " onClick={createNew}>Thêm dịch vụ</button>
                                <button className="btn btn-primary btncancelservice " >Hủy bỏ</button>
            </div>
            <div className="col-12">
                         
             </div>
            </div>
        </div>



        </div>

    </div>
  )
}
