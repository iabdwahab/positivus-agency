import icon from "/global/logo-icon-light.svg";

function SEOService() {
  return (
    <section className="section container">
      <div className="bg-secondary grid grid-cols-[auto_auto_1fr] gap-8 rounded-4xl px-10 py-12">
        <div>
          <img src={icon} alt="Icon" className="w-12" />
        </div>
        <div>
          <h3 className="flex w-fit flex-col text-2xl font-medium text-black">
            <span className="bg-primary w-fit rounded-lg p-1">Search engine</span>
            <span className="bg-primary w-fit rounded-lg p-1">optimization</span>
          </h3>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-white">SEO is the process of improving your website's visibility on search engines like Google. By optimizing your content and site structure, we help your business rank higher in search results, driving more organic traffic and potential customers.</p>
          <button className="hover:bg-primary duration-normal w-full cursor-pointer rounded-xl border bg-white py-[14px] text-lg font-medium">Boost My Rankings</button>
        </div>
      </div>
    </section>
  );
}
export default SEOService;
