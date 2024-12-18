import React from "react";
import bg from "../../Assets/Images/lastbg.png";
import grd from "../../Assets/Images/Gradiente.png";
import vd from "../../Assets/Images/videi.png";
import { FaPlay } from "react-icons/fa";

const GlobalLeader = () => {
  return (
    <div
      className="relative text-white bg-center bg-cover w-full lg:h-[900px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "left -200px top 30%",
        backgroundSize: "cover 100% 80% !important",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grd})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative flex items-start mx-auto px-5 max-w-[1280px] lg:pt-[100px] py-6">
        {/* Right-Aligned Content */}
        <div className="z-10  md:w-2/3 lg:w-[800px] lg:ml-auto lg:text-left">
          <h1 className="hidden  font-semibold  text-[45px] leading-[58.5px] font-sanss mb-[35px] lg:block">
            Global Leaders Come To Us To Solve <br /> Industry-Defining Challenges <br />
            Across All Industries
          </h1>
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-[45px] leading-[58.5px]  font-sanss pb-6 lg:hidden">
            Global Leaders Come To Us To Solve Industry-Defining Challenges
            Across All Industries
          </h1>
          <button className="flex text-[16px] items-center justify-center px-6 py-3 font-medium text-white transition bg-[#EC0112]  max-w-[186.09px] h-[54.4px] hover:bg-red-600">
            Learn More <span className="ml-[9.8px]">&rarr;</span>
          </button>

          {/* Video Section */}
          <div className="relative pt-[60px] lg:w-[787.1px] lg:h-[424.6px]">
            {/* Main Image */}
            <img
              src={vd}
              alt="Leader at work"
              className="rounded-lg shadow-md lg:h-[424px] lg:w-[787.1px]"
              style={{ objectFit: "cover" }}
            />

            {/* Video Thumbnail Play Button */}
            <div className="absolute flex items-center justify-center w-[70px] h-[70px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg top-[64%] left-1/2">
              <button className=" md:text-4xl">
                <FaPlay className="flex justify-center text-3xl text-[#150529]"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLeader;
