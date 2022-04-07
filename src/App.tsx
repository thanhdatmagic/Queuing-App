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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/forgot2' element={<Forgot2/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/device' element={<Device/>}/>
        <Route path='/device/update' element={<UpdateDevice/>}/>
        <Route path='/device/detail' element={<DetailDevice/>}/>
        <Route path='/device/add' element={<AddDevice/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
