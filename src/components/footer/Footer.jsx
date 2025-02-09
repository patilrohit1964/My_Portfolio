import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="p-4 bg-skyblue rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 footer">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text">
        Developed by ROHIT PATIL
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 footer-contact">
        <li>
          <a href="https://github.com/patilrohit1964" className="mr-4 hover:underline md:mr-6 ">
            <BsGithub style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rohit-patil-a040a6301/" className="mr-4 hover:underline md:mr-6">
            <BsLinkedin style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/srs_rohit90?igsh=MTI1a2N3YTNlYmV1Mg==" className="mr-4 hover:underline md:mr-6">
            <BsInstagram style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/qr/CEVNZM2Q3LEZD1" className="mr-4 hover:underline md:mr-6">
            <BsWhatsapp style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
