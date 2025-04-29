import { navLinksFooterElements } from "../../data/navLinks";
import logoLight from "/global/logo-text-light.svg";

import linkedinIcon from "/social/linkedin-light.svg";
import facebookIcon from "/social/facebook-light.svg";
import twitterIcon from "/social/twitter-light.svg";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex items-center justify-between gap-8 max-lg:flex-col">
      <Link to="/">
        <img src={logoLight} alt="Logo" />
      </Link>

      <ul className="flex items-center gap-4 max-lg:flex-col">{navLinksFooterElements}</ul>

      <ul className="flex items-center gap-4">
        <li>
          <a href="#" className="hover:opacity-80">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80">
            <img src={facebookIcon} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80">
            <img src={twitterIcon} alt="Linkedin Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavLinks;
