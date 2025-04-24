function AwardCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gray rounded-4xl px-4 py-8 lg:px-8">
      <div>
        <img src={icon} alt="" className="mx-auto w-20" />
      </div>
      <h4 className="mt-8 mb-4 text-lg font-medium">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
export default AwardCard;
