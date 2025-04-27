import { pricingFAQsElements } from "../../data/pricingFAQs";
import SectionHeading from "../global/SectionHeading";

function PricingFAQs() {
  return (
    <section className="section container">
      <SectionHeading>
        <SectionHeading.Title>Frequently Asked Question</SectionHeading.Title>
      </SectionHeading>

      <div className="grid gap-4">{pricingFAQsElements}</div>
    </section>
  );
}
export default PricingFAQs;
