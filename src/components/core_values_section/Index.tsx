import { coreValuesListElements } from "../../data/coreValues";
import SectionHeading from "../global/SectionHeading";

function CoreValuesSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Core Values</SectionHeading.Title>
        <SectionHeading.Description>At the heart of everything we do are our core values:</SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2">{coreValuesListElements}</div>
    </section>
  );
}
export default CoreValuesSection;
