import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { handleGoogleCallback, loginWithGoogle } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

const Google_Button = () => {
  const navigate = useNavigate()
  const handleGoogleLogin = async () => {
    try{
      const url = await loginWithGoogle()
      if (url){
        window.open(url, "_self");
      }
      const data = await handleGoogleCallback()
      localStorage.setItem("token",data.token)
      localStorage.setItem("user",JSON.stringify(data,user))
      navigate("/posts")
      // if (url) {
      //   window.open(url, "_self");
      // }
    } catch(err){
      console.error("Google login failed:", err);
      alert("Failed to login with Google. Please try again.");
    }
  }
  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition"
    >
      <FcGoogle size={20} />
      <p className="text-sm ">Continue with Google</p>
    </button>
  );
};

export default Google_Button;
