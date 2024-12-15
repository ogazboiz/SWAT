import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaBullhorn } from "react-icons/fa";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Assess & Organize",
      description: "Evaluating and structuring resources for efficiency..",
      icon: <FaBullhorn className="text-4xl text-red-600" />,
    },
    {
      title: "Environmental Assessment",
      description: ".Analyzing external factors impacting success.",
      icon: <FaBullhorn className="text-4xl text-red-600" />,
    },
    {
      title: "Strategy Formulation",
      description: "Crafting actionable plans to achieve goals.",
      icon: <FaBullhorn className="text-4xl text-red-600" />,
    },
    {
      title: "Business Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBullhorn className="text-4xl text-red-600" />,
    },
    {
      title: "Market Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBullhorn className="text-4xl text-red-600" />,
    },
  ];

  // Scroll carousel left and right
  const scroll = (direction) => {
    const { current } = carouselRef;
    if (direction === "left") {
      current.scrollBy({ left: -380, behavior: "smooth" });
    } else if (direction === "right") {
      current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  // Update active card index on scroll
  const handleScroll = () => {
    const { current } = carouselRef;
    const scrollLeft = current.scrollLeft;
    const cardWidth = current.offsetWidth / 3; // Adjust based on visible cards
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const { current } = carouselRef;
    current.addEventListener("scroll", handleScroll);
    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="justify-end hidden gap-2 px-8 mb-4 lg:flex md:flex">
        <button
          onClick={() => scroll("left")}
          className="p-2 text-[#222222] bg-[#E6E7E9] hover:bg-gray-300 h-[35px] w-[35px] flex items-center justify-center rounded-s-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 text-white bg-[#EC0112] hover:bg-gray-300 h-[35px] w-[35px] flex items-center justify-center rounded-e-md"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory lg:overflow-x-hidden"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 snap-center lg:min-w-[458.21px] h-[164.8px] p-6 flex flex-col justify-between items-center ${
                activeIndex === index
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black"
              } border-b-4 border-[#EC0112] cursor-pointer transition duration-300 shadow-lg`}
            >
              <div className="flex items-center justify-center gap-8 mt-6">
              <div className="mb-3 pt-[9.2px]">
                {React.cloneElement(card.icon, {
                  className: `${
                    activeIndex === index ? "text-white" : "text-red-600"
                  } text-4xl`,
                })}
              </div>
              <div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm w-[221px]">{card.description}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
