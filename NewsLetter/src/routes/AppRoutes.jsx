import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from '../pages/user/Landing/Landing'
import Login from '../pages/auth/Login/Login'
import SignUp from '../pages/auth/Signup/SignUp'
import AllPosts from '../pages/user/Posts/AllPosts'
import PostDetails from '../pages/user/Posts/PostDetails/PostDetails'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  )
}

export default AppRoutes