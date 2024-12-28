import React from "react";
import backgroundImage from "../../Assets/Images/getstarted.png";
import grd from "../../Assets/Images/Gradient.png";

const Header = () => {
  return (
    <section
      className="relative flex items-center justify-center lg:h-[382.3px] h-[250px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grd})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply", // Optional for a darker overlay effect
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-[36px] lg:text-[70px] font-sanss font-bold leading-[71.5px]">
          Technological Innovation
        </h2>
        <p className="mt-2 text-[16px] lg:text-[17px] font-normal font-sanss leading-[25px]">
          This is where imagination meets innovation & passion
        </p>
      </div>
    </section>
  );
};

export default Header;
