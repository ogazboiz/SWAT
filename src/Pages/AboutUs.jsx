import MissionVisionSection from "../Components/Aboutcomponent/MissionVisionSection";
import StatsSection2 from "../Components/Aboutcomponent/StatSection2";
import TeamSection from "../Components/Aboutcomponent/TeamSection";
import About from "../Components/AboutUs/About";
import Header from "../Components/Header/Header";
import bg from "../Assets/Images/strat.png";

function AboutUs() {
  return (
    <div>
      <Header
        title="About Us"
        subtitle="This is where imagination meets innovation & passion"
        backgroundImage={bg}
      />
      <About />
      <MissionVisionSection />
      <StatsSection2 />
      <TeamSection />
    </div>
  );
}

export default AboutUs;
