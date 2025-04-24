import Illustration from "/about/innovation.svg";

function ValueCard() {
  return (
    <div className="grid gap-2 rounded-3xl border border-b-4 p-8 lg:grid-cols-2">
      <div className="grid content-start gap-6">
        <h3 className="text-2xl font-medium">Client Success First</h3>
        <hr className="border-secondary" />
        <p>We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.</p>
      </div>

      <div>
        <img src={Illustration} alt="Illustration" className="w-full" />
      </div>
    </div>
  );
}
export default ValueCard;
