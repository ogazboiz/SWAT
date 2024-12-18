import React, { useEffect, useState, useRef, useMemo } from "react";

const StatsSection = () => {
  const statsData = useMemo(
    () => [
      { id: 1, endValue: 10, label: "Happy Clients" },
      { id: 2, endValue: 69, label: "Useful Programs" },
      { id: 3, endValue: 7, label: "Years Of Experience", suffix: "Y" },
    ],
    [] // statsData remains constant and won't recompute
  );

  const [counts, setCounts] = useState(statsData.map(() => 0)); // Initialize counts
  const [hasAnimated, setHasAnimated] = useState(false); // To ensure animation runs only once
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Trigger animation when in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const currentSection = sectionRef.current; // Capture the current value of sectionRef
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // Cleanup observer
      }
    };
  }, [hasAnimated]);

  // Animate numbers when the section is in view
  useEffect(() => {
    if (hasAnimated) {
      const animations = statsData.map((stat, index) => {
        let start = 0;
        const { endValue } = stat;
        const duration = 1000; // Total animation duration in ms
        const frameRate = 16; // ~60fps
        const totalFrames = duration / frameRate; // Total frames for animation
        const increment = endValue / totalFrames; // Increment per frame

        const animate = () => {
          start += increment;

          if (start >= endValue) {
            setCounts((prev) => {
              const updatedCounts = [...prev];
              updatedCounts[index] = endValue; // Set final value explicitly
              return updatedCounts;
            });
            return; // Stop animation
          }

          setCounts((prev) => {
            const updatedCounts = [...prev];
            updatedCounts[index] = Math.min(Math.ceil(start), endValue); // Ensure no overshoot
            return updatedCounts;
          });

          requestAnimationFrame(animate); // Continue animation
        };

        return requestAnimationFrame(animate);
      });

      // Cleanup on unmount
      return () => animations.forEach((animation) => cancelAnimationFrame(animation));
    }
  }, [hasAnimated, statsData]);

  return (
    <div
      ref={sectionRef}
      className="max-w-[1280px] mx-auto px-5 2xl:h-[208px]"
    >
      <div className="relative py-12 text-white bg-[#150529] lg:h-[208.4px]">
        <div className="container flex items-center justify-around mt-4">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center font-sanss lg:text-[54.14px]"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-[54.14px] font-bold">
                {counts[index]}
                {stat.suffix && (
                  <span className="lg:text-[4rem]">{stat.suffix}</span>
                )}
                <sup>+</sup>
              </h2>
              <p className="mt-2 text-[13px] lg:text-[16px]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EC0112]"></div>
      </div>
    </div>
  );
};

export default StatsSection;
