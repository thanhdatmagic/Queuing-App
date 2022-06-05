import React from 'react'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,getDocs} from "firebase/firestore"
import {Link} from 'react-router-dom'



export default function Table(search) {
  const searchvalue=search.props
  console.log(searchvalue);

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
  return (
    <div>
        <table className="table table-striped table-hover table-warning tablenumber">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Ten Khach Hang</th>
            <th scope="col">Ten Dich Vu</th>
            <th scope="col">Thoi gian cap</th>
            <th scope="col">Han su dung</th>
            <th scope="col">Trang thai</th>
            <th scope="col">Nguon cap</th>
            <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>
          {numbers.filter(number=>number.service.toLowerCase().includes(searchvalue)).map((number)=>(
            <>
              
                <tr>
              <th scope="row">{number.number}</th>
              <td>Nguyen Sai Thanh Dat</td>
              <td>{number.service}</td>
              <td>Hôm nay</td>
              <td>Hôm nay</td>
              <td>{number.status}</td>
              <td>Kiosk</td>
              <Link to={`/number/${number.id}`} id='linkdetailnumber'> <td>Chi tiet</td></Link>
            </tr>
           
                  
            </>
          ))}
            
        </tbody>
      </table>
    </div>
  )
}
