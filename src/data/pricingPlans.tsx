import PricingCard from "../components/pricing_section/PricingCard";

export const pricingPlansList = [
  {
    id: 0,
    title: "Basic",
    pricePerMonth: 500,
    features: ["Website optimization", "Social media setup and management (1 platform)", "Monthly progress report", "Email support", "Basic competitor analysis", "Initial SEO audit"],
  },
  {
    id: 1,
    title: "Pro",
    badge: "Popular",
    pricePerMonth: 1000,
    features: ["Includes all from the Basic plan", "Social media setup and management (up to 3 platforms)", "PPC and campaign management", "Email and phone support", "On-page SEO optimization", "Monthly content recommendations"],
    theme: "dark",
  },
  {
    id: 2,
    title: "Elite",
    pricePerMonth: 2000,
    features: ["Includes all from the Pro plan", "Website design and development", "Comprehensive SEO strategy", "Social media setup and management (up to 5 platforms)", "Content marketing strategy and implementation", "In-depth analytics and reporting"],
  },
];

export const pricingPlansElements = pricingPlansList.map((plan) => <PricingCard planDetails={plan}></PricingCard>);
