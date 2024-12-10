import AboutUs from "../Components/AboutUs/About";
import BusinessSolutions from "../Components/BusinessSolution/BusinessSolution";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import GetStarted from "../Components/GetStarted/GetStarted";

function Home() {
  return (
    <div>
      <CaseStudies />
      <BusinessSolutions />
      <AboutUs />
      <GetStarted />
    </div>
  );
}

export default Home;
