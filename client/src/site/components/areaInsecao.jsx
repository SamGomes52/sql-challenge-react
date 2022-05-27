import React, { useState, ReactDOM } from "react";
import ModalDiagrama from "./modalDiagrama";

function AreaInsercao(props) {
  const [consulta, setConsulta] = useState();

  function alteraConsulta(event) {
    setConsulta(event.target.value);
  }

  function cliqueExecutar(event) {
    alert(consulta);
  }

  function cliqueDiagrama() {}

  return (
    <div className="col-lg-6 azul px-2">
      <p className="text-white m-2">{props.descricao}</p>
      <div className="d-flex justify-content-center m-3">
        <button
          type="button"
          className="mx-auto btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Ver Diagrama
        </button>

        <ModalDiagrama imagemdiagrama="/images/diagrama_nivel_1.png" />
      </div>
      <div className="m-1">
        <textarea
          className="form-control"
          rows={8}
          placeholder="Digite seu código SQL aqui..."
          name="consulta-textarea"
          onChange={alteraConsulta}
        ></textarea>
      </div>
      <div className="m-3 d-flex justify-content-evenly">
        <button
          type="button"
          className="mx-auto btn btn-dark btn-lg"
          onClick={cliqueExecutar}
        >
          Executar
        </button>
        <button type="button" className="mx-auto btn btn-dark btn-lg">
          Limpar
        </button>
        <button type="button" className="mx-auto btn btn-light btn-lg">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default AreaInsercao;
