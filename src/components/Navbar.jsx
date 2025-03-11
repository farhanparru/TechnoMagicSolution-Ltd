import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi"; // Search Icon
import logo from "../assets/Image/WhatsApp Image 2025-03-11 at 13.04.09_474900f7.jpg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="w-full bg-white ">
      <nav className="px-8 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-8">
          <img
            src={logo}
            alt="Logo"
            className="h-12"
            style={{ width: "190px", height: "100px" }}
          />
          <ul className="flex space-x-6 text-black text-lg font-semibold">
            <li className="hover:text-gray-300 cursor-pointer">What we do</li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("industries")}
                className="flex items-center hover:text-gray-300"
              >
                Industries <MdArrowDropDown />
              </button>
              {dropdown === "industries" && (
                <ul className="absolute bg-white shadow-lg mt-2 py-2 w-48 text-black rounded-md">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Industry 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Industry 2
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <ul className="hidden md:flex space-x-8 text-black text-lg font-semibold relative">
          <li className="relative">
            <button
              onClick={() => toggleDropdown("approach")}
              className="flex items-center hover:text-gray-300"
            >
              Our approach <MdArrowDropDown />
            </button>
            {dropdown === "approach" && (
              <ul className="absolute bg-white shadow-lg mt-2 py-2 w-48 text-black rounded-md">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Strategy
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Execution
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300 cursor-pointer">Who we are</li>
          <li className="hover:text-gray-300 cursor-pointer">Our partners</li>
          <li className="hover:text-gray-300 cursor-pointer">Insights</li>
          <li className="hover:text-gray-300 cursor-pointer">Careers</li>

          <li className="relative">
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
