import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Header() {
  return (
    <header className="relative container flex h-20 items-center justify-between">
      <div>
        <a href="#">
          <img src="/logo-dark.svg" alt="Positivus Logo" className="w-40 lg:w-48" />
        </a>
      </div>

      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
}
export default Header;
