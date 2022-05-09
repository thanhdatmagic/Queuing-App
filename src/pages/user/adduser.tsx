import React from 'react'
import MenuBar from '../../components/menubar'
import './user.css'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,addDoc,getDocs} from "firebase/firestore"
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const navitage=useNavigate();
  const [roles,setRoles]=useState([] as any)
  const roleCollection =collection(db,"role")
  useEffect(() =>{
    const getRole=async()=>{
      const data= await getDocs(roleCollection)
   
      setRoles(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getRole()
  },[])
  const userCollection =collection(db,'user')
  const [fullName,setFullName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [staus,setStaus]=useState('')
  const [role,setRole]=useState('')
  const [username,setUsername]=useState('')
  
  const createUser= async()=>{
    console.log('hi')
    await addDoc(userCollection,{email:email,fullname:fullName,phone:phone,role:role,status:staus,username:username})
    alert("Added")
    navitage('/user')
   }
   function Back(){
     navitage('/user')
   }
   

  console.log(roles);
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-3">
          <MenuBar/>
        </div>
        <div className="col-9">
  
          <form>
                <div className="row form-row updateuserform">
                  <div className="col-6">
                  <label className='labelmanageuserinupdate' >Quản lý tài khoản</label>
                  <label className='labelmanageuserinupdate2' >Thông tin tài khoản</label>
                  <label className='labeluseraddtitle' >Họ tên *</label>
                    <input type="text" className="form-control" placeholder="Nhập họ tên"  onChange={(e)=>{setFullName(e.target.value)}}/>
                    <label className='labeluseraddtitle'>Số điện thoại *</label>
                    <input type="text" className="form-control" placeholder="Nhập số điện thoại" onChange={(e)=>{setPhone(e.target.value)}}/>
                    <label className='labeluseraddtitle'>Email *</label>
                    <input type="text" className="form-control" placeholder="Nhập email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label className='labeluseraddtitle'>Vai trò *</label>
                    <select id="inputState" className="form-control"  onChange={(e)=>{setRole(e.target.value)}}>
                      <option defaultValue="Updating" >Vai trò</option>
                      {roles.map(role=>(
                      <option key={role.id} value={role.name}>{role.name}</option>
                    ))}
                    </select>
                  </div>
                  <div className="col-6">
                  <label className='labeluseraddtitle'>Tên đăng nhập * </label>
                    <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label className='labeluseraddtitle' >Mật khẩu *</label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu"/>
                    <label className='labeluseraddtitle'>Nhập lại mật khẩu *</label>
                    <input type="password" className="form-control" placeholder="Nhập lại mật khẩu"/>
                    <label className='labeluseraddtitle'>Tình trạng *</label>
                    <select id="inputState" className="form-control" onChange={(e)=>{setStaus(e.target.value)}} >
                      <option defaultValue="Updating" >Tình Trạng</option>
                      <option value='Hoạt động'>Hoạt Động</option>
                      <option value='Ngưng hoạt động'>Ngưng Hoạt Động</option>
                    </select>

                  </div>
               
                </div>
        </form>
        <button id='btncancle' onClick={Back} >Hủy bỏ</button>
                  <button onClick={createUser} id ='btnaddnew'> Thêm </button>
          </div>
              

      </div>

    </div>
  

    </>
    
   
  )
}
