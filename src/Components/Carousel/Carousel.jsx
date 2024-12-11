import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const carouselRef = useRef(null);

  // Scroll carousel left and right
  const scroll = (direction) => {
    const { current } = carouselRef;
    if (direction === "left") {
      current.scrollBy({ left: -380, behavior: "smooth" });
    } else if (direction === "right") {
      current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  const cards = [
    {
      title: "Assess & Organize",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-purple-600 text-white",
    },
    {
      title: "Environmental Assessment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-white text-black border border-gray-300",
    },
    {
      title: "Strategy Formulation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-white text-black border border-gray-300",
    },
    {
      title: "Strategy Formulation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-white text-black border border-gray-300",
    },
    {
        title: "Strategy Formulation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        bgColor: "bg-white text-black border border-gray-300",
      },
  ];

  return (
    <div className="relative w-full ">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 px-8 mb-4">
        <button
          onClick={() => scroll("left")}
          className="p-2 text-[#222222] bg-[#E6E7E9]   hover:bg-gray-300 h-[35px] w-[35px] flex items-center justify-center rounded-s-md "
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 text-white bg-[#EC0112]   hover:bg-gray-300 h-[35px] w-[35px] flex items-center justify-center rounded-e-md "
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Cards Wrapper */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-hidden scrollbar-hide scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`lg:min-w-[458.21px] h-[164.8px] p-6 min-w-full  flex flex-col justify-between ${card.bgColor}`}
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
