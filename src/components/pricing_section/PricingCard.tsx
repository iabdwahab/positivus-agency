import { pricingPlansCardInterface } from "../../types/pricingPlansCard";
import FeaturesContainer from "./FeaturesContainer";

function PricingCard({ planDetails }: { planDetails: pricingPlansCardInterface }) {
  const { title, badge, pricePerMonth, features, theme } = planDetails;

  const isDarkTheme = theme === "dark";

  return (
    <div className={`${isDarkTheme ? "bg-secondary text-white" : "border-secondary text-secondary bg-white"} rounded-3xl border border-b-4 px-6 pt-6 pb-20 font-medium`}>
      <div className="flex items-center justify-between">
        <h3 className="text-4xl">{title} Plan</h3>
        {badge && <span className={`text-secondary bg-primary rounded-xl px-4 py-1`}>{badge}</span>}
      </div>

      <div className="mt-5 mb-8 flex items-end gap-2">
        <h4 className="text-5xl font-bold">${pricePerMonth}</h4>
        <span>/month</span>
      </div>

      <div className="grid grid-rows-[50px_50px] gap-2">
        <button className={`${isDarkTheme ? "bg-primary text-secondary hover:bg-secondary hover:text-primary" : "bg-secondary border-secondary hover:bg-primary hover:text-secondary text-white"} duration-normal cursor-pointer rounded-xl border`}>Get Started</button>
        <button className={`${isDarkTheme ? "bg-secondary hover:text-secondary text-white hover:bg-white" : "hover:bg-primary text-secondary"} duration-normal cursor-pointer rounded-xl border`}>Request a quote</button>
      </div>

      <hr className="my-8" />

      <FeaturesContainer features={features} />
    </div>
  );
}
export default PricingCard;
