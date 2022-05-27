import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Páginas */
import Nivel1 from "./site/Levels/nivel1";
import Nivel2 from "./site/Levels/nivel2"
import Nivel3 from "./site/Levels/nivel3"
import Nivel4 from "./site/Levels/nivel4"
import Nivel5 from "./site/Levels/nivel5"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nivel1 />} />
        <Route exact path="/nivel2" element={<Nivel2 />} />
        <Route exact path="/nivel3" element={<Nivel3 />} />
        <Route exact path="/nivel4" element={<Nivel4 />} />
        <Route exact path="/nivel5" element={<Nivel5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
