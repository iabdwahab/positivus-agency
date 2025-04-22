import amazonImage from "/sponsors/amazon.svg";
import dribbbleImage from "/sponsors/dribbble.svg";
import hubspotImage from "/sponsors/hubspot.svg";
import netflixImage from "/sponsors/netflix.svg";
import notionImage from "/sponsors/notion.svg";
import zoomImage from "/sponsors/zoom.svg";

export const sponsors = [
  {
    id: 0,
    url: amazonImage,
    alt: "Amazon",
  },
  {
    id: 1,
    url: dribbbleImage,
    alt: "Dribbble",
  },
  {
    id: 2,
    url: hubspotImage,
    alt: "Hubspot",
  },
  {
    id: 3,
    url: netflixImage,
    alt: "Netflix",
  },
  {
    id: 4,
    url: notionImage,
    alt: "Notion",
  },
  {
    id: 5,
    url: zoomImage,
    alt: "Zoom",
  },
];

export const sponsorsElements = sponsors.map((sponsor) => (
  <div key={sponsor.id} className="mx-auto flex justify-center text-center">
    <img src={sponsor.url} alt={sponsor.alt} className="duration-normal w-full grayscale transition hover:grayscale-0" />
  </div>
));
