import {
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
  FaBriefcase,
  FaFacebook,
  FaDigitalTachograph,
  FaSearchPlus,
} from "react-icons/fa";
import bg from "../../Assets/Images/businnesbg.png";
import React, { useState } from "react";
//   import {ReactComponent as One} from "../../Assets/Vector/one.svg";
//   import one from "../../Assets/Vector/one.svg";

const BusinessSolutions = () => {
  // Array of card data with icons
  const services = [
    {
      title: "Strategic Communication",
      description: (
        <>
          Delivering clear, compelling messaging that <br /> aligns with your
          goals and resonates with <br /> stakeholders.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <FaBullhorn className="text-4xl text-red-600" />,

      // icon: <img src={one} alt="one" className="text-4xl" style={{fill : "red"}} />,
      // icon: <One className="text-4xl" style={{ fill: 'red' }}   />,
    },
    {
      title: "Brand Strategy",
      description: (
        <>
          Creating impactful brand narratives that <br /> strengthen identity
          and connect with your <br /> target audience.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <FaChartLine className="text-4xl text-red-600" />,
    },
    {
      title: "Digital Marketing",
      description: (
        <>
          Empowering your brand with data-driven <br /> strategies to reach and
          engage your <br /> audience online effectively.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <FaSearchPlus className="text-4xl text-red-600" />,
    },
    {
      title: "Resource Planning (ERP)",
      description: (
        <>
          Creating user-friendly and innovative mobile <br /> applications
          tailored to enhance your <br /> business operations.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <FaSearchPlus className="text-4xl text-red-600" />,
    },
    {
      title: "Corporate Growth Strategy",
      description: (
        <>
          Building responsive, high-performance <br /> websites that deliver
          exceptional user <br /> experiences and drive growth.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <FaBriefcase className="text-4xl text-red-600" />,
    },
    {
      title: "Social Media Marketing",
      description: (
        <>
          Crafting impactful campaigns to boost brand <br /> visibility and
          foster meaningful connections <br /> on social platforms.
        </>
      ),
      link: "#",
      bgColor: "bg-white text-black",
      icon: <FaFacebook className="text-4xl text-red-600" />,
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

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
          background:
            "linear-gradient(to bottom, #673AB7 100%, #673AB721 13%) ",
        }}
      ></div>
      <div className="relative z-10 px-5  py-16 2xl:w-[1440px] mx-auto 2xl:px-0">
        {/* Header Section */}
        <div className="flex flex-col justify-between text-left lg:flex-row lg:items-center pt-9">
          <div className="">
          <div className="flex items-center gap-5">
              <h4 className="tracking-wide uppercase font-sanss font-[600] text-[12.49px] leading-[16.9px] text-[#DBE4EE] ">
                Consulting Solutions
              </h4>
              <div className="border-[2px] w-[85.16px]  outline-none border-[#EC0112]"></div>
            </div>
            <h1 className="mt-[30px] font-sanss text-[25px] font-[600] lg:text-[45px] leading-[58.5px] ">
              We've Got Your Business Covered
            </h1>
          </div>
          <button className="px-[35.8px] py-[16.8px]  text-white transition font-[500] text-[16px] bg-[#EC0112]  hover:bg-red-700">
            Discover All →
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3 lg:relative lg:-translate-y-[5%] 2xl:w-[1440px]">
          {/* Map through the services array */}
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(index)}
              className={`${
                selectedService === index
                  ? "bg-[#673AB7] text-white"
                  : service.bgColor
              } p-6 flex flex-col items-start 2xl:w-[460.21px] lg:h-[317.5px] cursor-pointer transition-colors duration-300 2xl:pl-[50px] border-b-4 border-[#EC0112]`}
            >
              {/* Icon */}
              <div className="mb-3 pt-[49.2px] ">
                {React.cloneElement(service.icon, {
                  className: `${
                    selectedService === index
                      ? "text-white"
                      : service.icon.props.className
                  }  text-4xl`,
                })}
              </div>
              {/* Title */}
              <h2 className="font-sanss text-[25px] font-[600] ">
                {service.title}
              </h2>
              {/* Description */}
              <p className="mt-2 text-[15px] lg:text-[15px] font-[300] font-sanss leading-[24px] tracking-wide">
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
