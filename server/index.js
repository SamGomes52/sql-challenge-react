const express = require("express");
const app = express();
const mysql = require("mysql2");

// Serve para não dar problema quando for feita a conexao do front com o back
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "edgar4notes$%",
    database: "sql_challenge"
})



app.get('/', (req, resp) => {
    let SQL = "INSERT INTO PONTOS_DE_ONIBUS (BAIRRO, PASSAGENS_DIARIAS_ONIBUS) VALUES ('Jardim Oliveiras', 77);";

    db.query(SQL, (erro, resultado) => {
        console.log(erro);
    })
})

app.listen(3001, () => {
    console.log("rodando servidor");
})