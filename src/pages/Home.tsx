import CaseStudies from "../components/case_studies_section/Index";
import ContactSection from "../components/contact_section/Index";
import CTASection from "../components/CTASection";
import LandingSection from "../components/landing/HomeLanding";
import ServicesSection from "../components/services_section/Index";
import Sponsors from "../components/Sponsors";
import TeamSection from "../components/team_section/Index";
import WorkingProcess from "../components/working_process/Index";
import { homeCaseStudiesElements } from "../data/homeCaseStudies";

function Home() {
  return (
    <>
      <LandingSection />
      <Sponsors />
      <ServicesSection />
      <CTASection theme="white" title="Let's make things happen" description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online." />
      <CaseStudies caseStudiesElements={homeCaseStudiesElements} />
      <WorkingProcess />
      <TeamSection />
      <ContactSection />
    </>
  );
}
export default Home;
