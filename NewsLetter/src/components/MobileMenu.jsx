import React from "react";
import { Link } from "react-router-dom";
import UseDarkMode from "../hooks/UseDarkMode";
import Logout from "../pages/auth/Logout/Logout";

const MobileMenu = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="absolute top-15 left-0 w-full bg-gray-200 dark:bg-gray-800 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
      <div className="flex flex-col items-center space-y-4 py-4">
        <Link
          to="/"
          className="text-lg text-gray-800 dark:text-white hover:text-blue-600"
        >
          Home
        </Link>
        {!user && (
          <>
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
          </>
        )}

        {user && (
          <>
            <Link
              to="/posts"
              className="text-lg text-gray-800 dark:text-white hover:text-blue-600"
            >
              Posts
            </Link>
            <Logout />
          </>
        )}
        <UseDarkMode />
      </div>
    </div>
  );
};

export default MobileMenu;
