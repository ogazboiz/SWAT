import React from "react";
import bg from "../../Assets/Images/lastbg.png";
import grd from "../../Assets/Images/Gradiente.png";

const GlobalLeader = () => {
  return (
    <div
      className="relative text-white bg-center bg-cover w-full lg:h-[950px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "left 20% ", 
        backgroundSize: "cover", // Ensures the image stretches to cover the container
        // Adjusted from "left 30%" to "left 25%" to move it slightly left
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grd})`,
          backgroundSize: "cover", // Ensures the gradient image stretches to cover the container
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      ></div>
    </div>
  );
};

export default GlobalLeader;
