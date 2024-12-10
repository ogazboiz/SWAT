import AboutUs from "../Components/AboutUs/About";
import GetStarted from "../Components/GetStarted/GetStarted";
import FeaturesSection from "../Components/Hero/FeaturesSection";
import Hero from "../Components/Hero/Hero";

function Home() {
    return (
      <div >
        <Hero/>
        <FeaturesSection/>
        <AboutUs/>
        
        <GetStarted/>
        
      </div>
    );
  }
  
  export default Home;
  