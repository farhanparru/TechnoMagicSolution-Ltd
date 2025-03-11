import React from "react";
import software from '../assets/Image/custom-1.png'
import Consult from '../assets/Image/mobile-app-2.png'
import Develope from '../assets/Image/sftwr.png'
const services = [
  {
    title: "Custom Software Development",
    description:
      "As a prominent Custom Software Development Company, we understand that each business is unique and are proficient in rendering custom software development services for businesses in diverse industries. With a mix of advanced technology and creative thinking, our expert developers possess the capability of bridging the technical gap and business ideas into productive software solutions.",
    icon:software,
  },
  {
    title: "Software Consulting",
    description:
      "Transform your digital journey with our corporate software development solutions that perfectly fit your business. Our software consultants bring best-in-class solutions to run your business operations efficiently and to seize new business opportunities in a dynamic and increasingly competitive environment. We enable seamless integration of software solutions into your technological environment.",
    icon: Consult,
  },
  {
    title: "Mobile App Development",
    description:
      "As a top software development firm, we develop seamless and built-in mobile applications that empower successful business outcomes. Our software development team explores the latest industry trends and technologies to build highly advanced and extremely functional apps with excellent user- interfaces. Get ready to experience top-notch mobile applications for Android and iOS.",
    icon: Develope,
  },
];

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Featured Services</h1>
        <h2 className="text-xl text-gray-600 mt-2">
          We Build Best Software Development Services
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Quality-centred software development company delivering full-cycle software solutions.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-[350px] min-h-[500px] justify-between"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className=" text-gray-800 text-xl font-bold">
              {service.title}
            </h3>
            <p className="text-gray-600  mt-2 flex-grow text-lg">
              {service.description}
            </p>    
            <button className="mt-4 text-blue-600 font-semibold">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
