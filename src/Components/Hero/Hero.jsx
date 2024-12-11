import React from "react";
import Bg from "../../Assets/Images/herobg.png";
import phone from "../../Assets/Icons/phone.png";
const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Bg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 mx-auto lg:w-[90%] lg:px-8 text-white">
      <div className="flex items-center justify-center lg:justify-start mb-6">
          <span className="text-[12.7px] font-semibold font-sanss leading-4 tracking-wider uppercase">
            Unlock Your Business Potential
          </span>
          <span className="ml-3 h-0.5 w-16 bg-red-500"></span>
        </div>

        <h1 className="text-4xl font-sanss  lg:text-7xl font-bold leading-[71.5px] mb-6">
          Strategy + <br />
          Technology = <br />
          <span >Endless Solution</span>
        </h1>

        <p className="text-sm font-sanss text-white opacity-[83%] lg:text-lg mb-8 max-w-2xl">
          This is where imagination meets innovation, passion fuels collaboration, and 
          impossible surrenders to teamwork.
        </p>

        {/* Buttons */}
        <div className="flex flex-col font-sans sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3  text-sm lg:text-base shadow-md">
            Learn More →
          </button>
          <a href="tel:+2348034474677" className="flex items-center text-sm lg:text-base font-medium">
            <span className="  font-sans p-2 mr-1 shadow-md"><img src={phone} alt="Nav logo" className="w-full h-full  " /></span>
            +2348034474677
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
