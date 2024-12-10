import React from "react";
import case1 from "../../Assets/Images/case1.jpg"
import case2 from "../../Assets/Images/case2.jpg"
import case3 from "../../Assets/Images/case3.jpg"
import case4 from "../../Assets/Images/case4.jpg"
import case5 from "../../Assets/Images/case5.jpg"
import case6 from "../../Assets/Images/case6jpg.jpg"

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Strategic Growth Initiative",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: case1,
    },
    {
      title: "Operational Efficiency",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: case2,
    },
    {
      title: "Expansion Strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: case3,
    },
    {
      title: "Change Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: case4,
    },
    {
      title: "Development Program",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: case5,
    },
    {
      title: "Customer Experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: case6,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Success in Action
        <div className=" bottom-0 left-0 h-1 w-[20px] bg-red-500"></div>
        </h5>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          Explore In-Depth Case Studies Highlighting <br />
          The Tangible Results Of Our Consulting Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative w-[387px]  h-[420px]  overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-[60%] object-cover"
              />
<div className="mx-auto  -top-9 relative w-[270px] h-[190px] bg-white">
    <div className="w-[90%] top-5 relative">
  <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
  <p className="text-gray-600 mb-4">{study.description}</p>
  </div>
  <button
    type="button"
    className="text-red-500 top-10 relative font-semibold hover:underline inline-flex items-center"
    onClick={() => console.log("Button clicked!")} // Add your custom logic here
  >
    Learn more →
    
  </button>
  <div className="absolute bottom-0 left-0 h-1 w-full bg-red-500"></div>
</div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
