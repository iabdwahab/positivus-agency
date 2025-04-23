import { navLinksHeaderElements } from "../../data/navLinks";
import RequestQuoteLink from "./RequestQuoteLink";

function NavbarDesktop() {
  return (
    <div className="flex items-center gap-4 text-lg max-lg:hidden">
      <nav>
        <ul className="flex items-center gap-4">{navLinksHeaderElements}</ul>
      </nav>
      <RequestQuoteLink />
    </div>
  );
}
export default NavbarDesktop;
