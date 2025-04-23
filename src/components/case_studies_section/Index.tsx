import SectionHeading from "../global/SectionHeading";
import CaseStudyCard from "./CaseStudyCard";

function CaseStudies() {
  return (
    <section className="container">
      <SectionHeading>
        <SectionHeading.Title>Case Studies</SectionHeading.Title>
        <SectionHeading.Description>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</SectionHeading.Description>
      </SectionHeading>

      <div className="bg-secondary mb-8 grid gap-8 rounded-4xl p-10 text-white md:grid-cols-2 lg:grid-cols-3 lg:p-18">
        <CaseStudyCard title="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
        <CaseStudyCard title="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
        <CaseStudyCard title="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
      </div>
    </section>
  );
}
export default CaseStudies;
