import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
  { icon: <FaTiktok />, href: "#", label: "TikTok" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaXTwitter />, href: "#", label: "X" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
];

const FooterSocials = () => {
  return (
    <div className="flex gap-7 mb-4 text-2xl">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          aria-label={link.label}
          className="text-gray-700 dark:text-gray-300 hover:text-[#5454e6] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
