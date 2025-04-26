import SectionHeading from "../global/SectionHeading";
import ContactForm from "./ContactForm";
import illustration from "/global/contact-illustration.svg";

function ContactSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Contact Us</SectionHeading.Title>
        <SectionHeading.Description>Connect with Us: Let's Discuss Your Digital Marketing Needs</SectionHeading.Description>
      </SectionHeading>

      <div className="bg-gray relative grid overflow-hidden rounded-2xl px-6 py-10 md:px-10 lg:grid-cols-2">
        <ContactForm />
        <div className="max-lg:hidden">
          <img src={illustration} alt="" className="absolute top-0 right-0 h-full translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
