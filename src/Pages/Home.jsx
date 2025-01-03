import About from "../Components/AboutUs/About";
import BusinessSolutions from "../Components/BusinessSolution/BusinessSolution";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import GlobalLeader from "../Components/GlobalLeader/GlobalLeader";
import FeaturesSection from "../Components/Hero/FeaturesSection";
import Hero from "../Components/Hero/Hero";
import MethodologySection from "../Components/MethodologySection/MethodologySection";
import StatsSection from "../Components/StatsSection/StatsSection";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <About />
      <BusinessSolutions />
      <MethodologySection />
      <GlobalLeader />
      <StatsSection />
      <CaseStudies />
    </div>
  );
}

export default Home;
