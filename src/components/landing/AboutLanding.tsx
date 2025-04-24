import landingImage from "/about/landing.svg";

function AboutLanding() {
  return (
    <main className="container">
      <div className="bg-gray mb-4 grid max-h-screen items-center justify-center rounded-xl px-4 py-6 max-lg:text-center lg:grid-cols-2">
        <div>
          <img src={landingImage} alt="Illustration" className="mx-auto w-full max-w-[450px]" />
        </div>
        <div>
          <h1 className="mb-6 text-4xl font-medium md:text-5xl lg:text-7xl">Together for Success</h1>
          <p>At positivus, we help businesses grow by combinig creativity, innovation, and data-driven strategies. Together, we build a future of shared success.</p>
        </div>
      </div>
    </main>
  );
}
export default AboutLanding;
