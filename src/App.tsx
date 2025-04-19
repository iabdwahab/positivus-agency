import CTASection from "./components/CTASection";
import Header from "./components/header/Index";
import LandingSection from "./components/LandingSection";
import ServicesSection from "./components/services/Index";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Header />
      <LandingSection />
      <Sponsors />
      <ServicesSection />
      <CTASection />
    </>
  );
}

export default App;
