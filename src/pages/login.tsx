
import { Button,Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../css/login.css'
import logo from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titlepage.png'
import { Link } from 'react-router-dom';


export default function Login() {
 
  return (
      <>
      <div id='loginpage'>
        <img src={logo} id='logo'/>
        <p id='username'  >Tên đăng nhập *</p>
        <input id="userinput"type="text"/>
        <p id='password'>Mật khẩu *</p>
        <input id='ipassword'type="password" />
        <Link to='/forgot'id='fpass'>Quên mật khẩu</Link>
        <Link to='/profile'id="btnlogin"> <p id='tlogin' >Đăng nhập</p></Link>
    </div>
    <div id="infopage">
    <img src={titlepage} id='titlepage'/>
    </div>
      </>
    

    
    
  )
}
