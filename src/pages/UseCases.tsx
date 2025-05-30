import CTASection from "../components/CTASection";
import LandingCard from "../components/landing/LandingCard";
import SuccessStoriesSection from "../components/success_stories/Index";

import landingImage from "/usecases/landing.svg";

function UseCases() {
  return (
    <>
      <LandingCard>
        <LandingCard.Heading text="Proven Success Stories" />
        <LandingCard.Description text="Discover how we've helped individuals and businesses achieve their goals through our tailored solutions. These real-world success stories showcase the impact of our dedication, expertise, and commitment to excellence." />
        <LandingCard.Image src={landingImage} />
      </LandingCard>
      <SuccessStoriesSection />
      <CTASection theme="green" title="Let's Create Your Next Success Story" description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online." />
    </>
  );
}
export default UseCases;
