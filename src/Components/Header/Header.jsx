import React from "react";
import grd from "../../Assets/Images/headergradient.png";

const Header = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative flex items-center justify-center lg:h-[400.3px] h-[250px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 30%", 
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
            backgroundImage: `url(${grd})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", // Optional for a darker overlay effect
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-[36px] lg:text-[70px] font-sanss font-bold leading-[71.5px] ">
          {title}
        </h2>
        <p className="mt-2 text-[16px] lg:text-[17px] font-normal font-sanss leading-[25px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Header;
