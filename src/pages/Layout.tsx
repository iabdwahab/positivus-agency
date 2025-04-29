import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Index";
import Footer from "../components/footer/Index";
import { useEffect } from "react";

function Layout() {
  const { pathname } = useLocation();

  // Scroll to top when the pathname changes.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
