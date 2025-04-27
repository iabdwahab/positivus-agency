import { navLinksHeaderElements } from "../../data/navLinks";
import RequestQuoteLink from "./RequestQuoteLink";

function NavbarMobile({ isOpened }: { isOpened: boolean }) {
  if (!isOpened) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 container w-full justify-center gap-4 border-b bg-white py-8 text-lg lg:hidden">
      <nav>
        <ul className="grid auto-rows-[minmax(40px,1fr)] justify-center text-center">{navLinksHeaderElements}</ul>
      </nav>
      <RequestQuoteLink />
    </div>
  );
}
export default NavbarMobile;
