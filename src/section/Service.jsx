import React from "react";
import { FaCheck } from "react-icons/fa";
import bgg from "../Assets/Images/videw.jpeg"


const Service = () => {
  return (
    <section className="justify-between w-full bg-white ">
      {/* Left Text Section */}
      <div className="max-w-[1280px] mx-auto px-5 flex flex-col items-center lg:flex-row pb-10 font-sanss gap-4">
      <div className="lg:w-[541.51px] w-full bg-[#150529] text-white px-[49.55px] py-[34.9px]">
        <p className="text-[17px] font-[400] leading-[25.5px]">
          Discover the standout qualities that make our services truly
          exceptional. From tailored solutions designed to meet your unique
          needs to a commitment to excellence that drives every action we take,
          our approach ensures unmatched value.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start space-x-2 font-[400] text-[17px]">
            <FaCheck className="mt-1 text-white" />
            <span className="leading-[25.5px]">
              We always ensure to share the same ambition.
            </span>
          </li>
          <li className="flex items-start space-x-2 font-[400] text-[17px]">
            <FaCheck className="mt-1 text-white" />
            <span className="leading-[25.5px]">
              We work alongside our clients as one team.
            </span>
          </li>
        </ul>
      </div>

      {/* Right Image/Video Section */}
      <div className="relative w-full mt-6 lg:mt-0 lg:w-[716.81px]">
        <img
          src={bgg}
          alt="Video Thumbnail"
          className="w-[716.81px] h-[281.7px]"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black rounded-md bg-opacity-30">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-6 h-6 text-red-500"
            >
              <path d="M6.79 4.093A.5.5 0 0 1 7.5 4.5v7a.5.5 0 0 1-.71.454l-4.5-3.5a.5.5 0 0 1 0-.908l4.5-3.5ZM7.5 4.5v7l-4.5-3.5 4.5-3.5ZM12.5 1A1.5 1.5 0 0 0 11 2.5v11A1.5 1.5 0 0 0 12.5 15h2A1.5 1.5 0 0 0 16 13.5v-11A1.5 1.5 0 0 0 14.5 1h-2Z" />
            </svg>
          </div>
        </button>
      </div>
      </div>
    </section>
  );
};

export default Service;
