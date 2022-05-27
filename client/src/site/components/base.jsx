import React from "react";
import AreaInsercao from "./areaInsecao";
import AreaResultados from "./areaResultados";

function Base(props) {
  return (
    <div id="base">
      <div className="container">
        <div className="row min-vh-100">
            <AreaInsercao descricao={props.descricao.descricao}/>
            <AreaResultados />  
        </div>
      </div>
    </div>
  );
}

export default Base;
