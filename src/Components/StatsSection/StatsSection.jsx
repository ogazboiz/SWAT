import React from "react";

const StatsSection = () => {
  return (
    <div className="w-full 2xl:h-[208px]">
      <div className="relative py-12 text-white bg-[#673AB7] 2xl:w-[1440px] lg:w-[1150px] mx-auto lg:h-[208.4px]">
        <div className="container flex items-center justify-around mx-auto">
          {/* Statistic Item */}
          <div className="text-center font-sanss lg:text-[54.14px]">
            <h2 className="text-2xl sm:text-4xl lg:text-[54.14px] font-bold">
              10<sup>+</sup>
            </h2>
            <p className="mt-2 text-[13px] lg:text-[16px]">Happy Clients</p>
          </div>

          {/* Statistic Item */}
          <div className="text-center font-sanss lg:text-[54.14px]">
            <h2 className="text-2xl sm:text-4xl lg:text-[54.14px] font-bold">
              69<sup>+</sup>
            </h2>
            <p className="mt-2 text-[13px] lg:text-[16px] text-wrap">
              Useful Programs
            </p>
          </div>

          {/* Statistic Item */}
          <div className="text-center font-sanss lg:text-[54.14px]">
            <h2 className="text-2xl sm:text-4xl lg:text-[54.14px] font-bold">
              7<span className="text-[2rem]">Y</span>
              <sup>+</sup>
            </h2>
            <p className="mt-2 text-[13px] lg:text-[16px]">
              Years Of Experience
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EC0112]"></div>
      </div>
    </div>
  );
};

export default StatsSection;
