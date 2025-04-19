export const navLinks = [
  {
    id: 0,
    name: 'About us',
  },
  {
    id: 1,
    name: 'Services',
  },
  {
    id: 2,
    name: 'Use Cases',
  },
  {
    id: 3,
    name: 'Pricing',
  },
  {
    id: 4,
    name: 'Blog',
  },
];

export const navLinksElements = navLinks.map((link) => (
  <li key={link.id}>
    <a href="#" className="flex justify-center items-center h-full py-1 px-4 hover:bg-primary border border-transparent hover:border-black transition duration-fast rounded">
      {link.name}
    </a>
  </li>
));
