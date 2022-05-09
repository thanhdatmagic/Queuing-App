import React from 'react'
import MenuBar from '../../components/menubar'
import './number.css'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,addDoc,getDocs} from "firebase/firestore"
import { useNavigate } from 'react-router-dom';



export default function Addnumber() {
    const navitage=useNavigate();
    
    const [numbers,setNumber] = useState([] as any)
    useEffect(() =>{
        const getNumber=async()=>{
          const data= await getDocs(numbersColection)
          console.log(data)
          setNumber(data.docs.map(doc =>({...doc.data(),id:doc.id})))
        }
        getNumber()
      },[])
      console.log(numbers)
      const maxNumber=numbers.map((i)=>{
          return i.number
      })
      const max=Math.max(...maxNumber)

      function Back(){
        navitage('/number')
      }
    const [service,setService] = useState('')
    const [services,setServices] = useState([] as any)
    const numbersColection =collection(db,"number")
    const ServicesCollection =collection(db,"service")
    useEffect(() =>{
      const getServices=async()=>{
        const data= await getDocs(ServicesCollection)
        console.log(data)
        setServices(data.docs.map(doc =>({...doc.data(),id:doc.id})))
      }
      getServices()
    },[])
    const createNumber= async ()=>{
        await addDoc(numbersColection,{number:max+1,service:service,status:'hoat dong',src:'Kiosk'})
        alert(`So thu tu dc cap: ${max+1}, DV:${service} tai quay 1` )
        navitage('/number')
       }
  return (
    <div className="container addnumberpage">
        <div className="row">
            <div className="col-3">
            <MenuBar/>
            </div>
            <div className="col-10 newnumberarea">
                <p id='labelnewnumber'>Cấp số mới</p>
                <p id='descnewnumber'>Dịch vụ khách hàng lựa chọn</p>
                
                <select id='serviceseletnumber'  onChange={(e)=>{setService(e.target.value)}}>
                    <option disabled selected>Loại dich vu</option>
                    {services.map(s=>(
                      <option value={s.name}>{s.name}</option>
                    ))}
            </select>
            <button type="button" className="btn btn-warning addNumber" onClick={createNumber}>In số</button>
            <button type="button" className="btn btn-warning cancelNumber" onClick={Back}>Hủy bỏ</button>
            
            </div>

        </div>

    </div>
  )
}
