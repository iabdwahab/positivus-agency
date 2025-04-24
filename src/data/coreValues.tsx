import ValueCard from "../components/core_values_section/ValueCard";

import successIllustration from "/about/success.svg";
import innovationIllustration from "/about/innovation.svg";
import collaborationIllustration from "/about/collaboration.svg";
import transparencyIllustration from "/about/transparency.svg";

export const coreValuesList = [
  {
    id: 0,
    title: "Client Success First",
    description: "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.",
    illustration: successIllustration,
  },
  {
    id: 1,
    title: "Innovation",
    description: "We are committed to staying ahead of the curve by embracing new technologies and methodologies. Our team is always exploring innovative solutions to deliver the best results for our clients.",
    illustration: innovationIllustration,
  },
  {
    id: 2,
    title: "Collaboration",
    description: "We believe in the power of teamwork. Our collaborative approach ensures that we leverage the strengths of our diverse team to deliver exceptional results.",
    illustration: collaborationIllustration,
  },
  {
    id: 3,
    title: "Transparency",
    description: "We value open communication and transparency in all our interactions. We keep our clients informed every step of the way, ensuring that they are always in the loop.",
    illustration: transparencyIllustration,
  },
];

export const coreValuesListElements = coreValuesList.map((value) => <ValueCard key={value.id} title={value.title} description={value.description} illustration={value.illustration} />);
