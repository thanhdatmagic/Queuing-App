import React from 'react'
import MenuBar from '../../components/menubar'
import TableData from './table'
import '../report/report.css'
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
                    <label id='labelpicktimeinreport0'>Nhật kí hoạt động</label>
                    <label id='labelpicktimeinreport'>Chọn thời gian</label>
                    <br />
                    <input type="date" id='inputpicktimeinreport'/>
                    <input type="date"id='inputpicktimeinreport'  />
                    </div>
                    <div className="searchinhistory">
                        <label className='searchhistorylabel'>Từ khóa</label>
                        <br />
                        <input type="text" className='inputsearchhistory' />
                    </div>
                    

                    <TableData/>
                </div>
                
            </div>
        </div>
        <Noti/>
    </div>
  )
}
