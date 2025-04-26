import CaseStudyCard from "../components/case_studies_section/CaseStudyCard";

export const homeCaseStudiesList = [
  {
    id: 0,
    description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 1,
    description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 2,
    description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export const homeCaseStudiesElements = homeCaseStudiesList.map((caseStudy) => <CaseStudyCard key={caseStudy.id} description={caseStudy.description} />);
