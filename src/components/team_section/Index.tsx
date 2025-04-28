import { teamMembersElements } from "../../data/team";
import SectionHeading from "../global/SectionHeading";

function TeamSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Team</SectionHeading.Title>
        <SectionHeading.Description>Meet the skilled and experienced team behind our successful digital marketing strategies.</SectionHeading.Description>
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{teamMembersElements}</div>
    </section>
  );
}
export default TeamSection;
