import AwardsSection from "../components/awards_section/Index";
import CoreValuesSection from "../components/core_values_section/Index";
import ImpactSection from "../components/impact_section/Index";
import JoinTeam from "../components/JoinTeam";
import JourneySection from "../components/journey_section/Index";
import LandingCard from "../components/landing/LandingCard";
import landingImage from "/about/landing.svg";

function About() {
  return (
    <>
      <LandingCard>
        <LandingCard.Image src={landingImage} />
        <LandingCard.Heading text="Together for Success" />
        <LandingCard.Description text="At positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success." />
      </LandingCard>

      <ImpactSection />
      <JourneySection />
      <CoreValuesSection />
      <AwardsSection />
      <JoinTeam />
    </>
  );
}
export default About;
