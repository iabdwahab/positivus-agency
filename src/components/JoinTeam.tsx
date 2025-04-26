import teamIllustration from "/about/join-team.svg";

function JoinTeam() {
  return (
    <section className="section container">
      <div className="bg-primary border-secondary grid items-center gap-10 rounded-4xl border border-b-4 px-6 py-10 lg:grid-cols-2 lg:px-10 lg:py-4">
        <div className="flex flex-col gap-6 max-lg:items-center max-lg:text-center">
          <h2 className="text-4xl font-bold">Join Our Team</h2>
          <p>At Positivus, we thrive on innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?</p>
          <button className="bg-secondary border-secondary hover:bg-primary hover:text-secondary duration-normal w-full cursor-pointer rounded-xl border px-8 py-4 text-white lg:w-fit">Explore Careers</button>
        </div>
        <div className="flex justify-center">
          <img src={teamIllustration} alt="Illustration" className="w-full max-w-xl" />
        </div>
      </div>
    </section>
  );
}
export default JoinTeam;
