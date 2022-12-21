import React from "react";

function ResultadoConsulta(props) {
  try {
    var resposta = "";
    if (props.respostaEnviada) {
      if (props.resultadoEhCerto) {
        resposta = <h5 className="fonte-verde">Resposta correta!</h5>;
      } else {
        resposta = <h5 className="fonte-vermelha">Resposta errada!</h5>;
      }
    }

    if (props.resultadoConsulta != undefined) {
      var colunasResultado = Object.keys(props.resultadoConsulta[0]);

      return (
        <div className="container resultados">
          <div className="d-flex justify-content-center">{resposta}</div>
            <div className="row">
          <div className="">
          <table>
            <thead>
              <tr>
                {colunasResultado.map((coluna) => (
                  <td>{coluna.toUpperCase()}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.resultadoConsulta?.map((resultadoLinha, index) => (
                <tr key={index}>
                  {Object.values(resultadoLinha).map((valor) => (
                    <td>{valor}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </div>
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
