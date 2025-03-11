import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/Image/Technomagic Solutions Logo.jpg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="w-full">
         <div className="bg-[#1e3a56] text-white text-sm py-2 px-6 flex justify-center items-center h-[50px]">
      {/* Container with Center Alignment */}
      <div className="flex justify-between items-center w-full max-w-7xl">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <a href="mailto:info@techffodils.com" className="flex items-center space-x-2 hover:text-gray-400 text-xl">
            <FaEnvelope /> <span>TechnoMagic@Solutions.com</span>
          </a>
          <a href="tel:+919946345177" className="flex items-center space-x-2 hover:text-gray-400  text-xl">
            <FaPhoneAlt /> <span>+91 000000000</span>
          </a>
          <a href="https://wa.me/919946345177" className="flex items-center space-x-2 hover:text-gray-400  text-xl">
            <FaWhatsapp /> <span>+91 000000000</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <span className="text-white font-semibold  text-xl">Let’s talk</span>
          <span className="text-gray-400">|</span>
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold  text-xl">Follow Us :</span>
            <a href="#" className="hover:text-gray-400  text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400  text-xl"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" style={{width:"100px", height:"100px"}} />
        </div>

        <ul className="hidden md:flex space-x-6 text-black text-base font-medium relative">
          <li className="hover:text-gray-500 cursor-pointer text-xl">Home</li>
          
          {/* Dropdown Example */}
          <li className="relative">
            <button onClick={() => toggleDropdown("company")} className="flex items-center hover:text-gray-500 text-xl">
              Company <MdArrowDropDown />
            </button>
            {dropdown === "company" && (
              <ul className="absolute bg-white shadow-md mt-2 py-2 w-40 text-black">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About Us</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Our Team</li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button onClick={() => toggleDropdown("services")} className="flex items-center hover:text-gray-500 text-xl">
              Services <MdArrowDropDown />
            </button>
            {dropdown === "services" && (
              <ul className="absolute bg-white shadow-md mt-2 py-2 w-40 text-black">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Web Development</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">SEO Optimization</li>
              </ul>
            )}
          </li>

          <li className="hover:text-gray-500 cursor-pointer text-xl">Products</li>
          <li className="hover:text-gray-500 cursor-pointer text-xl">Contacts</li>
          <li className="hover:text-gray-500 cursor-pointer text-xl">Blogs</li>
        </ul>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">
          ENQUIRE NOW!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
