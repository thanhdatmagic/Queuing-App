import React from 'react'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,getDocs,doc,updateDoc} from "firebase/firestore"
import { useParams,useNavigate } from 'react-router-dom'
import MenuBar from '../../components/menubar'


export default function UpdateUser() {
  const navitage=useNavigate()
const {id}=useParams()
const [roles,setRoles]=useState([] as any)
const roleCollection =collection(db,"role")
useEffect(() =>{
  const getRole=async()=>{
    const data= await getDocs(roleCollection)
 
    setRoles(data.docs.map(doc =>({...doc.data(),id:doc.id})))
  }
  getRole()
},[])
const [fullName,setFullName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [staus,setStaus]=useState('')
  const [role,setRole]=useState('')
  const [username,setUsername]=useState('')
const [users,setUser] = useState([] as any)
  const userCollection =collection(db,"user")
  useEffect(() =>{
    const getUser=async()=>{
      const data= await getDocs(userCollection)
      console.log(data)
      setUser(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getUser()
  },[])
  const detail=users.filter(user=>user.id === id)
  const UpdateUser =async(id)=>{
    const userDoc=doc(db,'user',id)
    const newUser={fullname:fullName,phone:phone,email:email,status:staus,role:role,username:username}
    await updateDoc(userDoc,newUser)
    alert('ok')
    navitage('/user')
  }
  function Back(){
    navitage('/user')
  }
  return (
  <>
  {detail.map(d=>(
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
                    <input type="text" className="form-control forminputupdateusersize1" placeholder={d.fullname}  onChange={(e)=>{setFullName(e.target.value)}}/>
                    <label className='labeluseraddtitle'>Số điện thoại *</label>
                    <input type="text" className="form-control forminputupdateusersize" placeholder={d.phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                    <label className='labeluseraddtitle'>Email *</label>
                    <input type="text" className="form-control forminputupdateusersize" placeholder={d.email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label className='labeluseraddtitle'>Vai trò *</label>
                    <select id="inputState" className="form-control forminputupdateusersize"  onChange={(e)=>{setRole(e.target.value)}}>
                      <option defaultValue="Updating" >{d.role}</option>
                      {roles.map(role=>(
                      <option key={role.id} value={role.name}>{role.name}</option>
                    ))}
                    </select>
                  </div>
                  <div className="col-6">
                  <label className='labeluseraddtitle' >Tên đăng nhập * </label>
                    <input type="text" className="form-control forminputupdateusersize" placeholder={d.username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label className='labeluseraddtitle' >Mật khẩu *</label>
                    <input type="password" className="form-control forminputupdateusersize" placeholder="Nhập mật khẩu"/>
                    <label className='labeluseraddtitle'>Nhập lại mật khẩu *</label>
                    <input type="password" className="form-control forminputupdateusersize" placeholder="Nhập lại mật khẩu"/>
                    <label className='labeluseraddtitle'>Tình trạng *</label>
                    <select id="inputState" className="form-control forminputupdateusersize" onChange={(e)=>{setStaus(e.target.value)}} >
                      <option defaultValue="Updating" >{d.status}</option>
                      <option value='Hoạt động'>Hoạt Động</option>
                      <option value='Ngưng hoạt động'>Ngưng Hoạt Động</option>
                    </select>

                  </div>
               
                </div>
        </form>
        <button id='btncancle' onClick={Back} >Hủy bỏ</button>
                  <button onClick={()=>UpdateUser(d.id)} id ='btnaddnew'> Cập nhật</button>
          </div>
              

      </div>

    </div>
  

    </>
  ))}
  </>
  )
}
