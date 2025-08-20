import React from "react";

const Login_Button = ({loading}) => {
  return (
    <button
      type="submit"
      disabled={loading}  
       className={`bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200 flex justify-center items-center ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
       {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      ) : (
        "Login"
      )}
    </button>
  );
};

export default Login_Button;
