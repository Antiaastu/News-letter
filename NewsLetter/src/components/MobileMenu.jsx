import React from 'react'
import { Link } from "react-router-dom";
import UseDarkMode from '../hooks/UseDarkMode'

const MobileMenu = () => {
  return (
    <div className="absolute top-15 left-0 w-full bg-gray-200 dark:bg-gray-800 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-lg text-gray-800 dark:text-white hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-lg text-gray-800 dark:text-white hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-lg text-gray-800 dark:text-white hover:text-blue-600"
            >
              Register
            </Link>
            <UseDarkMode />
          </div>
        </div>
  )
}

export default MobileMenu