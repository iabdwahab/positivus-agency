import ServiceCard from "../components/services/ServiceCard";
import { serviceCardInterface } from "../types/services";

import seoImage from "/home/services/seo.svg";
import advertisingImage from "/home/services/advertising.svg";
import sociaImage from "/home/services/social.svg";
import emailImage from "/home/services/email.svg";
import contentImage from "/home/services/content.svg";
import analyticsImage from "/home/services/analytics.svg";

export const servicesList: serviceCardInterface[] = [
  {
    id: 0,
    titleFirst: "Search engine",
    titleSecond: "optimization",
    illustration: seoImage,
    theme: "light",
  },
  {
    id: 1,
    titleFirst: "Pay-per-click",
    titleSecond: "advertising",
    illustration: advertisingImage,
    theme: "green",
  },
  {
    id: 2,
    titleFirst: "Social Media",
    titleSecond: "Marketing",
    illustration: sociaImage,
    theme: "dark",
  },
  {
    id: 3,
    titleFirst: "Email",
    titleSecond: "Marketing",
    illustration: emailImage,
    theme: "light",
  },
  {
    id: 4,
    titleFirst: "Content",
    titleSecond: "Creation",
    illustration: contentImage,
    theme: "green",
  },
  {
    id: 5,
    titleFirst: "Analytics and",
    titleSecond: "Tracking",
    illustration: analyticsImage,
    theme: "dark",
  },
];

export const servicesElements = servicesList.map((service) => <ServiceCard key={service.id} {...service} />);
