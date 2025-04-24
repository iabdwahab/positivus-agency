import CoreValuesSection from "../components/core_values_section/Index";
import ImpactSection from "../components/impact_section/Index";
import JourneySection from "../components/journey_section/Index";
import AboutLanding from "../components/landing/AboutLanding";

function About() {
  return (
    <>
      <AboutLanding />
      <ImpactSection />
      <JourneySection />
      <CoreValuesSection />
    </>
  );
}
export default About;
