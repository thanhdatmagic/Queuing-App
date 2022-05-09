import React from 'react'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,getDocs,updateDoc,doc} from "firebase/firestore"
import { useParams } from 'react-router-dom'
import MenuBar from '../../components/menubar'
import { useNavigate } from 'react-router-dom'
import './roel.css'

export default function UpdateRole() {
  const navigate=useNavigate()


  const [roles,setRoles]=useState([] as any)
  const roleCollection =collection(db,"role")
  useEffect(() =>{
    const getRole=async()=>{
      const data= await getDocs(roleCollection)
   
      setRoles(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getRole()
  },[])
  const {id}=useParams()
  const detail=roles.filter(d=>d.id===id)
  const [name,setName]=useState('')
  const [desc,setDesc]=useState('')
  const UpdateRole =async(id)=>{
    const roleDoc=doc(db,'role',id)
    const newRole={name:name,desc:desc}
    await updateDoc(roleDoc,newRole)
    alert('ok')
    navigate('/role')
  }
  function Back(){
    navigate('/role')
  }

  return (
    <div>
      {detail.map(d=>(
        <>
               <div className="container">
        <div className="row">
          <div className="col-3"><MenuBar/></div>
          <div className="col-7">
                <div className="row">
                  <div className="col-5 ">
                    <label className='labellistrole'>Danh sách vai trò</label>
                    <br/>
                    <label className='labelinforole'>Thông tin vai trò</label>
                    <br />
                    <label className='labelnamerole'>Tên vai trò *</label>
                    <input type="text" className="form-contro inputlabelname" id="exampleFormControlInput1" placeholder={d.name} onChange={(e)=>setName(e.target.value)}/>
                    <br />
                    <label className='labelnamerole'>Mô tả</label>
                    <textarea className="form-control inputlabelname descrole"  id="exampleFormControlTextarea1"  onChange={(e)=>setDesc(e.target.value)}  placeholder={d.desc}/>
                  
                  </div>
                  <label id='labeldivefeature'>Phân quyền chức năng *</label>
                          <div className="col-5 rolefeatureoption">
                          <div className="select-op">
                          <label className='addroleright'>Nhóm chức năng A</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Tất cả</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Chức năng X</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Chức năng Y</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Chức năng Z</label>
                          <br />
                          <br />
                          <label className='addroleright'>Nhóm chức năng B</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Tất cả</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Chức năng X</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Chức năng Y</label>
                          <br />
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label>Chức năng Z</label>
                          </div>
                    
                    </div>
                
                </div> 
                <button type="button" className="btn btn-warning addNumber postioninuprole" onClick={()=>UpdateRole(d.id)}>Cập nhật</button>
                <button type="button" className="btn btn-warning cancelNumber postioninuprole" onClick={Back}>Hủy bỏ</button>

          </div>
        </div>
      </div>
        </>
      ))}
    </div>
  )
}
