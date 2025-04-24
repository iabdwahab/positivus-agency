import JourneyStepCard from "./JourneyStepCard";
import JourneyStepIllustration from "./JourneyStepIllustration";

function JourneyStep({ title, description, year }: { title: string; description: string; year: string }) {
  return (
    <div className="flex items-stretch lg:items-center [&:nth-child(even)]:flex-row-reverse [&>*]:flex-1">
      <JourneyStepIllustration />

      <div className="flex w-fit gap-4 max-lg:flex-col">
        <h3 className="text-4xl font-bold lg:pt-10">{year}</h3>
        <JourneyStepCard title={title} description={description} />
      </div>
    </div>
  );
}
export default JourneyStep;
