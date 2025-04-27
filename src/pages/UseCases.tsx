import LandingCard from "../components/landing/LandingCard";

import landingImage from "/usecases/landing.svg";

function UseCases() {
  return (
    <>
      <LandingCard>
        <LandingCard.Heading text="Proven Success Stories" />
        <LandingCard.Description text="Discover how we've helped individuals and businesses achieve their goals through our tailored solutions. These real-world success stories showcase the impact of our dedication, expertise, and commitment to excellence." />
        <LandingCard.Image src={landingImage} />
      </LandingCard>
    </>
  );
}
export default UseCases;
