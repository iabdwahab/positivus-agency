import illustration from "/usecases/success-story.svg";

function SuccessStoriesSection() {
  return (
    <section className="section container">
      <div className="bg-secondary grid gap-4 rounded-lg p-6 text-white lg:grid-cols-2 lg:p-10">
        <div className="flex flex-col justify-center gap-10">
          <h2 className="bg-primary text-secondary w-fit rounded-md px-2 py-1 text-3xl font-bold max-lg:text-center">Featured Success Story</h2>
          <h3 className="text-2xl">Scaling Success for a Leading E-Commerce Brand</h3>
          <p className="text-left">We helped this e-commerce client achieve a 140% increase in organic traffic and 90% growth in conversions through our comprehensive digital marketing strategy, combining SEO optimization, targeted PPC campaigns, and social media marketing.</p>
          <button className="border-primary group duration-normal hover:bg-primary flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border px-4 py-2 max-lg:mx-auto md:w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="group-hover:bg-secondary group-hover:text-primary text-secondary bg-primary size-10 rotate-180 rounded-full p-2">
              <path fillRule="evenodd" d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            <span className="text-primary text-md group-hover:text-secondary">Read More</span>
          </button>
        </div>

        <div>
          <img src={illustration} alt="Illustration" className="max-h-96 w-full" />
        </div>
      </div>
    </section>
  );
}
export default SuccessStoriesSection;
