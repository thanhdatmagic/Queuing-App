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
  console.log(email);
  console.log(password);

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
        <input id="userinput" type="text" value={email} onChange={(e) => setUser(e.target.value)}/>
        <p id='password'>Mật khẩu *</p>
        <input id='ipassword' type="password"value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Link to='/forgot'id='fpass'>Quên mật khẩu</Link>
        <p id='tlogin' id="btnlogin" onClick={Login}>Đăng nhập</p>
    </div>
    <div id="infopage">
    <img src={titlepage} id='titlepage'/>
    </div>
      </>
    

    
    
  )
}
