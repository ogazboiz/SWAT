import React from "react";

const GetStarted = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white py-10 md:py-20 px-5 md:px-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-purple-900 opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            Let Us Discuss Your Business Goals & Create A Standard Application Today
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0">
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2">
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
  );
};

export default GetStarted;
