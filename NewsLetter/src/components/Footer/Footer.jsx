import React from "react";
import FooterTitle from "./FooterTitle";
import FooterDivider from "./FooterDivider";
import FooterSocials from "./FooterSocials";
import FooterLegal from "./FooterLegal";
// import FooterNewsletter from "./FooterNewsLetter";
import FooterNewsLetter from "./FooterNewsLetter";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 
                 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 
                 pt-10 pb-6 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700"
    >
      <FooterTitle />
      <FooterDivider />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <FooterNewsLetter/>

        <div className="flex-1 flex flex-col items-center md:items-end w-full">
          <FooterSocials />
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center md:text-right">
            © {new Date().getFullYear()} TechPulse, Inc. All rights reserved.
          </div>
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
