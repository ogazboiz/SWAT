import React from "react";
import aboutpic from "../../Assets/Images/aboutpic1.png";
import aboutpic2 from "../../Assets/Images/aboutpic2.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-white" >
    <div className=" w-[90%] md:w-full mx-auto flex flex-col   md:flex-row items-center gap-10  sm:px-10 lg:px-20 md:py-12 px-0">
        
      {/* Left Section */}
      <div className="relative lg:w-[55%]  h-[540px] w-[100%]">
        {/* Main Image */}
        <img
          src={aboutpic}
          alt="Main"
          className=" sm:w- w-[100%] h-full"
        />
        {/* Secondary Image */}
        <div className="relative lg:bottom-[18rem]  bottom-[20rem] h-[350px]  lg:left-[58%]  left-[44%]  md:left-[60%] bg-white p-3 w-[220px]  lg:h-[320px] lg:w-[280px]">
          <img
            src={aboutpic2}
            alt="Secondary"
            className="w-full h-full  "
          />
          
        </div>
        <div className="absolute -bottom-[1.6rem] lg:right-[12rem]   right-[6rem] w-[170px] lg:w-[244px] h-[178px] bg-purple-700 text-white text-center shadow-md flex flex-col items-center justify-center">
  <p className="text-[54px] sm:text-3xl leading-[70px] font-semibold">10+</p>
  <p className="text-sm sm:text-base">Happy Clients</p>
</div>

      </div>

      {/* Right Section */}
      <div className="lg:w-[70%]  w-full md:w-[140%] relative lg:-right-8   md:h-[60%]  h-full md:left-16 text-gray-800">
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
        <button className="bg-red-500 text-white py-2 px-4 sm:py-3 sm:px-6 font-bold text-sm shadow-md hover:bg-red-600 transition">
          Learn More →
        </button>
      </div>
      
    </div>
    </section>
  );
};

export default AboutUs;
