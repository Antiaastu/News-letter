import React from "react";
import { Link } from "react-router-dom";
import UseDarkMode from "../hooks/UseDarkMode";
const Navbar = () => {
  return (
    <nav className='shadow-md py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900'>
      <Link to="/" className="text-xl font-bold text-blue-600">
        📰TechPulse
      </Link>
      <div className="text-x-4 space-x-4 md:text-base">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <UseDarkMode />
        {/* 
        <Link to="/profile">Profile</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
