import React from "react";

function ResultadoConsulta (props) {
    

    try {
        var resposta;
        if (props.resultadoEhCerto) {
            resposta = "Resposta correta!"
        } else {
            resposta = "Resposta errada!"
        }
        
        if (props.resultadoConsulta != undefined) {
            return (<div>{props.resultadoConsulta?.map((resultadoLinha) => <div>{JSON.stringify(resultadoLinha)}</div>)}<h5>{resposta}</h5></div>);
        }
    } catch (error) {
        return <div><h5>Erro: operação inválida!</h5></div>
    } 

}

export default ResultadoConsulta;