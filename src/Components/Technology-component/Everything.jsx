import React, { useState } from "react";
import case1 from "../../Assets/Images/case1.jpg";
import case2 from "../../Assets/Images/case2.jpg";
import case3 from "../../Assets/Images/case3.jpg";
import case4 from "../../Assets/Images/case4.jpg";
import case5 from "../../Assets/Images/case5.jpg";
import case6 from "../../Assets/Images/case6jpg.jpg";

const SuccessInAction = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Development",
    "App Development",
    "UI/UX",
    "Digital Marketing"
  ];

  const caseStudies = [
    {
      title: "EasyFarming",
      category: "UI/UX",
      description: "Driving business growth through innovative strategies.",
      image: case1,
    },
    {
      title: "MyClinic",
      category: "Web Development",
      description: "Driving business growth through innovative strategies",
      image: case2,
    },
    {
      title: "Bamboo Real Estate",
      category: "Web Development",
      description: "Driving business growth through innovative strategies.",
      image: case3,
    },
    {
      title: "House of Launi",
      category: "Web Development",
      description: "Driving business growth through innovative strategies.",
      image: case4,
    },
    {
      title: "EasyFarming",
      category: "UI/UX",
      description: "Driving business growth through innovative strategies.",
      image: case5,
    },
    {
      title: "Better Trade Pay",
      category: "Web Development, UI/UX",
      description: "Driving business growth through innovative strategies.",
      image: case6,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Header */}
          <div className="inline-flex flex-col items-center mb-12">
            <h5 className="text-[#7E689A] text-sm font-medium uppercase tracking-wider mb-2 relative">
              Success in Action
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-12 bg-red-600"></span>
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
              You Can Customize Everything!
            </h2>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-sm transition-all duration-300 text-sm font-medium
                  ${
                    activeFilter === filter
                      ? "bg-red-600 text-white"
                      : "text-gray-600 hover:bg-red-600 hover:text-white"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {caseStudies.map((study, index) => (
            <div key={index} className="relative pb-24">
              {/* Image Container */}
              <div className="h-[300px] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Box */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-[85%] bg-white shadow-lg transition-all duration-300 hover:bg-gray-900">
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-2 group-hover:text-gray-300 transition-colors">
                    {study.category}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {study.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessInAction;

