import React from 'react'
import { Link } from 'react-router-dom'
const Login_Link = () => {
  return (
    <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-500 hover:underline">
        Login
      </Link>
    </p>
  )
}

export default Login_Link