import React from "react";
import lady from "../../Assets/Images/lady.jfif";

const ServicesSection = () => {
  return (
    <section className="bg-[#1D013F] min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <div className="relative inline-block">
              <h5 className="text-[#7E689A] text-sm font-semibold uppercase tracking-wider mb-2">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-600"></span>
              </h5>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Discover The Unique Features That Set Our Services Apart
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              We're guided by our unwavering commitment to always do the right thing 
              by our clients, people, and communities.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative  h-[600px] rounded-lg ">
              <img
                src={lady}
                alt="Professional consultant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service Cards */}
            
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[90%] space-y-6 z-20">
              {/* Business Strategy Card */}
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Business Strategy Consultancy
                </h3>
                <p className="text-gray-600">
                  We help companies build strategies for their businesses, helping 
                  them grow in their profit.
                </p>
              </div>

              {/* Brand Strategy Card */}
              <div className="bg-red-800 p-6 rounded-lg shadow-xl ">
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
              <div className="bg-[#4C0963] p-6 rounded-lg shadow-xl relative">
                <h3 className="text-xl font-bold text-white mb-3">
                  Result & Profitability Improvement
                </h3>
                <p className="text-gray-300">
                  Improving profitability can be a challenging task. We work closely 
                  with companies until it scales up their profits.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

