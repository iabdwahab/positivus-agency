import CaseStudies from "../components/case_studies_section/Index";
import LandingCard from "../components/landing/LandingCard";
import SEOProcessSection from "../components/seo_process_section/Index";
import SEOService from "../components/SEOService";
import { servicesCaseStudiesElements } from "../data/servicesCaseStudies";

import landingIllustration from "/services/landing.svg";

function Services() {
  return (
    <>
      <LandingCard>
        <LandingCard.Heading text="Expert Digital Marketing Services" />
        <LandingCard.Description text="We offer a wide range of digital marketing services to help your business grow online. Our team of experts is dedicated to providing you with the best solutions tailored to your needs." />
        <LandingCard.Image src={landingIllustration} />
      </LandingCard>

      <SEOService />
      <SEOProcessSection />
      <CaseStudies caseStudiesElements={servicesCaseStudiesElements} />
    </>
  );
}
export default Services;
