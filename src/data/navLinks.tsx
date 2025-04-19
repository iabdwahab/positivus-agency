export const navLinks = [
  {
    id: 0,
    name: "About us",
  },
  {
    id: 1,
    name: "Services",
  },
  {
    id: 2,
    name: "Use Cases",
  },
  {
    id: 3,
    name: "Pricing",
  },
  {
    id: 4,
    name: "Blog",
  },
];

export const navLinksElements = navLinks.map((link) => (
  <li key={link.id}>
    <a href="#" className="hover:bg-primary duration-fast flex h-full items-center justify-center rounded border border-transparent px-4 py-1 transition hover:border-black">
      {link.name}
    </a>
  </li>
));
