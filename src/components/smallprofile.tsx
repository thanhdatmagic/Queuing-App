import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/smallprofile.css'

export default function SmallProfile() {
    const navitage=useNavigate()
    function Route(){
        navitage('/profile')
    }
  return (
    <div className='smallprofile' onClick={Route}>
           
                    <img className='smallimageprofile' src='https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg'/>
                       <p className='smallprofilehello'>Xin Chao</p>
                       <p className='smallprofilefullname'>Nguyen Sai Thanh Dat</p> 
    </div>
  )
}
