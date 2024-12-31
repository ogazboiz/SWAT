import React from "react";
import case1 from "../../Assets/Images/expert.jfif";
import case2 from "../../Assets/Images/expert2.jfif"

const TeamSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 gap-8 lg:gap-12">
        {/* Left: Images */}
        <div className="flex flex-col w-full gap-4 sm:flex-row lg:gap-5 lg:w-auto">
          <div className="w-full sm:w-1/2 lg:w-auto ">
            <img
              src={case1}
              alt="Expert consultant smiling in a professional setting"
              className="w-full h-auto lg:w-[290px] lg:h-[464px] shadow-lg object-cover"
            />
          </div>
          <div className="w-full mt-0 sm:w-1/2 lg:w-auto sm:mt-8 lg:mt-8">
            <img
              src={case2}
              alt="Another expert consultant in a business environment"
              className="w-full h-auto lg:w-[290px] lg:h-[464px] shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center max-w-lg mt-8 text-center lg:items-start lg:text-left lg:mt-0">
          <h2 className="sr-only">Meet Our Expert Team</h2>
          <h3 className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Meet the Experts
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-[45px] font-sanss font-semibold leading-tight sm:leading-snug lg:leading-[1.3] text-[#383838] mt-2 max-w-[575px]">
            Discover Our Team Of Head Business Consultant Experts
          </p>
          <button className="flex items-center gap-2 px-6 py-3 mt-6 font-medium text-white transition duration-300 bg-red-600 rounded-lg shadow hover:bg-red-700" aria-label="Learn more about our team">
            Discover Team
            <span className="text-lg" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

