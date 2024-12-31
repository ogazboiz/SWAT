import React from "react";
import lady from "../../Assets/Images/lady.jfif";

const ServicesSection = () => {
  return (
    <section className="w-full h-full lg:h-[769.2px] bg-[#150529] border-b-[6px] border-[#EC0112]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
          {/* Left Content */}
          <div className="space-y-6 max-w-full lg:max-w-[420px] pt-12 lg:pt-[148px] py-4">
            <div className="flex items-center gap-3">
              <h5 className="text-[#7E689A] text-sm font-semibold uppercase tracking-wider">
                Our Services
              </h5>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>

            <div>
              <h2 className="text-[25px] md:text-[35px] lg:text-[45px] font-sanss font-semibold text-white leading-snug lg:leading-[58.5px]">
                Discover The Unique Features That Set Our Services Apart
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                We're guided by our unwavering commitment to always do the right
                thing by our clients, people, and communities.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full lg:max-w-[394px] h-[500px] sm:h-[600px] lg:h-[764px] overflow-hidden">
              <img
                src={lady}
                alt="Professional consultant"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-6 pt-12 lg:pt-[148px] lg:pb-[100px] relative py-6 lg:py-0">
            {/* Business Strategy Card */}
            <div className="lg:absolute bg-white p-6 shadow-xl border-b-4 border-[#EC0112]  lg:ml-[-90px] lg:top-[145px] z-30 ">
              <h3 className="mb-3 text-lg lg:text-[19.84px] font-semibold text-gray-900">
                Business Strategy Consultancy
              </h3>
              <p className="text-[#7F7F7F] text-sm lg:text-base">
                We help companies build strategies for their businesses, helping
                them grow in their profit.
              </p>
            </div>

            <div className="space-y-6 lg:absolute">
              {/* Brand Strategy Card */}
              <div className="lg:mt-[140px] p-6 shadow-xl bg-[#320D46] border-b-4 border-[#EC0112]">
                <h3 className="mb-3 text-lg lg:text-[19.84px] font-semibold text-white">
                  Brand Strategy Development
                </h3>
                <p className="text-sm text-gray-300 lg:text-base">
                  Every company's priority is achieving its goals. We help
                  companies develop the long-term plan that will enable them to
                  achieve it.
                </p>
              </div>

              {/* Result & Profitability Card */}
              <div className="p-6 shadow-xl bg-[#320D46] border-b-4 border-[#EC0112]">
                <h3 className="mb-3 text-lg lg:text-[18.94px] font-semibold text-white">
                  Result & Profitability Improvement
                </h3>
                <p className="text-sm text-gray-300 lg:text-base">
                  Improving profitability can be a challenging task. We work
                  closely with companies until it scales up their profits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
