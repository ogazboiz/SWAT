import React from "react";
import lady from "../../Assets/Images/lady.jfif";

const ServicesSection = () => {
  return (
    <section className=" w-full bg-white h-full">
      <div className="max-w-[1280px] max-h-[764.4px] bg-[#1D013F] mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
          {/* Left Content */}
          <div className="space-y-6 w-[420px]">
            <div className="relative inline-block">
              <h5 className="text-[#7E689A] text-sm font-semibold uppercase tracking-wider mb-2">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-600"></span>
              </h5>
            </div>

            <div className="w-[395.84px]">
            <h2 className="w-[363px] text-[25px] md:text-[] lg:text-[45px] font-sanss font-semibold text-white leading-[58px]">
              Discover The Unique Features That Set Our Services Apart
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              We're guided by our unwavering commitment to always do the right thing 
              by our clients, people, and communities.
            </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative   w-[394px] h-[600px] rounded-lg ">
              <img
                src={lady}
                alt="Professional consultant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service Cards */}
            
          </div>
          <div className=" top-1/2  bg-red-400  h-[full] right-0 w-[420px] space-y-6 ">
              {/* Business Strategy Card */}
              <div className="bg-white p-6 lg:right-36 relative h-[164px]  w-[494px] shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Business Strategy Consultancy
                </h3>
                <p className="text-gray-600">
                  We help companies build strategies for their businesses, helping 
                  them grow in their profit.
                </p>
              </div>

              {/* Brand Strategy Card */}
              <div className="bg-red-800 p-6  shadow-xl ">
                <h3 className="text-xl font-bold text-white mb-3">
                  Brand Strategy Development
                </h3>
                <p className="text-gray-300">
                  Every company's priority is achieving its goals. We help companies 
                  develop the long-term plan that will enable them to achieve it.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
              </div>

              {/* Result & Profitability Card */}
              <div className="bg-[#4C0963] p-6 shadow-xl relative">
                <h3 className="text-xl font-bold text-white mb-3">
                  Result & Profitability Improvement
                </h3>
                <p className="text-gray-300">
                  Improving profitability can be a challenging task. We work closely 
                  with companies until it scales up their profits.
                </p>
                
              </div>
            </div>

        </div>
      </div>
      <div className=" bottom-0 left-0 w-full h-1 bg-red-600"></div>
    </section>
  );
};

export default ServicesSection;

