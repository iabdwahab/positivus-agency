import { servicesElements } from "../../data/services";
import SectionHeading from "../global/SectionHeading";

function ServicesSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Services</SectionHeading.Title>
        <SectionHeading.Description>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</SectionHeading.Description>
      </SectionHeading>
      <div className="grid gap-8 lg:grid-cols-2">{servicesElements}</div>
    </section>
  );
}
export default ServicesSection;
