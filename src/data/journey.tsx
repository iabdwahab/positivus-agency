import JourneyStep from "../components/journey_section/JourneyStep";

export const journeyList = [
  {
    id: 0,
    year: "2019",
    title: "The Beginning",
    description: "Positivus was founded to help businesses navigate the digital world and achieve online success.",
  },
  {
    id: 1,
    year: "2021",
    title: "Industry Recognition",
    description: "Positivus was named among the top 50 global digital agencies, affirming our leadership.",
  },
  {
    id: 2,
    year: "2023",
    title: "Innovation and Growth",
    description: "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.",
  },
  {
    id: 3,
    year: "2024",
    title: "Leading the Future",
    description: "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.",
  },
];

export const journeyElements = journeyList.map((journey) => <JourneyStep key={journey.id} title={journey.title} description={journey.description} year={journey.year} />);
