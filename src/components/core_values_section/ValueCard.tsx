function ValueCard({ title, description, illustration }: { title: string; description: string; illustration?: string }) {
  return (
    <div className={`[&:nth-child(3n+1)]:bg-secondary duration-fast group flex items-center gap-2 rounded-3xl border border-b-4 p-8 max-lg:flex-col [&:nth-child(3n+1)]:text-white [&>*]:flex-1`}>
      <div className="grid content-start gap-6">
        <h3 className="text-2xl font-medium">{title}</h3>
        <hr className="" />
        <p>{description}</p>
      </div>

      <div>
        <img src={illustration} alt="Illustration" className="w-full" />
      </div>
    </div>
  );
}
export default ValueCard;
