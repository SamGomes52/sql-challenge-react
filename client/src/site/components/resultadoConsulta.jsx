import React from "react";

function ResultadoConsulta (props) {
    

    try {
        var resposta = '';
        if (props.respostaEnviada) {
            if (props.resultadoEhCerto) {
                resposta = <h5 className="fonte-verde">Resposta correta!</h5>
            } else {
                resposta = <h5 className="fonte-vermelha">Resposta errada!</h5>
            }
        }
        
        if (props.resultadoConsulta != undefined) {
            return (<div>{resposta}{props.resultadoConsulta?.map((resultadoLinha, index) => <div key={index}>{JSON.stringify(resultadoLinha)}</div>)}</div>);
        }
    } catch (error) {
        return <div><h5>Erro: consulta inválida!</h5></div>
    } 

}

export default ResultadoConsulta;