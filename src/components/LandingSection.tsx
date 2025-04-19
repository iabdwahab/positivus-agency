function LandingSection() {
  return (
    <main className="container grid items-center justify-center gap-6 py-3 max-lg:text-center lg:grid-cols-2 lg:gap-18">
      <div className="order-2 flex flex-col gap-6 lg:order-1 lg:gap-8">
        <h1 className="text-4xl font-medium max-lg:text-center lg:text-6xl">Navigating the digital landscape for success</h1>
        <p className="text-lg">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className="bg-secondary hover:bg-primary duration-fast w-full cursor-pointer rounded-lg border border-transparent px-8 py-4 text-lg text-white transition hover:border-black hover:text-black lg:w-fit">Book a consultation</button>
      </div>

      <div className="order-1 lg:order-2">
        <img src="/home/landing.svg" alt="Illustration" className="w-full" />
      </div>
    </main>
  );
}
export default LandingSection;
