import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login_Button from "./Login_Button";
import Divider from "../../../components/Divider";
import Google_Button from "../../../components/Google_Button";
import Register_Link from "./Register_Link";
import Email_Field from "../../../components/Email_Field";
import Password_Field from "../../../components/Password_Field";
import Forget_Password from "./Forget_Password";
import { login } from "../../../services/authServices";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await login(email, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      navigate("/posts");
    } catch (err) {
      console.log(err)
      if (err.error) {
        setError(err.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
    // console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-900 pt-6 flex-grow mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-6 py-6 w-80 bg-[#f5f1f1] dark:bg-gray-700 shadow-2xl rounded-xl"
      >
        <h1 className="font-bold text-lg text-center text-gray-800 dark:text-white">
          Login to your account
        </h1>
        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        {/* Email */}
        <Email_Field
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <Password_Field
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Forget_Password />

        <Login_Button loading={loading} />
        
        <Divider />
        <Google_Button />
        <Register_Link />
      </form>
    </div>
  );
};

export default Login;
