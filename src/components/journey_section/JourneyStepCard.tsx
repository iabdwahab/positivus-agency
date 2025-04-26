import icon from "/global/logo-icon-light.svg";

function JourneyStepCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-secondary grid flex-1 grid-cols-[auto_1fr] items-center gap-4 rounded-3xl p-10 text-white max-md:p-8">
      <img src={icon} alt="Icon" className="w-6 md:w-8" />
      <h3 className="text-xl">{title}</h3>
      {/* Vertical Line */}
      <div className="bg-primary mx-auto h-full w-[2px]"></div>
      <p className="max-w-3/4">{description}</p>
    </div>
  );
}
export default JourneyStepCard;
