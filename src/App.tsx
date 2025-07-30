import "./App.css";
import Home from "./components/pages/home/Home";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import PolizzeAuto from "./components/pages/polizze-auto/PolizzeAuto";
import PraticheAuto from "./components/pages/pratiche-auto/PraticheAuto";
import Contattaci from "./components/pages/contattaci/Contattaci";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }: { children: any }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <main>
      <Router>
        <Wrapper>
          <Routes>
            <Route index element={<Home />} />
            <Route path="polizze-auto" element={<PolizzeAuto />} />
            <Route path="pratiche-auto" element={<PraticheAuto />} />
            <Route path="contattaci" element={<Contattaci />} />
          </Routes>
        </Wrapper>
      </Router>
    </main>
  );
}

export default App;
