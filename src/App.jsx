import DojoFetch from "./pages/DojoFetch";
import Nudo from "./pages/Nudo"
import Descenlace from "./pages/Descenlace"
import NavegationBar from "./components/Navegation/NavegationBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>

      <NavegationBar></NavegationBar>

      <Routes>

        {/* MODULARIZAR A CARPETA ROUTER  */}

        <Route path="/" element={<DojoFetch />} />
        <Route path="/nudo" element={<Nudo />} />
        <Route path="/descenlace" element={<Descenlace />} />

      </Routes>

    </BrowserRouter>
  )
}
export default App



