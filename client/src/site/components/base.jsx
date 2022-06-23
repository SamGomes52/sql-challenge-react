import React, { useState } from "react";
import ModalDiagrama from "./modalDiagrama";
import Axios from "axios";
import ResultadoConsulta from "./resultadoConsulta";

function Base(props) {
  const [consulta, setConsulta] = useState();
  const [resultadoConsulta, setResultadoConsulta] = useState();
  const [respostaCorreta, setRespostaCorreta] = useState();
  const [resultadoEhCerto, setResultadoEhCerto] = useState();
  const [respostaEnviada, setrespostaEnviada] = useState(false);

  function alteraConsulta(event) {
    setConsulta(event.target.value);
  }

  function limpaConsulta() {
    setConsulta('');
  }

  function cliqueExecutar() {
    if (consulta !== undefined && consulta !== ' ') {
      Axios.post("http://localhost:3001/consultar", {
        consultaUsuario: consulta,
      }).then((resp) => {
        console.log("Resposta consulta usuário: " + JSON.stringify(resp.data));
        setResultadoConsulta(resp.data);
      });
    }
    setrespostaEnviada(false);
  }

  function cliqueEnviar(event) {
    cliqueExecutar();
    if (consulta !== undefined && consulta !== ' ') {
      Axios.post("http://localhost:3001/respostas", {
        nivel: props.nivel,
      }).then((resp) => {
        console.log("Resposta certa: " + resp.data[0]['RESPOSTA']);
        setRespostaCorreta(resp.data[0]['RESPOSTA']);
      });
      setResultadoEhCerto(respostaCorreta == JSON.stringify(resultadoConsulta));
      setrespostaEnviada(true);
    }
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

              <ModalDiagrama imagemdiagrama="/images/esquema-sql-challenge.png" />
            </div>
            <div className="m-1">
              <textarea
                className="form-control"
                rows={8}
                placeholder="Digite seu código SQL aqui..."
                name="consulta-textarea"
                value={consulta}
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
              <button type="button" className="mx-auto btn btn-dark btn-lg" onClick={limpaConsulta}>
                Limpar
              </button>
              <button type="button" className="mx-auto btn btn-light btn-lg" onClick={cliqueEnviar}>
                Enviar
              </button>
            </div>
          </div>

          <div className="col-lg-6 bg-light p-2">
            <h1 className="d-flex justify-content-center">Resultado da consulta</h1>
            <div id="resultados-consulta">
              <ResultadoConsulta resultadoConsulta={resultadoConsulta} resultadoEhCerto={respostaCorreta == JSON.stringify(resultadoConsulta)} respostaEnviada={respostaEnviada}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Base;
