function SectionHeading({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 flex items-center gap-8 py-8 max-lg:flex-col">{children}</div>;
}

SectionHeading.Title = function ({ children }: { children: string }) {
  return <h2 className="bg-primary w-fit rounded-lg px-3 py-1 text-4xl font-medium">{children}</h2>;
};

SectionHeading.Description = function ({ children }: { children: string }) {
  return <p className="leading-snug max-lg:text-center lg:max-w-1/2">{children}</p>;
};

export default SectionHeading;
