import React from "react";
import Bg from "../../Assets/Images/herobg.png";
const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Bg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 lg:px-16 text-white">
      <div className="flex items-center justify-center lg:justify-start mb-6">
          <span className="text-sm font-semibold tracking-wider uppercase">
            Unlock Your Business Potential
          </span>
          <span className="ml-3 h-0.5 w-16 bg-red-500"></span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Strategy + <br />
          Technology = <br />
          <span className="text-red-400">Endless Solution</span>
        </h1>

        <p className="text-sm lg:text-lg mb-8 max-w-md">
          This is where imagination meets innovation, passion fuels collaboration, and 
          impossible surrenders to teamwork.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-sm lg:text-base shadow-md">
            Learn More →
          </button>
          <a href="tel:+2348034474677" className="flex items-center text-sm lg:text-base font-medium">
            <span className="bg-white text-red-500 rounded-full p-2 mr-3 shadow-md">📞</span>
            +2348034474677
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
