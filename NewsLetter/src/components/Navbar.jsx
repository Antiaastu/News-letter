import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseDarkMode from "../hooks/UseDarkMode";
import { FaBars, FaTimes } from "react-icons/fa"; // Google icon
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [isOpen]);
  return (
    <nav className="sticky top-0 shadow-md py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900">
      <Link to="/" className="text-xl font-bold text-blue-600">
        📰TechPulse
      </Link>
      <div className="hidden md:flex items-center space-x-4 md:text-base">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/login" className="hover:text-blue-600">
          Login
        </Link>
        <Link to="/register" className="hover:text-blue-600">
          Register
        </Link>
        <UseDarkMode />
        {/* 
        <Link to="/profile">Profile</Link> */}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700 dark:text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu />
      )}
    </nav>
  );
};

export default Navbar;
