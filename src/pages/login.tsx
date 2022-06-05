import {useState,useRef} from 'react'
import '../css/login.css'
import logo from '../asset/image/logoatla.png'
import titlepage from '../asset/image/titlepage.png'
import { Link , useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase';
import {useForm} from 'react-hook-form';

type Login = {
  email:string
  password:string
}


export default function Login() {

  const [email,setUser]=useState('')
  const [password,setPassword]=useState('')
  const [passwordShown, setPasswordShown] = useState(false);



  const location=useNavigate()
 

 
  const Login =async()=>{
    if (!email){
      alert('Không được bỏ trống tên đăng nhập')
      return
    }
    if (!password){
      alert('Không được bỏ trống mật khẩu')
      return
    }
    else{
      
    try{ 
      const user= await signInWithEmailAndPassword(
          auth,
          email,
          password,  
      )
      location('/profile')
    }
    catch{
      alert('Sai thông tin tài khoản')
    }

    }
}
  return (
      <>
      <form >
      <div id='loginpage'>
        <img src={logo} id='logo'/>
        <p id='username'  >Tên đăng nhập *</p>
        <input id="userinput" type="text"  onChange={(e) => setUser(e.target.value)}/>
      
        <p id='password'>Mật khẩu *</p>
        <input id='ipassword' type={passwordShown ? "text" : "password"}  onChange={(e) => setPassword(e.target.value)}/>
    
        <Link to='/forgot'id='fpass'>Quên mật khẩu</Link>
        
       
    </div>
    <button type="button" className="btn btn-warning tlogin" onClick={Login}>Đăng nhập</button>
    <i className="fa-solid fa-eye iconforgotpass" onClick={()=>setPasswordShown(!passwordShown)}></i>
    <div id="infopage">
    <img src={titlepage} id='titlepage'/>
    </div>

      </form>
      
      </>
  )
}
