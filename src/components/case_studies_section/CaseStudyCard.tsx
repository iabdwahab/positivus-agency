function CaseStudyCard({ title }: { title: string }) {
  return (
    <div>
      <p>{title}</p>
      <button className="text-primary hover:bg-primary hover:text-secondary duration-fast mt-4 flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2 transition">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 -rotate-[135deg]">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
export default CaseStudyCard;
