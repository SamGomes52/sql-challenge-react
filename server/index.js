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

app.use(cors());
app.use(express.json());

app.post("/consultar", (req, resp) => {
    const { consultaUsuario } = req.body;

    let SQL = consultaUsuario;

    db.query(SQL, (err, result) => {
        console.log(err);
        resp.send(result);
    })
})

app.get('/', (req, resp) => {
    let SQL = "SELECT * FROM PONTOS_DE_ONIBUS;";

    db.query(SQL, (erro, resultado) => {
        console.log(erro);
        resp.send(resultado);
    })
})

app.listen(3001, () => {
    console.log("rodando servidor");
})