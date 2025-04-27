import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
