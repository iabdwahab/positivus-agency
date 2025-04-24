import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
