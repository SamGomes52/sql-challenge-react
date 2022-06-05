import React, { useState } from "react";
import ModalDiagrama from "./modalDiagrama";
import Axios from "axios";

function Base(props) {
  const [consulta, setConsulta] = useState();
  const [resultadoConsulta, setResultadoConsulta] = useState();

  function alteraConsulta(event) {
    setConsulta(event.target.value);
  }

  function cliqueExecutar(event) {
    Axios.post("http://localhost:3001/consultar", {
      consultaUsuario: consulta,
    }).then((resp) => {
      console.log(resp.data);
      setResultadoConsulta(resp.data);
    });
  }

  return (
    <div id="base">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-lg-6 azul px-2">
            <div className="text-white m-2">{props.descricao.descricao}</div>
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

          <div className="col-lg-6 bg-light p-2">
            <h1 className="d-flex justify-content-center">Resultado da consulta</h1>
            <div id="resultados-consulta">
              <div><pre>{resultadoConsulta?.map((resultadoLinha) => <div>{JSON.stringify(resultadoLinha)}</div>)}</pre></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Base;
