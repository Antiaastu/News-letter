import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <p className="text-4xl sm:text-5xl text-center mt-12 dark:text-white">📰</p>
      <h1 className="text-2xl sm:text-3xl text-center font-semibold py-4 sm:py-6 dark:text-white">
        The Daily Bite by TechPulse
      </h1>
      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-6 text-center text-sm sm:text-base px-2">
        One of the fastest growing tech newsletters published by TechPulse
        with 110,000+ AI professionals, engineers, enthusiasts, and creators.
      </p>
      {!user && (<div className="flex justify-center">
        <Link
          to="/register"
          className="border-2 border-blue-600 rounded-md px-4 sm:px-5 py-2 mb-6 bg-blue-600 text-white hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Get Started
        </Link>
      </div>)}
    </div>
  );
};

export default Hero;
