import React from "react"; // Example icons
import image from "../../Assets/Images/videoimg.png";
import Carousel from "../Carousel/Carousel";

const MethodologySection = () => {
  return (
    <div className="w-full lg:h-[1120px] bg-white">
      {/* Header Section */}
      <div className="pt-[9%] pb-[9%] 2xl:w-[1440px] px-7 mx-auto 2xl:px-0">
        <img
          src={image}
          alt="videoimg"
          className=" object-cover lg:w-[1440px] lg:h-[380px] mb-9 "
        />

        <div className="flex flex-col lg:flex-row justify-between text-left 2xl:w-[1440px] lg:items-center pt-9 pb-9">
          <div className="">
            <div className="flex items-center gap-5">
              <h4 className="tracking-wide uppercase font-sanss font-[600] text-[12.49px] leading-[16.9px] text-[#7E689A]">
                Strategic Excellence, Proven Results
              </h4>
              <div className="border-[2px] w-[85.16px]  outline-none border-[#EC0112]"></div>
            </div>
            <h1 className="mt-[30px] font-sanss font-[600] lg:text-[45px] leading-[58.5px] w-[610px] ">
              Our Methodology For Delivering Results
            </h1>
          </div>
          <div className="2xl:w-[600px] lg:w-[40%]">
            <p className="mt-[30px] 2xl:w-[500px] lg:w-[100%] l text-[#7F7F7F] font-sanss font-[400] text-[17px] leading-[25px]">
              SWAT has revolutionized brands, businesses, and organizations by 
              delivering innovative solutions that redefine their impact.
            </p>
            <p className="mt-[30px] 2xl:w-[600px] lg:w-[100%] text-[#7F7F7F] font-sanss font-[400] text-[17px] leading-[25px]">
              By fostering innovation and unlocking growth opportunities, SWAT
              helps organizations accelerate profitability and stay ahead of the
              competition. Its proven approach ensures sustainable
              transformation & long-term success.
            </p>
          </div>
        </div>
        <Carousel />
      </div>

      {/* Methodology Cards Section */}
    </div>
  );
};

export default MethodologySection;
