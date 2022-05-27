import React from "react";
import Base from "../components/base";
import Menu from "../components/menu";
import descricoes from '../data/descricoes';

function Nivel3() {
  return (
    <div>
        <Menu />
        <Base descricao={descricoes[2]}/>
    </div>
  );
}

export default Nivel3;
