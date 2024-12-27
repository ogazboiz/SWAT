import React from "react";
import backgroundImage from "../../Assets/Images/getstarted.png";
import grd from "../../Assets/Images/Gradient.png";


const Header = () => {
  return (
    <section
      className="relative px-6 lg:h-[382.3px]  flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 34%",
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
      {/* Content */}
      <div className="relative z-10 flex flex-col space-y-6 md:text-left md:items-start lg:ml-0 lg:w-[1440px] lg:justify-start py-5">
        {/* Text Section */}
        <h2 className="lg:text-[44.65px] text-[24.65px] font-sans font-semibold text-white leading-[1.4] lg:w-[601px] lg:pb-[50px]">
        Technological Innovation {" "}
        </h2>

        <p className="text-[#FFFFFF]">This is where imagination meets innovation & passion</p>
      </div>
    </section>
  );
};

export default Header;
