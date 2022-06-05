import React from 'react'
import {useState,useEffect} from 'react'
import {db} from '../../firebase'
import {collection,getDocs} from "firebase/firestore"
import {Link} from 'react-router-dom'


export default function TableRole(searchvalue: { props: any }) {
  const value=searchvalue.props

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


  // user size
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
  const test=users.map((d: { role: any })=>(d.role))

  return (
    <div>
        <table className="table table-striped table-hover table-warning tablenumberintable">
        <thead>
          <tr>
            <th scope="col">Tên vai trò </th>
            <th scope="col">Số người dùng</th>
            <th scope="col-8">Mô tả</th>
            <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>
          {roles.filter((role: { name: string })=>role.name.toLowerCase().includes(value)).map((role: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; id: any })=>{
              return (
                <>
              
                <tr>
              <th scope="row">{role.name}</th>
              <td>{
             test.filter((t: any)=>t==role.name).length
                }</td>
              <td>{role.desc}</td>
              <td><Link to={`/role/${role.id}/update`} className='positionlinktiupdate'>Cập nhật</Link></td>
            </tr>   
            </>
              )
})}
           
        </tbody>
      </table>
    </div>
  )
}
