import React, { useState } from "react";

const Productinfo = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex space-x-4">
        <button
          onClick={() => handleTabClick("description")}
          className={`text-gray-700 hover:text-primary-600 focus:outline-none ${
            activeTab === "description"
              ? "font-bold border-b-2 border-primary-600"
              : ""
          }`}
        >
          Features
        </button>
        <button
          onClick={() => handleTabClick("specifications")}
          className={`text-gray-700 hover:text-primary-600 focus:outline-none ${
            activeTab === "specifications"
              ? "font-bold border-b-2 border-primary-600"
              : ""
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => handleTabClick("reviews")}
          className={`text-gray-700 hover:text-primary-600 focus:outline-none ${
            activeTab === "reviews"
              ? "font-bold border-b-2 border-primary-600"
              : ""
          }`}
        >
          FAQ's
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "description" && (
        <div className="mt-4">
          <p className="text-gray-500">
            Robust Construction: Sturdy frame and build ensure durability and
            longevity, with the ability to withstand challenging working
            conditions. Powerful Engine: Equipped with a high-performance
            engine, providing ample power to drive the rotary blades and
            efficiently break up soil. Adjustable Depth Control: Offers
            adjustable depth settings, allowing farmers to control the depth of
            soil penetration based on specific crop requirements. Multi-Speed
            Gearbox: Incorporates a multi-speed gearbox for flexibility in
            various soil types, enabling operators to choose the optimal speed
            for different cultivation tasks. Multiple Blades Configuration:
            Features a configuration of multiple rotary blades that effectively
            cut, mix, and turn over soil, promoting
          </p>
        </div>
      )}

      {activeTab === "specifications" && (
        <div className="mt-4">
          {/* Add your specification content here */}
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris eu diam bibendum, non fringilla turpis dapibus. Fusce vitae felis vel justo lacinia malesuada a vel arcu. Nullam auctor, metus vitae congue fringilla, odio nunc vestibulum tortor, vel euismod leo dui eu tellus. Vivamus eleifend eros ut justo ultricies, vitae feugiat nisi bibendum. Integer ac justo a nunc hendrerit tincidunt nec ac quam. Sed vel accumsan lectus. Duis auctor fringilla urna, eu aliquet sapien tristique vitae. Vestibulum ullamcorper metus nec dolor ullamcorper, vel venenatis nunc vehicula. In hac habitasse platea dictumst. Cras sed ligula nec dolor lobortis cursus.




</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="mt-4">
          {/* Add your review content here */}
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris eu diam bibendum, non fringilla turpis dapibus. Fusce vitae felis vel justo lacinia malesuada a vel arcu. Nullam auctor, metus vitae congue fringilla, odio nunc vestibulum tortor, vel euismod leo dui eu tellus. Vivamus eleifend eros ut justo ultricies, vitae feugiat nisi bibendum. Integer ac justo a nunc hendrerit tincidunt nec ac quam. Sed vel accumsan lectus. Duis auctor fringilla urna, eu aliquet sapien tristique vitae. Vestibulum ullamcorper metus nec dolor ullamcorper, vel venenatis nunc vehicula. In hac habitasse platea dictumst. Cras sed ligula nec dolor lobortis cursus.




</p>
        </div>
      )}
    </div>
  );
};

export default Productinfo;
