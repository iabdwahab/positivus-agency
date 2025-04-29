import ctaImageLight from "/global/cta-for-light.svg";
import ctaImageGreen from "/global/cta-for-green.svg";

function CTASection({ title, description, theme = "white" }: { title: string; description: string; theme?: "green" | "white" }) {
  return (
    <section className="section container">
      <div className={`${theme === "green" ? "bg-primary" : "bg-gray"} relative flex items-center rounded-xl p-8 md:p-16`}>
        <div className="flex flex-1 flex-col gap-8">
          <h3 className="text-3xl font-medium">{title}</h3>
          <p>{description}</p>
          <button className="bg-secondary hover:bg-primary hover:border-secondary duration-normal hover:text-secondary cursor-pointer rounded-xl border border-transparent px-8 py-4 text-white transition md:w-fit">Get your free proposal</button>
        </div>

        <div className="flex flex-1 items-start justify-center max-md:hidden">
          <img src={theme === "green" ? ctaImageGreen : ctaImageLight} alt="Illustration" className="absolute top-1/2 max-h-96 w-full max-w-sm -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
export default CTASection;
