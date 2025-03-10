import React from "react";
import CountUp from "react-countup";

function Count() {
  return (
    <div className="flex justify-center gap-16 py-10 flex-wrap">
      {/* Happy Clients */}
      <div className="text-center">
        <h4 className="text-6xl font-bold text-orange-600">
          <CountUp end={450} duration={2.5} />+
        </h4>
        <p className="text-xl font-medium text-gray-700">Happy Clients</p>
      </div>

      {/* Project Delivered */}
      <div className="text-center">
        <h4 className="text-6xl font-bold text-green-600">
          <CountUp end={750} duration={2.5} />+
        </h4>
        <p className="text-xl font-medium text-gray-700">Project Delivered</p>
      </div>

      {/* Best Service */}
      <div className="text-center">
        <h4 className="text-6xl font-bold text-blue-600">
          <CountUp end={98} duration={2.5} />%
        </h4>
        <p className="text-xl font-medium text-gray-700">Best Service</p>
      </div>

      {/* Countries */}
      <div className="text-center">
        <h4 className="text-6xl font-bold text-purple-600">
          <CountUp end={25} duration={2.5} />+
        </h4>
        <p className="text-xl font-medium text-gray-700">Countries</p>
      </div>
    </div>
  );
}

export default Count;
