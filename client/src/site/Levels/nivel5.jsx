import React from "react";
import Base from "../components/base";
import Menu from "../components/menu";
import descricoes from '../data/descricoes';

function Nivel5() {
  return (
    <div>
        <Menu />
        <Base descricao={descricoes[4]}/>
    </div>
  );
}

export default Nivel5;
