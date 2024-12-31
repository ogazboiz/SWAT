import React from "react";
import { Play, Eye, Users2 } from 'lucide-react';
import backgroundImage from "../../Assets/Images/mission.jfif";
import grd from "../../Assets/Images/missiongrad.png";
import card from "../../Assets/Images/girl.jpeg";

export default function MissionVision() {
  return (
    <section
      className="relative flex items-center justify-center w-full px-4 py-12 md:px-6 md:py-16 lg:py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grd})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1280px] font-sanss px-5">
        {/* Header Section */}
        <div className="mb-8 text-left md:mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4 items-left">
            <h2 className="text-xs font-bold tracking-wider text-white sm:text-sm">
              OUR MISSION & VISION
            </h2>
            <div className="h-0.5 w-14 sm:w-14 bg-red-600"></div>
          </div>
          <h1 className=" text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-[45px]">
            Discover The Core Principles That Guide Us
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-[1280px] mx-auto">
          {/* Video Section */}
          <div className="relative aspect-video md:aspect-[4/3] w-full lg:w-[407.21px] lg:h-[257.9px] overflow-hidden shadow-lg">
            <img
              src={card}
              alt="Office environment"
              className="object-cover w-full h-full"
            />
            <button
              className="absolute inset-0 flex items-center justify-center transition-colors bg-black/30 hover:bg-black/40 group"
              aria-label="Play video"
            >
              <div className="flex items-center justify-center w-12 h-12 transition-transform bg-white rounded-full sm:w-16 sm:h-16 md:w-20 md:h-20 group-hover:scale-105">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#2D1857] ml-0.5 sm:ml-1" />
              </div>
            </button>
          </div>

          {/* Cards Section */}
          <div className="space-y-8 lg:col-span-1 xl:col-span-2 xl:flex xl:space-y-0 xl:space-x-8">
            {/* Vision Card */}
            <div className="relative bg-white shadow-lg border-b-4 border-[#EC0112]">
              <div className="p-6 sm:p-8 h-full w-full xl:w-[407px] xl:h-[217px]">
                <div className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-[#2D1857] rounded-lg flex items-center justify-center mb-10 top-[-20px] sm:top-[-25px] left-6 sm:left-8">
                  <Eye className="w-5 h-5 text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                  We are a one-stop-shop for Strategy and Technology Solution
                  that helps the world's most ambitious change makers define the
                  future.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-white shadow-lg border-b-4 border-[#EC0112]">
              <div className="p-6 sm:p-8 h-full w-full xl:w-[407px] xl:h-[217px]">
                <div className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-[#2D1857] rounded-lg flex items-center justify-center mb-10 top-[-20px] sm:top-[-25px] left-6 sm:left-8">
                  <Users2 className="w-5 h-5 text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                  To deploy our talent, expertise and insight to organizations
                  tackling today's urgent challenges across all sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

