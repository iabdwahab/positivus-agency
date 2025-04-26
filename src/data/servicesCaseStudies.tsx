import CaseStudyCard from "../components/case_studies_section/CaseStudyCard";

export const servicesCaseStudiesList = [
  {
    id: 0,
    title: "E-commerce Fashoin Brand",
    description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 1,
    title: "Local Restaurant Chain",
    description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 2,
    title: "Healthcare Provider",
    description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export const servicesCaseStudiesElements = servicesCaseStudiesList.map((caseStudy) => <CaseStudyCard key={caseStudy.id} title={caseStudy.title} description={caseStudy.description} />);
