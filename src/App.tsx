import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import PolizzeAuto from "./pages/assicurazioni/polizze-auto/PolizzeAuto";
import PersoneFamiglia from "./pages/assicurazioni/persone-famiglia/PersoneFamiglia";
import ProfessionistiAziende from "./pages/assicurazioni/professionisti-aziende/ProfessionistiAziende";
import RischiSpeciali from "./pages/assicurazioni/rischiSpeciali/RischiSpeciali";
import PraticheAuto from "./pages/pratiche-auto/PraticheAuto";
import LavoraConNoi from "./pages/lavora-con-noi/LavoraConNoi";
import ChiSiamo from "./pages/chi-siamo/ChiSiamo";
import { useLayoutEffect } from "react";
import FideiussioniCauzioni from "./pages/assicurazioni/fideussioni-cauzioni/FideiussioniCauzioni";
import Contattaci from "./pages/contattaci/Contattaci";
import Home from "./pages/home/Home";

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
            <Route path="assicurazioni">
              <Route path="polizze-auto" element={<PolizzeAuto />} />
              <Route path="persone-famiglia" element={<PersoneFamiglia />} />
              <Route
                path="professionisti-aziende"
                element={<ProfessionistiAziende />}
              />
              <Route
                path="fiduiussioni-cauzioni"
                element={<FideiussioniCauzioni />}
              />
              <Route path="rischi-speciali" element={<RischiSpeciali />} />
            </Route>
            <Route path="pratiche-auto" element={<PraticheAuto />} />
            <Route path="lavora-con-noi" element={<LavoraConNoi />} />
            <Route path="chi-siamo" element={<ChiSiamo />} />
            <Route path="contattaci" element={<Contattaci />} />
          </Routes>
        </Wrapper>
      </Router>
    </main>
  );
}

export default App;
