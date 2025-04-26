import AwardsSection from "../components/awards_section/Index";
import CoreValuesSection from "../components/core_values_section/Index";
import ImpactSection from "../components/impact_section/Index";
import JoinTeam from "../components/JoinTeam";
import JourneySection from "../components/journey_section/Index";
import AboutLanding from "../components/landing/AboutLanding";

function About() {
  return (
    <>
      <AboutLanding />
      <ImpactSection />
      <JourneySection />
      <CoreValuesSection />
      <AwardsSection />
      <JoinTeam />
    </>
  );
}
export default About;
