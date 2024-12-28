import React from "react";
import case1 from "../../Assets/Images/expert.jfif";
import case2 from "../../Assets/Images/expert2.jfif"

const TeamSection = () => {
  return (
    <section className=" w-full  bg-white">
      {/* Left: Images */ }
      {/* gap-8   */}
      <div className=" max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
        <div className="w-full lg:w-1/2">
          <img
            src={case1}
            alt="Expert 1"
            className="lg:w-[290px] lg:h-[464px]  lg:mt-8 w-full h-auto shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 ">
          <img
            src={case2}
            alt="Expert 2"
            className=" lg:w-[290px] lg:h-[464px] w-full h-auto  shadow-lg"
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col items-center lg:items-start lg:-ml-10 text-center lg:text-left max-w-lg">
        <h5 className="text-sm font-semibold text-red-600 uppercase tracking-widest">
          Meet the Experts
        </h5>
        <h2 className=" max-w-[575px] text-3xl lg:text-[45px] font-sanss font-semibold leading-[58.5px] text-[#383838] mt-2">
          Discover Our Team Of Head Business Consultant Experts
        </h2>
        <button className="mt-6 bg-red-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-red-700 transition duration-300 flex items-center gap-2">
          Discover Team
          <span className="text-lg">→</span>
        </button>
      </div>
      </div>
    </section>
  );
};

export default TeamSection;
