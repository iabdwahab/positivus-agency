import PricingCard from "./PricingCard";

function PricingSection() {
  return (
    <section className="section container">
      <div className="mb-8 pb-10 text-center">
        <h2 className="mb-4 text-5xl font-medium md:text-6xl">Pricing Plans</h2>
        <p className="mx-auto max-w-4xl text-lg">Choose a plan that fits your needs. Whether you're a small business or a large enterprise, we have the perfect solution for you.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
}
export default PricingSection;
