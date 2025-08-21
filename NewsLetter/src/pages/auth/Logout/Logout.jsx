import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    toast.success('Logged out successfully')
    navigate('/login')
  }
  return (
   <button
      onClick={handleLogout}
      className="hover:text-blue-600"
    >
        Logout
    </button>
  )
}

export default Logout