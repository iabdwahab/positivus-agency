import CaseStudies from "../components/case_studies_section/Index";
import ContactSection from "../components/contact_section/Index";
import CTASection from "../components/CTASection";
import LandingSection from "../components/landing/HomeLanding";
import ServicesSection from "../components/services_section/Index";
import Sponsors from "../components/Sponsors";
import WorkingProcess from "../components/working_process/Index";
import { homeCaseStudiesElements } from "../data/homeCaseStudies";

function Home() {
  return (
    <>
      <LandingSection />
      <Sponsors />
      <ServicesSection />
      <CTASection />
      <CaseStudies caseStudiesElements={homeCaseStudiesElements} />
      <WorkingProcess />
      <ContactSection />
    </>
  );
}
export default Home;
