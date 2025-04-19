function LandingSection() {
  return (
    <main className="container grid lg:grid-cols-2 max-lg:text-center justify-center items-center gap-6 lg:gap-18">
      <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
        <h1 className="font-medium text-4xl lg:text-6xl max-lg:text-center">Navigating the digital landscape for success</h1>
        <p className="text-lg">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className="cursor-pointer text-lg bg-secondary text-white w-full lg:w-fit px-8 py-4 rounded-lg hover:bg-primary hover:text-black transition duration-fast border border-transparent hover:border-black">Book a consultation</button>
      </div>
      <div className="order-1 lg:order-2">
        <img src="/home/landing.svg" alt="Illustration" className="w-full" />
      </div>
    </main>
  );
}
export default LandingSection;
