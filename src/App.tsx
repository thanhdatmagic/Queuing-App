import './App.css';
import Login from './pages/login'
import Profile from './pages/profile'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import Forgot from './pages/forgotpass'
import Forgot2 from './pages/forgotpass2'
import Device from './pages/device'
import AddDevice from './pages/add-device'
import DetailDevice from './pages/device-detail'
import UpdateDevice from './pages/update-device'
import Service from './pages/service/service'
import AddService from './pages/service/add-service'
import Number from './pages/number/index'
import AddNumber from  './pages/number/addnumber'
import Dashboard from './pages/dashboard'
import User from './pages/user/index'
import AddUser from './pages/user/adduser'
import UpdateService from   './pages/service/update'
import Detailnumber from './pages/number/detailnumber'
import UpdateUser from './pages/user/update'
import Role from './pages/role/index'
import AddRole from './pages/role/addrole'
import UpdateRole from './pages/role/updaterole'
import DetailService from './pages/service/service-detail'
import Report from './pages/report/index'
import History from './pages/hisory/index'


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/forgot2' element={<Forgot2/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/history' element={<History/>}/>
        
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/device' element={<Device/>}/>
        <Route path='/device/:id/update' element={<UpdateDevice/>}/>
        <Route path='/device/:id' element={<DetailDevice/>}/>
        <Route path='/device/add' element={<AddDevice/>}/>
        <Route path='/service/' element={<Service/>}/>
        <Route path='/service/add' element={<AddService/>}/>
        <Route path='/service/:id/update' element={<UpdateService/>}/>
        <Route path='/number' element={<Number/>}/>
        <Route path='/number/:id' element={<Detailnumber/>}/>
        <Route path='/number/add' element={<AddNumber/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path ='/user' element={<User/>}/>
        <Route path='/user/add' element={<AddUser/>}/>
        <Route path='/user/:id/update' element={<UpdateUser/>}/>
        <Route path='/role' element={<Role/>}/>
        <Route path='/role/add' element={<AddRole/>}/>
        <Route path='/role/:id/update' element={<UpdateRole/>}/>
        <Route path ='/service/:id' element={<DetailService/>}/>
        <Route path='report' element={<Report/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
