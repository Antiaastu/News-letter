import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from '../pages/user/Landing/Landing'
import Login from '../pages/auth/Login/Login'
import SignUp from '../pages/auth/Signup/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp/>} />
    </Routes>
  )
}

export default AppRoutes