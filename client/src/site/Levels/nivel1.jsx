import React from "react";
import Base from "../components/base";
import Menu from "../components/menu";
import descricoes from '../data/descricoes';

function Nivel1() {
  return (
    <div>
      <Menu />
      <Base descricao={descricoes[0]} nivel="1" />
    </div>
  );
}

export default Nivel1;
