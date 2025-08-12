import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <p className="text-5xl text-center mt-16">📰</p>
      <h1 className="text-3xl text-center font-semibold py-6">
        The Daily Bite by TechPulse
      </h1>
      <p className="max-w-xl mx-auto text-gray-600 mb-6 sm:text-center">
        One of the fastest growing tech newsletters published by TechPulse
        with 110,000+ AI professionals, engineers, enthusiasts, and creators.
      </p>
      <div className="flex justify-center">
        <Link to="/register" className="border-2 border-blue-600 rounded-md px-5 py-2 mb-6 bg-blue-600 text-white">Get Started</Link>
      </div>
    </div>
  );
};

export default Hero;