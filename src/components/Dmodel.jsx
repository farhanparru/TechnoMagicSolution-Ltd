import React from "react";
import sideLogo from '../assets/Image/image.png'
const Dmodel = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 px-6 lg:px-16 py-12">
      {/* Left Side - Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={sideLogo} // Replace with your actual image
          alt="Responsive Website Design"
          className="w-full max-w-md lg:max-w-xl"
        />
      </div>

      {/* Right Side - Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-red-600 font-bold text-xl md:text-2xl uppercase">
          #1 Website Design Agency in India
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          At Dizi Global Solution, we lead the industry in crafting exceptional
          websites that blend cutting-edge technology with unparalleled creativity.
          With a wealth of experience and a proven track record, we specialize in
          delivering mobile-responsive, SEO-friendly websites that elevate your
          online presence.
        </p>
        
        <ul className="mt-6 space-y-3 text-lg">
          <li className="flex items-center">
            <span className="text-green-500 text-xl mr-3">✔</span> Crafting Stunning, High-Performance Websites
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-xl mr-3">✔</span> Specializing in SEO-Friendly Digital Solutions
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-xl mr-3">✔</span> Industry-Leading Expertise Across Various Sectors
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dmodel;
