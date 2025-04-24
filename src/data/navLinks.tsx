import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: 0,
    name: "About us",
    url: "about",
  },
  {
    id: 1,
    name: "Services",
    url: "services",
  },
  {
    id: 2,
    name: "Use Cases",
    url: "use-cases",
  },
  {
    id: 3,
    name: "Pricing",
    url: "pricing",
  },
  {
    id: 4,
    name: "Blog",
    url: "blog",
  },
];

export const navLinksHeaderElements = navLinks.map((link) => (
  <li key={link.id}>
    <Link to={link.url} className="hover:bg-primary duration-fast flex h-full items-center justify-center rounded border border-transparent px-4 py-1 transition hover:border-black">
      {link.name}
    </Link>
  </li>
));

export const navLinksFooterElements = navLinks.map((link) => (
  <li key={link.id}>
    <Link to={link.url} className="border-b py-1 text-lg text-white hover:opacity-70">
      {link.name}
    </Link>
  </li>
));
