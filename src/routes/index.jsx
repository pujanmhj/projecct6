import React, { useEffect, useState } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Booking from '../pages/Booking'
import Contact from '../pages/Contact'
import Dashboard from '../pages/admin/dashboard'
import AddData from '../pages/admin/AddData'
import PropertyList from '../pages/admin/PropertyList'
import Udashboard from '../pages/userPage/udashboard'
import Ubooking from '../pages/userPage/ubooking'
import Uprofile from '../pages/userPage/profile'
import Edit from '../pages/admin/Edit'
import { getLoggedInUserRole } from '../utils/helpers/getLoggedInUserRole'

 function Index() {
  const location = useLocation();
  const [role, setRole] = useState();
  console.log(typeof(role))

  useEffect(()=>{
    setRole(getLoggedInUserRole);
  },[location.pathname])
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/booking' element={<Booking/>}/> 
            <Route path='/contact' element={<Contact/>}/> 
            <Route path='/about' element={<About/>}/> 
            <Route path='/dashboard' element={role === '0' ? <Dashboard/> : role=== '1' ?  <Udashboard/> : <Home/>}/>
            <Route path='/ubooking' element={<Ubooking/>}/> 
            <Route path='/uprofile' element={<Uprofile/>}/> 
            <Route path='/propertyList' element={<PropertyList/>}/> 
            <Route path='/adddata' element={<AddData/>}/>
            <Route path='/edit' element={<Edit/>}/> 
        </Routes>
    </div>
  )
}
export default Index