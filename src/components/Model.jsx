import React from 'react';
import Wordpress from '../assets/Image/logo_11378758.png'
import React1 from '../assets/Image/atomic-energy_9036735.png'
import php from '../assets/Image/web_15457933.png'
import Js from '../assets/Image/js_5968292 (1).png'
import Html from '../assets/Image/html5_16183594.png'
import python from '../assets/Image/python_5968350 (1).png'
import Css from '../assets/Image/css_919826.png'
import Nodejs from '../assets/Image/Node.png'
import ExpressJs from '../assets/Image/Express js.png'
import Boostrapp from '../assets/Image/bootstrap_5968672.png'

const Model = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-1">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Masters of Cutting-Edge <br /> Technology in Web Design
      </h1>
      <div className="grid grid-cols-5 gap-8 items-center justify-center max-w-4xl text-xl">
        <img src={Wordpress} alt="WordPress" className="h-14 " />
        <img src={Nodejs} alt="Node js" className="h-12" />
        <img src={Html} alt="HTML5" className="h-12" />
        <img src={Css} alt="CSS3" className="h-12" />
        <img src={php} alt="PHP" className="h-12" />
        <img src={Js} alt="JavaScript" className="h-12" />
        <img src={python} alt="Python" className="h-12" />
        <img src={Boostrapp} alt="Bootstrap" className="h-12" />
        <img src={ExpressJs} alt="Express js" className="h-12" />
        <img src={React1} alt="React" className="h-12" />
      </div>
    </div>
  );
};

export default Model;