import React from 'react'
import './number.css'
import { useLocation,useNavigate } from 'react-router-dom'
interface stateType {
    from: { pathname: string }
 }
 

export default function Popup() {
    const location = useLocation() as any;
    
 
    console.log(location)
    
    const navigate=useNavigate()
    function back(){
        navigate('/number')
    };
    
  return (  
    <div className="Popup-background">
        <div className="table-popup">
            <a id='close-popup' onClick={back}>X</a>
            <p>Số thứ tự được cấp</p>
            <p id='stt-popup'>{location.state.number}</p>
            <p id='service-popup'>DV: {location.state.service} tại quầy số 1</p>
            <div className="table-popup-time">
                <p>Thời gian cấp: 18/5/2022</p>
                <p>Hạn sử dụng: 18/5/2022</p>

            </div>

        </div>
     

    </div>
  )
}
