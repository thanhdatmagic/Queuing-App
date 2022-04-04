import React from 'react'
import MenuBar from '../components/menubar'
import '../css/device.css'

export default function device() {
  return (
    <>
    <div className="device">
        <MenuBar/>
        <div className="link">
        <h4 id='link1'>Thiết bi --</h4> <h4 id='link2'>Danh sách thiết bị</h4>
        </div>
      
        <h3 >Danh sách thiết bị</h3>
        <div className="status-activity">
          <p id='statusactivity'>Trạng thái hoạt động</p>
          <select id='activityoption' >
            <option value="#">Tất Cả</option>
            <option value="#">Hoạt Động</option>
            <option value="#">Ngưng Hoạt Động</option>
         
          </select>
        </div>
        <div className="status-connection">
        <p id='statusconnect'>Trạng thái kết nối</p>
          <select id='connectoption' >
            <option value="#">Tất Cả</option>
            <option value="#">Kết Nối</option>
            <option value="#">Mất Kết Nối</option>
         
          </select>
        </div>
        <div className="search">
          <p id='keyword'>Từ khóa</p>
          <input placeholder="Nhập từ khóa" id='inputkeyword'/>
        </div>
        <div className="device-data">
            <table>
              <tr>
                <th>Mã Thiết Bị</th>
                <th>Tên Thiết Bị</th>
                <th>Địa chỉ IP</th>
                <th>Trạng thái hoat động</th>
                <th>Trạng thái kết nối</th>
                <th>Dịch vụ sử dụng</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>Ngưng hoạt động</td>
                <td>Mất kết nối</td>
                <td>Kham tim mạch khám mắt <br/><a href="#">Xem thêm</a></td>
                <td><a href="#">Chi tiết</a></td>
                <td><a href="#">Chi tiết</a></td>
              </tr>
            </table>
        </div>
        <div className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladd'>Thêm thiết bị</p>
        </div>


    </div>
    </>
  )
}
