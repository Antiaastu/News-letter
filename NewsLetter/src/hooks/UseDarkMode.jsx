import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "../context/ThemeContext";

const UseDarkMode = () => {
  const { isDark, setIsDark } = useDarkMode();
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded-4xl hover:scale-105 cursor-pointer transition-all"
    >
      {isDark ? (
        <MoonIcon className="w-5 h-5 text-gray-900 dark:text-white" />
      ) : (
        <SunIcon className="w-5 h-5 text-gray-900 dark:text-white" />
      )}{" "}
    </button>
  );
};

export default UseDarkMode;
