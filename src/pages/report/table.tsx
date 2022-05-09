import React from 'react'

export default function table() {
  return (
    <div>
    <table className=" table table-striped table-hover table-warning tablereportposition">
    <thead className='colortable'>
      <tr>
        <th scope="col" >Số thứ tự </th>
        <th scope="col">Tên dịch vụ</th>
        <th scope="col">Thời gian cấp</th>
        <th scope="col">Tình trạng</th>
        <th scope="col">Nguồn cấp</th>

      </tr>
    </thead>
    <tbody>
    <tr>
          <th scope="row">1</th>
          <td>Khám tim mạch</td>
           <td>5/8/2022</td>
           <td>Đang chờ</td>
           <td>Hệ thống</td>
    </tr>  
    <tr>
          <th scope="row">2</th>
          <td>Khám tim mạch</td>
           <td>5/8/2022</td>
           <td>Đang chờ</td>
           <td>Hệ thống</td>
    </tr>  
    <tr>
          <th scope="row">3</th>
          <td>Khám tim mạch</td>
           <td>5/8/2022</td>
           <td>Đang chờ</td>
           <td>Hệ thống</td>
    </tr>  
    <tr>
          <th scope="row">4</th>
          <td>Khám tim mạch</td>
           <td>5/8/2022</td>
           <td>Đang chờ</td>
           <td>Hệ thống</td>
    </tr>  
    <tr>
          <th scope="row">5</th>
          <td>Khám tim mạch</td>
           <td>5/8/2022</td>
           <td>Đang chờ</td>
           <td>Hệ thống</td>
    </tr>  
    </tbody>
  </table>
</div>
  )
}
