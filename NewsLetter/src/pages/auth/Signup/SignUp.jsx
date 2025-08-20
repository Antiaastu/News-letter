import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register_Button from "./Register_Button";
import Divider from "../../../components/Divider";
import Google_Button from "../../../components/Google_Button";
import Login_Link from "./Login_Link";
import Email_Field from "../../../components/Email_Field";
import Password_Field from "../../../components/Password_Field";
import { register } from "../../../services/authServices";
import Name_Field from "./Name_Field";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setLoading(true);

    try {
      const data = await register(name, email, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      toast.success("Account created successfully! 🎉");
      navigate("/posts");
    } catch (err) {
      let errorMessage = "Something went wrong!";

      if (typeof err.error === "string") {
        errorMessage = err.error;
      } else if (err.error && typeof err.error === "object") {
        const firstKey = Object.keys(err.error)[0];
        errorMessage = err.error[firstKey];
      } else if (err.message) {
        errorMessage = err.message;
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-40 flex flex-col items-center justify-center h-screen dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-6 py-6 w-80 bg-[#f5f1f1] dark:bg-gray-700 shadow-2xl rounded-xl"
      >
        <h1 className="font-bold text-lg text-center text-gray-800 dark:text-white">
          Create your account
        </h1>
        {/* Name */}
        <Name_Field
          label="Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        {/* Confirm Password */}
        <Password_Field
          label="Confirm password"
          type="password"
          placeholder="Enter your confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Register_Button loading={loading} />

        <Divider />
        <Google_Button />
        <Login_Link />
      </form>
    </div>
  );
};

export default SignUp;
