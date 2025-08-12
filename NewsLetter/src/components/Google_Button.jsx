import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Google_Button = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition"
    >
      <FcGoogle size={20} />
      <p className="text-sm ">Continue with Google</p>
    </button>
  );
};

export default Google_Button;
