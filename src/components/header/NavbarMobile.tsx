import { navLinksElements } from '../../data/navLinks';
import RequestQuoteLink from './RequestQuoteLink';

function NavbarMobile() {
  return (
    <div className="grid justify-center gap-4 py-8 absolute top-full left-0 w-full text-lg lg:hidden">
      <nav>
        <ul className="grid justify-center auto-rows-[minmax(40px,1fr)] text-center">{navLinksElements}</ul>
      </nav>
      <RequestQuoteLink />
    </div>
  );
}
export default NavbarMobile;
