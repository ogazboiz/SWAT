import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-16 bg-white">
      {/* Left Section */}
      <div className="relative md:w-1/2">
        {/* Main Image */}
        <img
          src="https://via.placeholder.com/500x300" // Replace with actual main image URL
          alt="Main"
          className="w-full rounded-lg shadow-lg"
        />
        {/* Secondary Image */}
        <div className="absolute bottom-[-2rem] left-8 bg-white p-3 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150" // Replace with actual secondary image URL
            alt="Secondary"
            className="w-36 h-36 rounded-lg"
          />
          <div className="absolute bottom-[-2.5rem] left-4 bg-purple-700 text-white p-4 rounded-lg text-center">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 text-gray-800">
        <p className="text-red-500 uppercase font-bold text-sm tracking-wide mb-2">
          About Us
        </p>
        <h2 className="text-4xl font-bold mb-5 leading-tight">
          We Are Business Consultants Dedicated To Driving Your Success
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          We’ve been a Strategy and Technology service provider for nearly two
          decades, and we bring unrivaled capabilities, tools, technologies,
          and talent to every engagement, augmented by an ecosystem of
          best-of-breed partners that provide specialized expertise. We’ll help
          you mobilize for change, navigate uncertainty, and flex as needed, so
          you achieve sustained, profitable growth—a feat only 1 in 11
          companies manages to pull off.
        </p>
        <blockquote className="text-gray-600 italic border-l-4 border-red-500 pl-4 mb-6">
          “We offer creative solutions that have helped lots of brands,
          individuals, organizations, and companies across the globe and
          sectors develop and execute winning strategies and Technology
          solutions”.
        </blockquote>
        <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold text-sm shadow-md hover:bg-red-600 transition">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
