import { workingProcessElements } from "../../data/workingProcess";
import SectionHeading from "../global/SectionHeading";

function WorkingProcess() {
  return (
    <section className="container mb-4">
      <SectionHeading>
        <SectionHeading.Title>Our Working Process</SectionHeading.Title>
        <SectionHeading.Description>Step-by-Step Guide to Achieving Your Business Goals</SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-4">{workingProcessElements}</div>
    </section>
  );
}
export default WorkingProcess;
