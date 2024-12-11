import React from "react";
import backgroundImage from "../../Assets/Images/getstarted.png"

const GetStarted = () => {
  return (
    <section
    className="relative px-6  h-[500px]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-60"></div>
    <div className=" w-[100%]   py-10 md:py-20 px-5 md:px-10">
      {/* Background Overlay */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900  to-90% opacity-5 "></div>

      {/* Content */}
      <div className="relative top-12  mx-auto grid grid-cols-1  items-center md:justify-between w-[100%]">
        {/* Text Section */}
        <div className="  w-full text-center md:text-left space-y-4  lg:w-[47%] md:-[100%]">
          <h2 className="text-[40.65px] font-sans font-semibold  text-[#FFFFFF] leading-[58.5px]">
            Let Us Discuss Your Business Goals & Create A Standard Application Today
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0 relative top-14">
          <button className="bg-red-600 hover:bg-red-700 text-white text-[16px] font-sans font-medium py-3 px-6  flex items-center space-x-2">
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 12H3.75M17.25 12l-4.5-4.5M17.25 12l-4.5 4.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default GetStarted;
