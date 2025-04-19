import ServiceCard from "../components/services/ServiceCard";
import { serviceCardInterface } from "../types/services";

export const servicesList: serviceCardInterface[] = [
  {
    id: 0,
    titleFirst: "Search engine",
    titleSecond: "optimization",
    illustration: "/home/services/seo.svg",
    theme: "light",
  },
  {
    id: 1,
    titleFirst: "Pay-per-click",
    titleSecond: "advertising",
    illustration: "/home/services/advertising.svg",
    theme: "green",
  },
  {
    id: 2,
    titleFirst: "Social Media",
    titleSecond: "Marketing",
    illustration: "/home/services/social.svg",
    theme: "dark",
  },
  {
    id: 3,
    titleFirst: "Email",
    titleSecond: "Marketing",
    illustration: "/home/services/email.svg",
    theme: "light",
  },
  {
    id: 4,
    titleFirst: "Content",
    titleSecond: "Creation",
    illustration: "/home/services/content.svg",
    theme: "green",
  },
  {
    id: 5,
    titleFirst: "Analytics and",
    titleSecond: "Tracking",
    illustration: "/home/services/analytics.svg",
    theme: "dark",
  },
];

export const servicesElements = servicesList.map((service) => <ServiceCard {...service} />);
