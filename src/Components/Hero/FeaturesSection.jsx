import React from "react";
import swat from "../../Assets/Images/Swat.png";
import rocket from "../../Assets/Icons/rocket.png";
import piechart from "../../Assets/Icons/piechart.png";
const FeaturesSection = () => {
  return (
    <div className="flex font-sanss flex-col lg:flex-row items-stretch justify-center bg-red-500 lg:pb-1 lg:space-x-0 ">
      {/* SWAT Logo Card */}
      <div className="flex-1 lg:h-[184.8px] bg-purple-700 flex flex-col justify-center items-center text-white py-8 px-6">
        {/* <h1 className="text-4xl font-bold">swat</h1>
        <p className="mt-2 text-sm lg:text-base">Strategy Worth and Technology</p> */}
        <img src={swat} alt="Nav logo" className="w-[144px] h-[60.63px]  " />
      </div>

      {/* Research & Development Card */}
      <div className="flex-1 lg:h-[184.8px] bg-purple-500 flex flex-row justify-center items-center  text-white py-8 px-6 space-x-3 ">
        <span className="text-4xl"> <img src={rocket} alt="rocket icon" className="w-[35px] h-[35px]" /></span>
        <span className="w-[50%]"><h2 className="text-xl font-sanss font-semibold">Research & Development</h2></span>
      </div>

      {/* Business Strategy Consultancy Card */}
      <div className="flex-1 lg:h-[184.8px] bg-red-500 flex flex-row justify-center items-center">
      <div className=" w-[80%] flex flex-row justify-center items-center  text-white py-8 px-6 space-x-3 ">
        <span className="text-4xl"><img src={piechart} alt="rocket icon" className="w-full h-full" /></span>
        <span className="" > <h2 className="text-xl font-semibold">Business Strategy Consultancy</h2> </span>
      </div>
      <div className=" w-[20%] h-full lg:h-[184.8px] bg-[#673AB7] text-white py-8 px-6">
        
      </div>

      </div>
      
    </div>
  );
};

export default FeaturesSection;
