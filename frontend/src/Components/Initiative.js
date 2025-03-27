import React from "react";

const Initiative = () => {
  return (
    <div id="ourinitiative" className="bg-gradient-to-b from-green-800 to-green-950 text-gray-200 p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left md:pr-12">
          <h1 className="text-7xl font-bold mb-4 text-[#C3E88D]">
            Our Initiative
            <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
          </h1>
          <p className="text-xl leading-relaxed font-satoshi">
            We are dedicated to promoting sustainable practices and environmental awareness.
            Our initiative focuses on reducing carbon footprints, increasing green cover, and
            encouraging eco-friendly solutions for a better future.
          </p>
        </div>

        {/* Right Side: Single Image */}
        <div className="md:w-1/2 w-full h-[400px] overflow-hidden rounded-lg mt-8 md:mt-0">
          <img
            src="/initiative-image.jpeg" // Replace with your actual image path
            alt="Initiative"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Initiative;
