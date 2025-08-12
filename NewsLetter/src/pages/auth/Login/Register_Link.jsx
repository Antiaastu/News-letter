import React from "react";
import { Link } from "react-router-dom";
const Register_Link = () => {
  
  return (
    <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
      Don’t have an account?{" "}
      <Link to="/register" className="text-blue-500 hover:underline">
        Register
      </Link>
    </p>
  );
};

export default Register_Link;
