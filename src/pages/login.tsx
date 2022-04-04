
import { Button,Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../css/login.css'
import logo from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titlepage.png'


export default function Login() {
 
  return (
      <>
      <div className='loginpage'>
        <img src={logo} className='logo'/>
        <p className='username'  >Tên đăng nhập *</p>
        <input className="userinput"type="text"/>
        <p className='password'>Mật khẩu *</p>
        <input className='ipassword'type="password" />
        <p className='fpass'>Quên mật khẩu</p>
        <button className="btnlogin">Đăng nhập</button>
    </div>
    <div className="infopage">
    <img src={titlepage} className='titlepage'/>
    </div>
      </>
    

    
    
  )
}
