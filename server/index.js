const express = require("express");
const app = express();
const mysql = require("mysql2");

// Serve para não dar problema quando for feita a conexao do front com o back
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "usuario-leitura",
    password: "wd79rt",
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

app.post("/respostas", (req, resp) => {
    const { nivel } = req.body;

    console.log(nivel);

    let SQL = "SELECT RESPOSTA FROM RESPOSTAS_CORRETAS WHERE NIVEL="+nivel;

    db.query(SQL, (err, result) => {
        console.log(err);
        resp.send(result);
    })
})

app.listen(3001, () => {
    console.log("executando servidor");
})