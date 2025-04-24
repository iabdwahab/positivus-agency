function ImpactCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="relative p-[1px]">
      <span className="absolute top-0 left-0 -z-10 block h-1/3 w-full rounded-xl bg-black"></span>
      <div className="min-h-30 rounded-xl bg-white p-6">
        <h4 className="text-4xl font-bold">{value}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
}
export default ImpactCard;
