import Accordion from "../components/global/Accordion";

export const pricingFAQsList = [
  {
    id: 0,
    title: "Are there any additional fees or charges that may apply?",
    description: "No, there are no hidden fees or additional charges. The price you see is the price you pay.",
  },
  {
    id: 1,
    title: "Can I charge or cancel my plan at any time?",
    description: "Yes, you can upgrade, downgrade, or cancel your plan at any time without any penalties.",
  },
  {
    id: 2,
    title: "Do you offer a free trial or consultation?",
    description: "Yes, we offer a free trial for 14 days. You can also schedule a consultation with our team.",
  },
  {
    id: 3,
    title: "How do you bill and invoice your clients?",
    description: "We bill monthly or annually, depending on your preference. Invoices are sent via email and can be paid online.",
  },
  {
    id: 4,
    title: "Are your services guranteed to deliver results?",
    description: "While we strive to deliver the best results, we cannot guarantee specific outcomes as they depend on various factors.",
  },
  {
    id: 5,
    title: "Do you offer contract-based or monthly retainer-based pricing?",
    description: "We offer both contract-based and monthly retainer options. You can choose the one that best fits your needs.",
  },
];

export const pricingFAQsElements = pricingFAQsList.map((step, index) => <Accordion key={step.id} data={step} index={index} />);
