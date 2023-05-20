import React from "react";
import styled from "styled-components";

const Resultados = styled.div`
  .row {
    overflow-x: auto;
    white-space: nowrap;
  }

  .row > .col-xs-4 {
    display: inline-block;
    float: none;
  }
`

const RespostaErrada = styled.h5`
  color: red;
`

const RespostaCorreta = styled.h5`
  color: green;
`

const CabecalhoTabela = styled.thead`
  td {
    font-weight: bold;
  }
`

const TableData = styled.td`
  min-width: 200px;
  padding: 5px;
  border: 2px solid rgb(35, 87, 71);
  text-align: center;
`

function ResultadoConsulta(props) {
  try {
    var resposta = "";
    if (props.respostaEnviada) {
      if (props.resultadoEhCerto) {
        resposta = <RespostaCorreta>Resposta correta!</RespostaCorreta>;
      } else {
        resposta = <RespostaErrada>Resposta errada!</RespostaErrada>;
      }
    }

    if (props.resultadoConsulta != undefined) {
      var colunasResultado = Object.keys(props.resultadoConsulta[0]);

      return (
        <Resultados className="container">
          <div className="d-flex justify-content-center">{resposta}</div>
            <div className="row">
          <div className="">
          <table>
            <CabecalhoTabela>
              <tr>
                {colunasResultado.map((coluna) => (
                  <TableData>{coluna.toUpperCase()}</TableData>
                ))}
              </tr>
            </CabecalhoTabela>
            <tbody>
              {props.resultadoConsulta?.map((resultadoLinha, index) => (
                <tr key={index}>
                  {Object.values(resultadoLinha).map((valor) => (
                    <TableData>{valor}</TableData>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </Resultados>
      );
    }
  } catch (error) {
    return (
      <div>
        <h5>Erro: consulta inválida!</h5>
      </div>
    );
  }
}

export default ResultadoConsulta;
