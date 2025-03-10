import React, { useEffect } from "react";
import main from "../assets/Image/person-working-html-computer.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Model from "./Model";
import Dmodel from "./Dmodel";
import Count from "./Count";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration
  }, []);

  return (
    <div className="w-full min-h-screen bg-[rgb(252,252,252)]">
      {/* Hero Section */}
      <section className="flex justify-center">
        <section className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-10 py-20">
          <div className="w-full">
            <h2 className="text-lg font-semibold text-gray-700 uppercase tracking-widest">
              Empowering Businesses Through Web Solutions
            </h2>

            <h1
              className="text-6xl font-extrabold text-gray-500 mt-4 leading-snug"
              data-aos="flip-up"
            >
              Transforming Ideas into{" "}
              <span
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                data-aos="flip-down"
              >
                Digital Success
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              With a focus on user-friendly website design and responsive
              website development, we empower your digital presence to engage
              and convert effortlessly.
            </p>

            <div className="flex space-x-4 mt-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                CONTACT US!
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                WHATSAPP US
              </button>
            </div>

            <p className="mt-6 font-semibold text-gray-700 text-lg">
              15+ Years Experience | 1500+ Clients | 150+ E-commerce Clients | 1
              Year Free Support
            </p>
          </div>

        
          <div className="w-full flex justify-center mt-10 md:mt-0">
            <div className="relative w-96 h-96">
              <img
                src={main}
                alt="Woman working on laptop"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </section>
     <Dmodel/>
     <Count/>
    </div>
  );
};

export default HomePage;
