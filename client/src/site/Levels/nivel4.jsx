import React from "react";
import Base from "../components/base";
import Menu from "../components/menu";
import descricoes from '../data/descricoes';

function Nivel4() {
  return (
    <div>
        <Menu />
        <Base descricao={descricoes[3]}/>
    </div>
  );
}

export default Nivel4;
