import { awardsElements } from "../../data/awards";
import SectionHeading from "../global/SectionHeading";

function AwardsSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Awards & Recognition</SectionHeading.Title>
        <SectionHeading.Description>At Positivus, our commitment to excelience has been recognized by industry leaders. Here are some of our products achievements:</SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-4 text-center md:grid-cols-2 lg:grid-cols-4">{awardsElements}</div>
    </section>
  );
}
export default AwardsSection;
