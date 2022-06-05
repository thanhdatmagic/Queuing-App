import React from 'react'
import MenuBar from '../../components/menubar'
import TableUser from './table'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,addDoc,getDocs} from "firebase/firestore"
import {Link} from 'react-router-dom'
import Noti from '../../components/smallprofile'


export default function Index() {
  const [roles,setRoles]=useState([] as any)
  
  const [role,setRole]=useState('')
  const [search,setSearch]=useState('')
  const roleCollection =collection(db,"role")
  useEffect(() =>{
    const getRole=async()=>{
      const data= await getDocs(roleCollection)
   
      setRoles(data.docs.map(doc =>({...doc.data(),id:doc.id})))
    }
    getRole()
  },[])
  return (
    <div className="container">

      <div className="row">
        <div className="col-3">
        <MenuBar/>
        </div>
        <div className="col-8 numberlist">
        <label id='mainlabelnamelist'>Danh sách người dùng</label>
          <label id='labelnameroleinuser'>Tên vai trò</label>
          <br />
          <select id="inputnameroleinuser"   onChange={(e)=>{setRole(e.target.value)}}>
                      <option defaultValue="Updating" >Vai trò</option>
                      {roles.map(role=>(
                      <option key={role.id} value={role.name}>{role.name}</option>
                    ))}
                    </select>
          <input type="text" placeholder="Nhập từ khóa" id='inputsearchuser'  onChange={(e)=>{setSearch(e.target.value)}} />
        <TableUser role={role} search={search} />
        </div>
        <Link to='/user/add' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladddevice'>Thêm người dùng</p>
        </Link>

      </div>
      <Noti/>
       
       
        

    </div>
  )
}
