import React from "react";
import Bg from "../../Assets/Images/herohesa.png";
import phone from "../../Assets/Icons/phone.png";
const Hero = () => {
  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url(${Bg})`,
    backgroundPosition: "center 20%" }}>
 

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 mx-auto lg:w-[90%] lg:px-8 text-white">
      <div className="flex items-center justify-center lg:mb-6 lg:justify-start">
          <span className="text-[12.7px] font-semibold font-sanss leading-4 tracking-wider uppercase">
            Unlock Your Business Potential
          </span>
          <span className="ml-3 h-0.5 w-16 bg-red-500"></span>
        </div>

        <h1 className="text-4xl font-sanss  lg:text-7xl font-bold leading-snug lg:leading-[71.5px] mb-6">
          Strategy + <br />
          Technology = <br />
          <span >Endless Solution</span>
        </h1>

        <p className="text-sm font-sanss text-white opacity-[83%] lg:text-lg mb-8 max-w-2xl">
          This is where imagination meets innovation, passion fuels collaboration, and 
          impossible surrenders to teamwork.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 font-sans sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-3 text-sm text-white bg-red-500 shadow-md hover:bg-red-600 lg:text-base">
            Learn More →
          </button>
          <a href="tel:+2348034474677" className="flex items-center text-sm font-medium lg:text-base">
            <span className="p-2 mr-1 font-sans shadow-md "><img src={phone} alt="Nav logo" className="w-full h-full " /></span>
            +2348034474677
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
