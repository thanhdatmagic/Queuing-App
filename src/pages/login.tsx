import {useState} from 'react'
import '../css/login.css'
import logo from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titlepage.png'
import { Link , useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import profile from './profile';


export default function Login() {
  const [email,setUser]=useState('')
  const [password,setPassword]=useState('')
  const location=useNavigate()
  const Login =async()=>{
    try{ 
      const user= await signInWithEmailAndPassword(
          auth,
          email,
          password,  
      )
      location('/profile')
    }
    catch{
      alert('Wrong User')
    }
}
  return (
      <>
      <div id='loginpage'>
        <img src={logo} id='logo'/>
        <p id='username'  >Tên đăng nhập *</p>
        <input id="userinput" type="text"  onChange={(e) => setUser(e.target.value)}/>
        <p id='password'>Mật khẩu *</p>
        <input id='ipassword' type="password"  onChange={(e) => setPassword(e.target.value)}/>
        <Link to='/forgot'id='fpass'>Quên mật khẩu</Link>
        
       
    </div>
    <button type="button" className="btn btn-warning tlogin" onClick={Login}>Đăng nhập</button>
    <div id="infopage">
    <img src={titlepage} id='titlepage'/>
    </div>
      </>
  )
}
