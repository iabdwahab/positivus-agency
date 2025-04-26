import { homeCaseStudiesElements } from "../../data/homeCaseStudies";
import SectionHeading from "../global/SectionHeading";

function CaseStudies() {
  return (
    <section className="container">
      <SectionHeading>
        <SectionHeading.Title>Case Studies</SectionHeading.Title>
        <SectionHeading.Description>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</SectionHeading.Description>
      </SectionHeading>

      <div className="bg-secondary mb-8 grid gap-8 rounded-4xl p-10 text-white md:grid-cols-2 lg:grid-cols-3 lg:p-18">{homeCaseStudiesElements}</div>
    </section>
  );
}
export default CaseStudies;
