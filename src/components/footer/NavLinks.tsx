import { navLinksFooterElements } from "../../data/navLinks";
import logoLight from "/logo-light.svg";

import linkedinIcon from "/social/linkedin-light.svg";
import facebookIcon from "/social/facebook-light.svg";
import twitterIcon from "/social/twitter-light.svg";

function NavLinks() {
  return (
    <div className="flex items-center justify-between gap-8 max-lg:flex-col">
      <div>
        <img src={logoLight} alt="Logo" />
      </div>

      <ul className="flex items-center gap-4 max-lg:flex-col">{navLinksFooterElements}</ul>

      <ul className="flex items-center gap-4">
        <li>
          <a href="#">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebookIcon} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterIcon} alt="Linkedin Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavLinks;
