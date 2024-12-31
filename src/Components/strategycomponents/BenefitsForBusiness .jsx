import React from "react";
import { BarChart3, Flag } from 'lucide-react';
import business from "../../Assets/Images/business.jfif";

const BenefitsForBusiness = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1280px]  py-16 md:py-24 mx-auto px-4">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Image Section */}
          <div className="relative w-full  h-full lg:h-[630px] lg:max-w-[610px]">
            <img
              src={business}
              alt="Business consultation"
              className="object-cover w-full h-full shadow-lg"
            />
          </div>

          {/* Right Content Section */}
          <div className="">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-3">
              <h5 className="text-[#320D46] text-sm font-semibold uppercase tracking-wider">
                Benefits For Business
              </h5>
              <div className="w-20 h-0.5 bg-red-600"></div>
            </div>

            {/* Main Heading */}
            <div className="w-full ">
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px]  lg:w-[519px]  font-semibold font-sanss text-gray-900 lg:leading-[58.5px] mb-3">
              Uncover The Direct Benefits We Bring To Your Business
            </h2>
            </div>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              As a team that stays together, we are committed to bringing that level of
              excellence and simplicity to all your strategy sessions and consultancy.
              We are excellent solution providers.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-8 mb-3 md:grid-cols-2">
              {/* Increased Efficiency */}
              <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Increased Efficiency
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Streamlining processes to maximize productivity and minimize waste.
                </p>
              </div>

              {/* Market Positioning */}
              <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50">
                  <Flag className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Market Positioning
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Strategically defining your brand to stand out in a competitive landscape.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="flex items-center px-8 py-4 mt-6 text-white transition-colors duration-200 bg-red-600 rounded hover:bg-red-700 group">
              Get Started
              <span className="ml-2 transition-transform duration-200 transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsForBusiness;

