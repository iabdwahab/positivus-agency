import { addLeadingZero } from "../../utils/numbers";
import icon from "/global/logo-icon-dark.svg";

function SEOServiceCard({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <div className="bg-gray grid grid-cols-[60px_1fr] gap-4 rounded-4xl px-5 py-8 md:grid-cols-[110px_1fr] md:gap-10 md:px-10">
      <div className="relative h-fit">
        <img src={icon} alt="Icon" className="w-full" />
        <span className="text-primary absolute top-1/2 left-1/2 -translate-1/2 text-lg font-bold md:text-5xl">{addLeadingZero(index + 1)}</span>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default SEOServiceCard;
