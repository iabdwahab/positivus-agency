import Accordion from "../components/working_process/Accordion";

export const workingProcessList = [
  {
    id: 0,
    title: "Consultation",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 1,
    title: "Research and Strategy Development",
    description: "We will conduct thorough research on your industry, competitors, and target audience to develop a comprehensive marketing strategy. This strategy will outline the best approaches to achieve your goals and maximize your return on investment.",
  },
  {
    id: 2,
    title: "Implementation",
    description: "Once the strategy is approved, we will begin implementing the marketing plan. This may include creating content, launching ad campaigns, optimizing your website, and more. Our team will work diligently to ensure that all aspects of the plan are executed effectively.",
  },
  {
    id: 3,
    title: "Monitoring and Optimization",
    description: "We will continuously monitor the performance of your marketing campaigns and make adjustments as needed. This includes analyzing data, tracking key performance indicators (KPIs), and optimizing strategies to ensure that you are getting the best results possible.",
  },
  {
    id: 4,
    title: "Reporting and Communication",
    description: "We believe in transparency and open communication with our clients. We will provide regular reports on the performance of your campaigns, including insights and recommendations for future improvements. Our team is always available to answer any questions or concerns you may have.",
  },
  {
    id: 5,
    title: "Continual Improvement",
    description: "Digital marketing is an ongoing process, and we are committed to helping you achieve long-term success. We will work with you to continually refine and improve your marketing strategies, ensuring that you stay ahead of the competition and continue to meet your business goals.",
  },
];

export const workingProcessElements = workingProcessList.map((step, index) => <Accordion key={step.id} data={step} index={index} />);
