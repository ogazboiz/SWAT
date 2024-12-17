import {
  BrainCircuit,
  Target,
  BarChart3,
  Search,
  CircleDot,
  Settings,
} from "lucide-react";
import bg from "../../Assets/Images/businnesbg.png";
import React, { useState } from "react";

const BusinessSolutions = () => {
  // Array of card data with icons
  const services = [
    {
      title: "Strategic Communication",
      description: (
        <>
          Delivering clear, compelling messaging that aligns with your goals and
          resonates with stakeholders.
        </>
      ),
      link: "#",
      bgColor: "bg-[#150529] text-white", // Set the first card as purple
      icon: <BrainCircuit className="text-red-600 text-7xl" />,
    },
    {
      title: "Brand Strategy",
      description: (
        <>
          Creating impactful brand narratives that strengthen identity and
          connect with your target audience.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <Target className="text-4xl text-red-600" />,
    },
    {
      title: "Digital Marketing",
      description: (
        <>
          Empowering your brand with data-driven strategies to reach and engage
          your audience online effectively.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <BarChart3 className="text-4xl text-red-600" />,
    },
    {
      title: "Resource Planning (ERP)",
      description: (
        <>
          Creating user-friendly and innovative mobile applications tailored to
          enhance your business operations.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <Search className="text-4xl text-red-600" />,
    },
    {
      title: "Corporate Growth Strategy",
      description: (
        <>
          Building responsive, high-performance websites that deliver
          exceptional user experiences and drive growth.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <CircleDot className="text-4xl text-red-600" />,
    },
    {
      title: "Social Media Marketing",
      description: (
        <>
          Crafting impactful campaigns to boost brand visibility and foster
          meaningful connections on social platforms.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <Settings className="text-4xl text-red-600" />,
    },
  ];

  const [selectedService, setSelectedService] = useState(0); // Default to first service selected

  // Function to handle scroll to top
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative text-white bg-center bg-cover w-full lg:h-[830.4px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center 23%",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(to bottom,#150529 100%, #150529 13%) ",
        }}
      ></div>
      <div className="relative z-10 px-5 lg:pt-[110px] mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col justify-between text-left lg:flex-row lg:items-center pt-9">
          <div>
            <div className="flex items-center gap-5">
              <h4 className="tracking-wide uppercase font-sanss font-[600] text-[12.49px] leading-[16.9px] text-[#DBE4EE]">
                Consulting Solutions
              </h4>
              <div className="border-[2px] w-[85.16px] outline-none border-[#EC0112]"></div>
            </div>
            <h1 className="mt-[30px] font-sanss text-[25px] font-[600] lg:text-[45px] leading-[58.5px] ">
              We've Got Your Business Covered
            </h1>
          </div>
          <button className="px-[35.8px] py-[16.8px] w-[189.2px] h-[54.4px] text-white transition font-[500] text-[16px] bg-[#EC0112] hover:bg-red-700">
            Discover All →
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3 lg:relative lg:-translate-y-[5%]">
          {/* Map through the services array */}
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedService(index); // Scroll to the top on card click
              }}
              className={`${
                selectedService === index || index === 0
                  ? "bg-[#150529] text-white"
                  : "bg-white text-black"
              } p-6 flex flex-col items-start max-w-[407.21px] max-h-[317.5px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-10px] hover:bg-[#150529] hover:text-white border-b-4 border-[#EC0112] group`}
            >
              {/* Icon */}
              <div className="mb-3 pt-[49.2px]">
                {/* Apply group-hover to change icon color */}
                {React.cloneElement(service.icon, {
                   size: selectedService === index ? 40 : 40,
                  className: `text-9xl transition-colors duration-300 ${
                    selectedService === index || index === 0
                      ? "text-white"
                      : "text-red-600 group-hover:text-white"
                  }`,
                })}
              </div>
              {/* Title */}
              <h2 className="font-sanss text-[25px] font-[600] ">
                {service.title}
              </h2>
              {/* Description */}
              <p className="mt-2 text-[15px] lg:text-[15px] font-[300] font-sanss leading-[24px] tracking-wide w-[310px]">
                {service.description}
              </p>
              {/* Link */}
              <a
                href={service.link}
                className="inline-block mt-4 text-[#EC0112] font-sanss font-[500] text-[16px] hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
