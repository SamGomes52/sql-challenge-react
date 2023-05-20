import React from "react";
import Base from "./base";
import Menu from "./menu";
import descricoes from '../data/descricoes';

function Nivel(props) {
  return (
    <div>
        <Menu />
        <Base descricao={descricoes[+props.nivel-1]} nivel={props.nivel}/>
    </div>
  );
}

export default Nivel;
