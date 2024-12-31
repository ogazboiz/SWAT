import React from "react";
import consult from "../../Assets/Images/strat.png";

const Consulting = () => {
  return (
    <section className="w-full px-5 py-10 bg-white lg:px-20">
      <div className="max-w-[1280px] px-6 mx-auto lg:flex  items-center gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 lg:mr-[54.3px] flex justify-center">
          <img
            src={consult}
            alt="Business Consulting"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[421.46px] rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full text-center lg:w-2/3 lg:text-left font-sanss">
          <div className="flex justify-center gap-4 lg:justify-start">
            <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold tracking-[1.7px] leading-[16.9px] text-[#320D46] uppercase">
              Business Consulting Service
            </p>
            <div className="w-[50px] sm:w-[65px] md:w-[85.16px] h-[2px] mt-2 bg-red-600"></div>
          </div>

          <h2 className="mt-[20px] text-lg sm:text-xl md:text-2xl lg:text-[45px] font-semibold leading-snug lg:leading-[58.5px] text-[#383838]">
            We Deliver Tailored Solutions To Address Your Specific Needs And
            Drive Tangible Results
          </h2>

          <button className="py-3 mt-5 text-sm font-medium text-white transition duration-300 bg-[#EC0112] px-6 sm:px-8 md:px-[35.8px] hover:bg-red-700">
            Get a Quotation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
