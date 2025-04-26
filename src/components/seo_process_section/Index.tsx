import { seoProcessListElements } from "../../data/seoProcess";
import SectionHeading from "../global/SectionHeading";

function SEOProcessSection() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>How We Work: SEO Process</SectionHeading.Title>
        <SectionHeading.Description>Our step-by-step SEO porcess ensures your website ranks higher, attracts more traffic, and drives lasting results.</SectionHeading.Description>
      </SectionHeading>

      <div className="flex flex-col gap-4">{seoProcessListElements}</div>
    </section>
  );
}
export default SEOProcessSection;
