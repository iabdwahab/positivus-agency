import CaseStudies from "./components/case_studies_section/Index";
import CTASection from "./components/CTASection";
import Header from "./components/header/Index";
import LandingSection from "./components/LandingSection";
import ServicesSection from "./components/services/Index";
import Sponsors from "./components/Sponsors";
import WorkingProcess from "./components/working_process/Index";

function App() {
  return (
    <>
      <Header />
      <LandingSection />
      <Sponsors />
      <ServicesSection />
      <CTASection />
      <CaseStudies />
      <WorkingProcess />
    </>
  );
}

export default App;
