import React from "react";
import aboutpic from "../../Assets/Images/aboutpic1.png";
import aboutpic2 from "../../Assets/Images/aboutpic2.png";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section - Images */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative z-10">
            <img
              src={aboutpic}
              alt="Main"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          
          {/* Secondary Image - Overlapped */}
          <div className="absolute top-1/2 -right-12 z-20 w-2/3 bg-white p-3 rounded-lg shadow-lg transform -translate-y-1/4">
            <img
              src={aboutpic2}
              alt="Secondary"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Counter Box */}
          <div className="absolute -bottom-12 right-16 z-30 bg-[#150529] text-white p-8 rounded-lg shadow-xl">
            <div className="text-center">
              <p className="text-5xl font-bold mb-1">
                10<sup className="text-xl">+</sup>
              </p>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="lg:pl-8 pt-16 lg:pt-0">
          {/* About Us Label */}
          <div className="relative inline-block mb-4">
            <span className="text-[#7E689A] text-sm font-semibold tracking-wider uppercase">
              ABOUT US
            </span>
            <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-red-600"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-[#383838] leading-tight mb-8">
            We Are Business Consultants Dedicated To Driving Your Success
          </h2>

          {/* Description */}
          <p className="text-[#65676B] text-lg leading-relaxed mb-8">
            We've been a Strategy and Technology service provider for nearly two decades, 
            and we bring unrivaled capabilities, tools, technologies, and talent to every 
            engagement, augmented by an ecosystem of best-of-breed partners that provide 
            specialized expertise. We'll help you mobilize for change, navigate uncertainty, 
            and flex as needed, so you achieve sustained, profitable growth—a feat only 1 
            in 11 companies manages to pull off.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-red-600 pl-6 mb-8 italic text-[#7F7F7F]">
            "We offer creative solutions that have helped lots of brands, individuals,
            organizations, and companies across the globe and sectors develop and execute 
            winning strategies and Technology solutions".
          </blockquote>

          {/* Learn More Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded transition-colors duration-200 flex items-center group">
            Learn More 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

