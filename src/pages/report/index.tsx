import React from 'react'
import MenuBar from '../../components/menubar'
import TableData from './table'
import './report.css'
import {Link} from 'react-router-dom'
import Noti from '../../components/smallprofile'
export default function index() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-3"><MenuBar/></div>
                <div className="col-8">
                    <div className="picktimeinreport">
                    <label id='labelpicktimeinreport0'>Lập báo cáo</label>
                    <label id='labelpicktimeinreport'>Chọn thời gian</label>
                    <br />
                    <input type="date" id='inputpicktimeinreport'/>
                    <input type="date" />
                    </div>
                    

                    <TableData/>
                </div>
                <Link to='/report' className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladddevice'>Tải báo cáo</p>
        </Link>
            </div>
        </div>
        <Noti/>
    </div>
  )
}
