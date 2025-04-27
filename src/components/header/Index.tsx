import { Link } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import logoDark from "/global/logo-text-dark.svg";
import { useState } from "react";

function Header() {
  const [isOpened, setIsOpened] = useState(false);

  function toggleMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <header className="relative container flex h-20 items-center justify-between">
      <div>
        <Link to="/">
          <img src={logoDark} alt="Positivus Logo" className="w-40 lg:w-48" />
        </Link>
      </div>

      <button onClick={toggleMenu} className={`${isOpened ? "-rotate-90" : "rotate-0"} duration-normal cursor-pointer lg:hidden`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </button>

      <NavbarDesktop />
      <NavbarMobile isOpened={isOpened} />
    </header>
  );
}
export default Header;
