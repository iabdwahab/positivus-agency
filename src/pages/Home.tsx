import CaseStudies from "../components/case_studies_section/Index";
import ContactSection from "../components/contact_section/Index";
import CTASection from "../components/CTASection";
import LandingSection from "../components/LandingSection";
import ServicesSection from "../components/services/Index";
import Sponsors from "../components/Sponsors";
import WorkingProcess from "../components/working_process/Index";

function Home() {
  return (
    <>
      <LandingSection />
      <Sponsors />
      <ServicesSection />
      <CTASection />
      <CaseStudies />
      <WorkingProcess />
      <ContactSection />
    </>
  );
}
export default Home;
