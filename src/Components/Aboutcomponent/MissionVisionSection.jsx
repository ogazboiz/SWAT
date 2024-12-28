import React from "react";
import backgroundImage from "../../Assets/Images/mission.jfif";
import grd from "../../Assets/Images/missiongrad.png";

const MissionVisionSection = () => {
  return (
    // <section className="bg-[#1D013F] text-white py-12 lg:py-20 px-6 lg:px-16">
     <section
          className="relative px-6 lg:h-[633px]  w-full  flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0%  bottom 5%",
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${grd})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

      {/* Top Section */}
      <div className="text-center lg:text-left max-w-4xl mx-auto mb-12">
        <h5 className="text-sm font-semibold text-red-600 uppercase tracking-widest">
          Our Mission & Vision
        </h5>
        <h2 className="text-3xl lg:text-4xl font-bold mt-2">
          Discover The Core Principles That Guide Us
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col  max-w-[1280px]  mx-auto  px-6 lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Video Section */}
        <div className="w-full lg:w-1/3 relative group">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Video Thumbnail"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer group-hover:bg-opacity-60">
            <button className="bg-white text-red-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              ▶
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:w-2/3">
          {/* Vision Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                {/* Icon Placeholder */}
                🌟
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p>
              We are a one-stop-shop for Strategy and Technology Solutions that
              help the world's most ambitious change-makers define the future.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                {/* Icon Placeholder */}
                👥
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p>
              To deploy our talent, expertise, and insight to organizations
              tackling today’s urgent challenges across all sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Section */}
     
    </section>
  );
};

export default MissionVisionSection;
