import React from "react";

const FooterNewsLetter = () => {
  return (
    <div className="flex-1 max-w-lg">
      <h2 className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-6 text-center text-sm font-bold sm:text-base px-2">
        Get TechPulse updates delivered directly to your inbox.
      </h2>
      <form className="flex w-[60%] mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-5 py-3 rounded-l-lg border-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-lg focus:outline-none"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-[#5454e6] text-white text-lg font-semibold rounded-r-lg hover:bg-[#3d3dbb] transition"
        >
          Subscribe
        </button>
      </form>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center text-sm px-2">
        By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.
      </p>
    </div>
  );
};

export default FooterNewsLetter;
