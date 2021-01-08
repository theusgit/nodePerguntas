const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');

//Database
connection
.authenticate()
.then(()=>{
    console.log("Conexão com sucesso!")    
}).catch((msgErro)=>{
    console.log(msgErro);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido titulo " + titulo + " " + "descricao " + descricao);
})



app.listen(4040, () => {
    console.log("app rodando")
});






