import React from "react";
import swat from "../../Assets/Images/swat.svg";
import rocket from "../../Assets/Icons/rocket.png";
import piechart from "../../Assets/Icons/piechart.png";
const FeaturesSection = () => {
  return (
    <div className="flex font-sanss flex-col lg:flex-row items-stretch justify-center bg-[#EC0112] lg:pb-1 lg:space-x-0 ">
      {/* SWAT Logo Card */}
      <div className="flex-1 lg:h-[184.8px] bg-[#150529] flex flex-col justify-center items-center text-white py-8 px-6">
        {/* <h1 className="text-4xl font-bold">swat</h1>
        <p className="mt-2 text-sm lg:text-base">Strategy Worth and Technology</p> */}
        <img src={swat} alt="Nav logo" className="w-[144px] h-[60.63px]  " />
      </div>

      {/* Research & Development Card */}
      <div className="flex-1 lg:h-[184.8px] bg-[#320D46] flex lg:flex-row justify-center items-center  text-white py-8 px-6 space-x-3 ">
        <div className=" w-[60%] lg:w-[80%] flex md:flex md:space-x-3 space-x-3 justify-center items-center md:justify-center md:items-center md:flex-row flex-row ">
          <span className="text-4xl justify-center">
            {" "}
            <img src={rocket} alt="rocket icon" className="lg:w-full lg:h-full" />
          </span>
          <span className="lg:w-[50%] text-center">
            <h2 className="text-xl font-sanss font-semibold">
              Research & Development
            </h2>
          </span>
        </div>
      </div>

      {/* Business Strategy Consultancy Card */}
      <div className="flex-1 lg:h-[184.8px] bg-[#EC0112]  flex flex-row justify-center items-center ">
        <div className=" w-[70%] lg:w-[80%] flex flex-row justify-center items-center  text-white py-8 px-6 space-x-3  ">
          <div className=" md:mx-auto mx-auto flex md:flex md:space-x-3 space-x-3 justify-center items-center lg:justify-center lg:items-center md:justify-center md:items-center md:flex-row flex-row ">
            <span className="text-4xl ">
              <img
                src={piechart}
                alt="rocket icon"
                className="lg:w-full lg:h-full"
              />
            </span>
            <span className="text-center">
              {" "}
              <h2 className="text-xl font-semibold">
                Business Strategy Consultancy
              </h2>{" "}
            </span>
          </div>
        </div>
        <div className=" hidden lg:block lg:w-[20%] lg:h-[184.8px] lg:bg-[#320D46] text-white py-8 px-6"></div>
      </div>
    </div>
  );
};

export default FeaturesSection;
