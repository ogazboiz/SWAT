import React from "react";
import aboutpic from "../../Assets/Images/aboutpic1.png";
import aboutpic2 from "../../Assets/Images/aboutpic2.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-white lg:h-[780px]">
      <div className=" 2xl:w-[1440px] mx-auto flex flex-col lg:flex-row  items-center gap-10 px-5 sm:px-10 lg:px-20 md:py-12 lg:mt-28
        ">
        {/* Left Section */}
        <div className="relative lg:w-[55%]  h-[540px] w-[100%]">
          {/* Main Image */}
          <img src={aboutpic} alt="Main" className="w-[100%] h-full" />
          {/* Secondary Image */}
          <div className="relative lg:bottom-[16rem] 2xl:bottom-[14rem]  bottom-[16.3rem] h-[300px]  lg:left-[59%] 2xl:left-[64%] md:left-[69%]   left-[40%] bg-white p-3 w-[220px]  lg:h-[320px] lg:w-[280px]">
            <img src={aboutpic2} alt="Secondary" className="w-full h-full " />
          </div>
          <div className="absolute -bottom-[1.6rem] lg:left-[8rem] 2xl:left-[13rem] md:left-9  right-[14rem] w-[170px] lg:w-[244px] h-[178px] bg-purple-700 text-white text-center shadow-md flex flex-col items-center justify-center">
            <p className="text-[54px] sm:text-3xl leading-[70px] font-semibold">
              10+
            </p>
            <p className="text-sm sm:text-base">Happy Clients</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EC0112]"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[50%]  relative lg:-right-8   md:h-[60%]  h-full  text-gray-800">
          <p className="mb-2 text-sm font-bold tracking-wide text-red-500 uppercase">
            About Us
          </p>
          <h2 className="mb-5  font-semibold leading-[58.5px]  lg:text-[45px] font-sanss">
            We Are Business Consultants Dedicated To Driving Your Success
          </h2>
          <p className="text-[17px] sm:text-base leading-[25.5px] text-[#65676B] font-sanss mb-6 font-[400]">
            We’ve been a Strategy and Technology service provider for nearly two
            decades, and we bring unrivaled capabilities, tools, technologies,
            and talent to every engagement, augmented by an ecosystem of
            best-of-breed partners that provide specialized expertise. We’ll
            help you mobilize for change, navigate uncertainty, and flex as
            needed, so you achieve sustained, profitable growth—a feat only 1 in
            11 companies manages to pull off.
          </p>
          <blockquote className="text-[#7F7F7F] font-sanss leading-[25px] text-[17px] sm:text-base italic border-l-4 border-red-500 pl-4 mb-6">
            “We offer creative solutions that have helped lots of brands,
            individuals, organizations, and companies across the globe and
            sectors develop and execute winning strategies and Technology
            solutions”.
          </blockquote>
          <button className="px-4 py-2 text-sm font-bold text-white transition bg-red-500 shadow-md sm:py-3 sm:px-6 hover:bg-red-600">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
