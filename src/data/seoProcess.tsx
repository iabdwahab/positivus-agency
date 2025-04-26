import SEOServiceCard from "../components/seo_process_section/SEOServiceCard";

export const seoProcessList = [
  {
    id: 0,
    title: "Website Audit & Analysis",
    description: "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
  },
  {
    id: 1,
    title: "Keyword Research",
    description: "We conduct thorough keyword research to identify the most relevant and high-traffic keywords for your business, ensuring that we target the right audience.",
  },
  {
    id: 2,
    title: "On-Page Optimization",
    description: "We optimize your website's content, meta tags, and structure to ensure it is search engine friendly and provides a great user experience.",
  },
  {
    id: 3,
    title: "Content Creation",
    description: "We create high-quality, engaging content that resonates with your target audience and aligns with your SEO strategy.",
  },
  {
    id: 4,
    title: "Link Building",
    description: "We implement a strategic link-building campaign to improve your website's authority and visibility in search engine results.",
  },
  {
    id: 5,
    title: "Performance Tracking & Reporting",
    description: "We continuously monitor your website's performance and provide regular reports to track progress and make data-driven adjustments.",
  },
];

export const seoProcessListElements = seoProcessList.map((process, index) => <SEOServiceCard key={process.id} index={index} title={process.title} description={process.description} />);
