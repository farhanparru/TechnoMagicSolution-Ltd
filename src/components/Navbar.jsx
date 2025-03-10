import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/Image/Technomagic Solutions Logo.jpg";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="mailto:info@diziglobalsolution.com"
            className="flex items-center space-x-1 hover:text-gray-400  text-lg"
          >
            <FaEnvelope />
            <span>Technomagic@solution.com</span>
          </a>
          <span>|</span>
          <a
            href="tel:+918470079475"
            className="flex items-center space-x-1 hover:text-gray-400  text-lg"
          >
            <FaPhoneAlt />
            <span>+91-00000000</span>
          </a>
          <span>|</span>
          <a
            href="tel:+919076972091"
            className="flex items-center space-x-1 hover:text-gray-400 text-lg"
          >
            <FaPhoneAlt />
            <span>+91-0000000</span>
          </a>
        </div>

        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-400 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400 text-2xl">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-400 text-2xl">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-gray-400 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      <nav className="bg-[rgb(156,157,176)] shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <ul className="hidden md:flex space-x-6 text-black text-base font-medium">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">About Us</li>
          <li className="hover:text-gray-500 cursor-pointer">Courses</li>
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
          <li className="hover:text-gray-500 cursor-pointer">Software</li>
          <li className="hover:text-gray-500 cursor-pointer">Certification</li>
          <li className="hover:text-gray-500 cursor-pointer">Blog</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
        </ul>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">
          ENQUIRE NOW!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
