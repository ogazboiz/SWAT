import React from "react";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center lg:space-x-4 py-12">
      {/* SWAT Logo Card */}
      <div className="flex-1 bg-purple-700 flex flex-col justify-center items-center text-white py-8 px-6">
        <h1 className="text-4xl font-bold">swat</h1>
        <p className="mt-2 text-sm lg:text-base">Strategy Worth and Technology</p>
      </div>

      {/* Research & Development Card */}
      <div className="flex-1 bg-purple-500 flex flex-col justify-center items-center text-white py-8 px-6">
        <div className="text-4xl mb-4">🚀</div>
        <h2 className="text-xl font-semibold">Research & Development</h2>
      </div>

      {/* Business Strategy Consultancy Card */}
      <div className="flex-1 bg-red-500 flex flex-col justify-center items-center text-white py-8 px-6">
        <div className="text-4xl mb-4">📊</div>
        <h2 className="text-xl font-semibold">Business Strategy Consultancy</h2>
      </div>
    </div>
  );
};

export default FeaturesSection;
