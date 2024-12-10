import React from "react";
import aboutpic from "../../Assets/Images/aboutpic1.png";
import aboutpic2 from "../../Assets/Images/aboutpic2.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-white" >
    <div className=" w-[90%] mx-auto flex flex-col md:flex-row items-center gap-10 px-5 sm:px-10 lg:px-20 py-16 ">
        
      {/* Left Section */}
      <div className="relative w-[70%]  bg-red-600 md:w-1/2">
        {/* Main Image */}
        <img
          src={aboutpic}
          alt="Main"
          className="w-[100%] rounded-lg"
        />
        {/* Secondary Image */}
        <div className="absolute bottom-[-80rem] sm:bottom-[-2.5rem] lg:left-[60%]   left-[60%] bg-red-500 p-3 w-[200px] sm:w-[250px]  lg:h-[320px] lg:w-[240px]">
          <img
            src={aboutpic2}
            alt="Secondary"
            className="w-full h-full  "
          />
          <div className="absolute  bottom-[1.8rem]  right-[17rem] w-[200px]  h-[40%] bg-purple-700 text-white  r text-center shadow-md">
              
            <p className="text-2xl sm:text-3xl font-bold">10+</p>
            <p className="text-sm sm:text-base">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 lg:relative lg:-right-24 bg-slate-900 text-gray-800">
        <p className="text-red-500 uppercase font-bold text-sm tracking-wide mb-2">
          About Us
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
          We Are Business Consultants Dedicated To Driving Your Success
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#65676B] font-sans mb-6">
          We’ve been a Strategy and Technology service provider for nearly two
          decades, and we bring unrivaled capabilities, tools, technologies,
          and talent to every engagement, augmented by an ecosystem of
          best-of-breed partners that provide specialized expertise. We’ll help
          you mobilize for change, navigate uncertainty, and flex as needed, so
          you achieve sustained, profitable growth—a feat only 1 in 11
          companies manages to pull off.
        </p>
        <blockquote className="text-[#7F7F7F] font-sans leading-relaxed text-sm sm:text-base italic border-l-4 border-red-500 pl-4 mb-6">
          “We offer creative solutions that have helped lots of brands,
          individuals, organizations, and companies across the globe and
          sectors develop and execute winning strategies and Technology
          solutions”.
        </blockquote>
        <button className="bg-red-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-bold text-sm shadow-md hover:bg-red-600 transition">
          Learn More →
        </button>
      </div>
      
    </div>
    </section>
  );
};

export default AboutUs;
