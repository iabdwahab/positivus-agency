import ImpactCard from "../components/impact_section/ImpactCard";

export const impactList = [
  {
    id: 0,
    title: "Years of Experience",
    value: "8+",
  },
  {
    id: 1,
    title: "Experts",
    value: "50+",
  },
  {
    id: 2,
    title: "Successful Campaigns",
    value: "100+",
  },
  {
    id: 3,
    title: "Industry Awards",
    value: "20+",
  },
  {
    id: 4,
    title: "ROI for our clients",
    value: "500%",
  },
];

export const impactElements = impactList.map((impact) => <ImpactCard key={impact.id} title={impact.title} value={impact.value} />);
