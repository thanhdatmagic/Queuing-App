import React from 'react'
import MenuBar from '../../components/menubar'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,getDocs,updateDoc,doc} from "firebase/firestore"
import {useParams,useNavigate} from 'react-router-dom'



export default function UpdateService() {
    const [services,setServices] = useState([] as any)
    const [name,setName]=useState('')
    const [_id,setID]=useState('')
    const [desc,setDesc]=useState('')
    console.log(name)
  
    const {id}=useParams()
    const ServicesCollection =collection(db,"service")
    useEffect(() =>{
      const getServices=async()=>{
        const data= await getDocs(ServicesCollection)
        console.log(data)
        setServices(data.docs.map(doc =>({...doc.data(),id:doc.id})))
      }
      getServices()
    },[])

    const back=useNavigate()

    const detail=services.filter(service=>service.id===id)


    //update services
    const UpdateService =async(id)=>{
        const serviceDoc=doc(db,'service',id)
        const newService={_id:_id,name:name,desc:desc,status:true}
        await updateDoc(serviceDoc,newService)
        alert('ok')
        back('/service')
      }
    
      function Back(){
           
            back('/service')
      }
         
  return (
     <>
     {detail.map(d=>(
          <div>
          <div className="container ">
          <div className=" row addservice">
              <div className="col-3">
              <MenuBar/>  
              </div>
              
              <div className="col-8 content ">
              <label className='mainlabelservicemangeinupdate'>Quản lý dịch vụ</label>
              <div className="row add ">
              <form className="row g-3  ">
                 
                      <div className="col-md-6 ">
                              <label  className="form-label labelpositionservice">Mã dịch vụ </label>
                              <input type="text" className="form-control"placeholder={d._id} onChange={(e)=>{setID(e.target.value)}} />
                              <label className="form-label labelpositionservice"placeholder="Tên dịch vụ">Tên dịch vụ</label>
                              <input type="text" className="form-control"onChange={(e)=>{setName(e.target.value)}} placeholder={d.name}/>
                          </div>
                          <div className="col-md-6">
                          <label className="form-label labelpositionservice">Mô tả</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder={d.desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
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
                          <button className="btn btn-primary  btnaddservice" onClick={()=>UpdateService(d.id)}>Cập nhật</button>
                           <button className="btn btn-primary btncancelservice" onClick={Back} >Hủy bỏ</button>
                          
              </div>
              <div className="col-12">
                           
               </div>
              </div>
          </div>
  
  
  
          </div>
  
      </div>
     ))}
     </>
   
  )
}
