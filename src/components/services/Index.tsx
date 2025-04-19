import { servicesElements } from "../../data/services";
import SectionHeading from "../global/SectionHeading";

function ServicesSection() {
  return (
    <section className="section container">
      <SectionHeading />
      <div className="grid gap-8 lg:grid-cols-2">{servicesElements}</div>
    </section>
  );
}
export default ServicesSection;
