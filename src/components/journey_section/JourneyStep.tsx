import icon from "/logo-notext.svg";
import threeCircles from "/global/three-circles.svg";

function JourneyStep({ title, description, year }: { title: string; description: string; year: string }) {
  return (
    <div className="flex items-stretch lg:items-center [&:nth-child(even)]:flex-row-reverse [&>*]:flex-1">
      <div className="max-lg:hidden">
        <img src={threeCircles} alt="Illustration" className="mx-auto" />
      </div>
      <div className="flex w-fit gap-4 max-lg:flex-col">
        <h3 className="text-4xl font-bold lg:pt-10">{year}</h3>

        <div className="bg-secondary grid flex-1 grid-cols-[auto_1fr] items-center gap-4 rounded-3xl p-10 text-white max-md:p-6">
          <div>
            <img src={icon} alt="Icon" className="w-6 md:w-8" />
          </div>

          <div>
            <h3 className="text-xl">{title}</h3>
          </div>

          <div className="bg-primary mx-auto h-full w-[2px]"></div>

          <div>
            <p className="max-w-3/4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JourneyStep;
