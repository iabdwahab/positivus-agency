import { Link } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import logoDark from "/global/logo-text-dark.svg";

function Header() {
  return (
    <header className="relative container flex h-20 items-center justify-between">
      <div>
        <Link to="/">
          <img src={logoDark} alt="Positivus Logo" className="w-40 lg:w-48" />
        </Link>
      </div>

      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
}
export default Header;
