import { journeyElements } from "../../data/journey";
import SectionHeading from "../global/SectionHeading";

function JourneySection() {
  return (
    <section className="container">
      <SectionHeading>
        <SectionHeading.Title>Our Journey</SectionHeading.Title>
        <SectionHeading.Description>From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide.</SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">{journeyElements}</div>
    </section>
  );
}
export default JourneySection;
