import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nivel from "./site/components/nivel"

const niveis = [1, 2, 3, 4, 5]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {niveis.map((nivel, index) => {
          let numNivel = "/nivel"+nivel
          numNivel = (numNivel === "/nivel1") ? "/" : numNivel
          return <Route exact path={numNivel} element={<Nivel nivel={nivel} />} key={index}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
