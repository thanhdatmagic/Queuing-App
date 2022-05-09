import React from 'react'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,getDocs} from "firebase/firestore"
import {Link} from 'react-router-dom'

export default function TableUser(props) {
console.log(props)
const role=props.role
const search=props.search



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
 
  return (
    <div>
        <table className="table table-striped table-hover table-warning tablenumber">
        <thead>
          <tr>
            <th scope="col">Tên đăng nhập</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Vai trò</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái hoạt động</th>
            <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user=>user.role.includes(role)).filter(user=>user.fullname.toLowerCase().includes(search)).map((user)=>{
              return (
                <>
              
                <tr>
              <th scope="row">{user.username}</th>
              <td>{user.fullname}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td><Link to={`/user/${user.id}/update`} className='linktodetailuser'>Chi tiết</Link></td>
            </tr>   
            </>
              )
          

})}
            
        </tbody>
      </table>
    </div>
  )
}
