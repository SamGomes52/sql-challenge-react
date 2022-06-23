import React from "react";
import Base from "../components/base";
import Menu from "../components/menu";
import descricoes from '../data/descricoes';

function Nivel2() {
  return (
    <div>
        <Menu />
        <Base descricao={descricoes[1]} nivel="2"/>
    </div>
  );
}

export default Nivel2;
