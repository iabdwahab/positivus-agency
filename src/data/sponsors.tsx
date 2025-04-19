export const sponsors = [
  {
    id: 0,
    url: "/sponsors/amazon.svg",
    alt: "Amazon",
  },
  {
    id: 1,
    url: "/sponsors/dribbble.svg",
    alt: "Dribbble",
  },
  {
    id: 2,
    url: "/sponsors/hubspot.svg",
    alt: "Hubspot",
  },
  {
    id: 3,
    url: "/sponsors/netflix.svg",
    alt: "Netflix",
  },
  {
    id: 4,
    url: "/sponsors/notion.svg",
    alt: "Notion",
  },
  {
    id: 5,
    url: "/sponsors/zoom.svg",
    alt: "Zoom",
  },
];

export const sponsorsElements = sponsors.map((sponsor) => (
  <div key={sponsor.id} className="mx-auto flex justify-center text-center">
    <img src={sponsor.url} alt={sponsor.alt} className="duration-normal w-full grayscale transition hover:grayscale-0" />
  </div>
));
// export const sponsorsElements = sponsors.map((sponsor) => (
