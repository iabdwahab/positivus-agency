import Contact from "./Contact";
import Copyright from "./Copyright";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <footer className="bg-secondary pt-14 pb-10 text-white">
      <div className="container grid gap-10">
        <NavLinks />
        <Contact />
        <hr />

        <Copyright />
      </div>
    </footer>
  );
}
export default Footer;
