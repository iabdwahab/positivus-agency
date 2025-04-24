import { impactElements } from "../../data/impact";
import SectionHeading from "../global/SectionHeading";

function ImpactSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Our Impact in Numbers</SectionHeading.Title>
        <SectionHeading.Description>A snapshot of the milestones and achievement that drive our success</SectionHeading.Description>{" "}
      </SectionHeading>

      <div className="flex flex-wrap [&>*]:flex-1">{impactElements}</div>
    </section>
  );
}
export default ImpactSection;
