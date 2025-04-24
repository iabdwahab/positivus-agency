import marketingIcon from "/awards/marketing.svg";
import webIcon from "/awards/web.svg";
import performanceIcon from "/awards/performance.svg";
import socialIcon from "/awards/social.svg";
import AwardCard from "../components/awards_section/AwardCard";

export const awardsList = [
  {
    id: 0,
    title: "Best Small Business Digital Marketing Agency.",
    description: "Celebrating our success in delivering innovative strategies and measurable result for small busines clients.",
    icon: marketingIcon,
  },
  {
    id: 1,
    title: "Innovative Web Design Agency",
    description: "Recognizing our commitment to creating stunning and user-friendly websites that drive engagement and conversions.",
    icon: webIcon,
  },
  {
    id: 2,
    title: "Top Performing PPC Campaign of the Year",
    description: "Honoring our exceptional performance in pay-per-click advertising, delivering outstanding results for our clients.",
    icon: performanceIcon,
  },
  {
    id: 3,
    title: "Best Social Media Marketing Agency",
    description: "Acknowledging our innovative approach to social media marketing and our ability to connect brands with their audiences.",
    icon: socialIcon,
  },
];

export const awardsElements = awardsList.map((award) => <AwardCard key={award.id} title={award.title} description={award.description} icon={award.icon} />);
