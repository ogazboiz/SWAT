import React from "react"; // Example icons
import image from "../../Assets/Images/videoimg.png";
import Carousel from "../Carousel/Carousel";

const MethodologySection = () => {
  return (
    <div className="w-full lg:h-[1300px] bg-white">
      {/* Header Section */}
      <div className="pt-[9%] lg:w-[1440px] px-7 mx-auto lg:px-0">
        <img
          src={image}
          alt="videoimg"
          className=" object-cover lg:w-[1440px] lg:h-[380px] mb-9 "
        />

        <div className="flex flex-col lg:flex-row justify-between text-left lg:w-[1440px] lg:items-center pt-9 pb-9">
          <div className="">
            <div className="flex items-center gap-5">
              <h4 className="tracking-wide uppercase font-sanss font-[600] text-[12.49px] leading-[16.9px] text-[#7E689A]">
                Strategic Excellence, Proven Results
              </h4>
              <div className="border-[2px] w-[85.16px]  outline-none border-[#EC0112]"></div>
            </div>
            <h1 className="mt-[30px] font-sanss font-[600] lg:text-[45px] leading-[58.5px] ">
              Our Methodology For <br /> Delivering Results
            </h1>
          </div>
          <div className="lg:w-[600px]">
            <p className="mt-[30px] lg:w-[500px] text-[#7F7F7F] font-sanss font-[400] text-[17px] leading-[25px]">
              SWAT has revolutionized brands, businesses, and organizations by
              delivering innovative solutions that redefine their impact.
            </p>
            <p className="mt-[30px] lg:w-[600px] text-[#7F7F7F] font-sanss font-[400] text-[17px] leading-[25px]">
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
