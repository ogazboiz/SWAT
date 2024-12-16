import React from "react";
import case1 from "../../Assets/Images/case1.jpg";
import case2 from "../../Assets/Images/case2.jpg";
import case3 from "../../Assets/Images/case3.jpg";
import case4 from "../../Assets/Images/case4.jpg";
import case5 from "../../Assets/Images/case5.jpg";
import case6 from "../../Assets/Images/case6jpg.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Strategic Growth Initiative",
      description: "Driving business growth through innovative strategies.",
      image: case1,
    },
    {
      title: "Operational Efficiency",
      description: "Optimizing processes for maximum productivity",
      image: case2,
    },
    {
      title: "Expansion Strategy",
      description: "Planning for market and business growth..",
      image: case3,
    },
    {
      title: "Change Management",
      description: "Guiding seamless organizational transitions.",
      image: case4,
    },
    {
      title: "Development Program",
      description: "Building skills and fostering growth.",
      image: case5,
    },
    {
      title: "Customer Experience",
      description: "Delivering exceptional interactions and satisfaction.",
      image: case6,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto text-center">
        <h5 className=" mx-auto text-[12.59px] uppercase font-inter text-[#7E689A] mb-2">
          Success in Action
          <span className="ml-2 h-[2px] w-[60px] bg-red-500"></span>
        </h5>

        <h2 className="text-[30px]   font-inter leading-[58px] font-semibold mb-8 ">
          Explore In-Depth Case Studies Highlighting <br />
          The Tangible Results Of Our Consulting Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative lg:w-[387px]  h-[420px]  overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-[60%] object-cover"
              />
              <div className="mx-auto  -top-9 relative w-[270px] h-[190px] bg-white">
                <div className="w-[90%] top-5 relative">
                  <h3 className="mb-2 text-lg font-semibold">{study.title}</h3>
                  <p className="mb-4 text-gray-600">{study.description}</p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex items-center font-semibold text-red-500 top-10 hover:underline"
                  onClick={() => console.log("Button clicked!")} // Add your custom logic here
                >
                  Learn more →
                </button>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
