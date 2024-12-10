import AboutUs from "../Components/AboutUs/About";
import BusinessSolutions from "../Components/BusinessSolution/BusinessSolution";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import GetStarted from "../Components/GetStarted/GetStarted";
import FeaturesSection from "../Components/Hero/FeaturesSection";
import Hero from "../Components/Hero/Hero";
import MethodologySection from "../Components/MethodologySection/MethodologySection";


function Home() {
    return (
      <div >
        <Hero/>
        <FeaturesSection/>
        <CaseStudies />
      <BusinessSolutions />
      <MethodologySection/>
        <AboutUs/>
        
        <GetStarted/>
        
      </div>
    );
  }
  
  export default Home;
  

