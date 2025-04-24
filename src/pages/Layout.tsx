import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";
import Footer from "../components/footer/Index";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
