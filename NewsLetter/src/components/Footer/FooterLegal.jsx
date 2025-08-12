import React from "react";

const legalLinks = [
  { name: "Terms", href: "#terms" },
  { name: "Privacy", href: "#privacy" },
  { name: "Cookie Policy", href: "#cookie" },
  { name: "DSAR Form", href: "#dsar" },
  { name: "Support", href: "#support" },
  { name: "Sitemap", href: "#sitemap" },
];

const FooterLegal = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-end gap-7 text-sm text-gray-700 dark:text-gray-300">
      {legalLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className="hover:text-[#5454e6] transition"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default FooterLegal;
