import React from "react";
import consult from "../../Assets/Images/strat.png";

const Consulting = () => {
  return (
    <section className="w-full px-5 py-10 bg-white lg:px-20">
      <div className="max-w-[1280px] px-6 mx-auto flex  items-center ">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 lg:mr-[54.3px]">
          <img
            src={consult}
            alt="Business Consulting"
            className="lg:max-w-[421.46px] w-full rounded-md lg:h-[366.8px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full mt-6 text-left lg:w-2/3 lg:mt-0 font-sanss">
          <div className="flex gap-4 ">
            <p className="lg:text-[13px] font-semibold tracking-[1.7px] leading-[16.9px] text-[#320D46] uppercase">
              Business Consulting Service
            </p>
            <div className="w-[85.16px] h-[2px] mt-2 bg-red-600"></div>
          </div>
          <h2 className="mt-[25.2px] font-semibold leading-[58.5px] text-[#383838] lg:text- lg:text-[45px]">
            We Deliver Tailored Solutions To Address Your Specific Needs And
            Drive Tangible Results
          </h2>
          <button className="py-[16.8px] mt-[20px] text-sm font-medium text-white transition duration-300 bg-[#EC0112]  px-[35.8px] hover:bg-red-700">
            Get a Quotation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
