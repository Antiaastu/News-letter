import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseDarkMode from "../hooks/UseDarkMode";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import Logout from "../pages/auth/Logout/Logout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  // ✅ Listen for localStorage changes (e.g. login/logout)
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")) || null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Also listen when logout/login updates localStorage in same tab
  useEffect(() => {
    const interval = setInterval(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (JSON.stringify(storedUser) !== JSON.stringify(user)) {
        setUser(storedUser);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <nav className="sticky top-0 z-50 shadow-md py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900 mb-6">
      <Link to="/" className="text-xl font-bold text-blue-600">
        📰TechPulse
      </Link>

      <div className="hidden md:flex items-center space-x-4 md:text-base">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/posts" className="hover:text-blue-600">
          Posts
        </Link>

        {/* ✅ Show correct links depending on login state */}
        {!user ? (
          <>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        ) : (
          <Logout />
        )}

        <UseDarkMode />
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
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
