import React from 'react'
import MenuBar from '../../components/menubar'

import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import {collection,addDoc,getDocs} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'



export default function AddRole() {
  const navitage=useNavigate()
  const [name,setName]=useState('')
  const [desc,setDesc]=useState('')
  const RoleCollection =collection(db,"role")

  const AddRole= async()=>{
    await addDoc(RoleCollection,{name:name,desc:desc})
    alert ('ok')
    navitage('/role')
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3"><MenuBar/></div>
          <div className="col-7">
                <div className="row">
                  <div className="col-5">
                  <label className='labellistrole'>Danh sách vai trò</label>
                    <br/>
                    <label className='labelinforole'>Thông tin vai trò</label>
                    <br />
                    <label className='labelnamerole'>Tên vai trò *</label>
                    <input type="text" className="form-control inputlabelname" id="exampleFormControlInput1" placeholder="Nhập tên vai trò" onChange={(e)=>setName(e.target.value)}/>
                    <br />
                    <label className='labelnamerole'>Mô tả</label>
                    <textarea className="form-control inputlabelname" id="exampleFormControlTextarea1"  onChange={(e)=>setDesc(e.target.value)}/>
                  
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
                <button type="button" className="btn btn-warning addNumber postioninuprole" onClick={AddRole}>Thêm</button>
            <button type="button" className="btn btn-warning cancelNumber postioninuprole">Hủy bỏ</button>

          </div>
        </div>
      </div>
    </div>
  )
}
