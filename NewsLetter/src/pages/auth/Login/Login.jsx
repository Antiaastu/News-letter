import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login_Button from "./Login_Button";
import Divider from "../../../components/Divider";
import Google_Button from "../../../components/Google_Button";
import Register_Link from "./Register_Link";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-6 py-6 w-80 bg-[#f5f1f1] dark:bg-gray-700 shadow-2xl rounded-xl"
      >
        <h1 className="font-bold text-lg text-center text-gray-800 dark:text-white">
          Login to your account
        </h1>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-bold placeholder:text-sm"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-bold placeholder:text-sm"
          />
          <a
            href="#"
            className="text-xs text-blue-500 hover:underline mt-1 self-end"
          >
            Forgot password?
          </a>
        </div>

        <Login_Button />
        <Divider />
        <Google_Button />
        <Register_Link />
      </form>
    </div>
  );
};

export default Login;
