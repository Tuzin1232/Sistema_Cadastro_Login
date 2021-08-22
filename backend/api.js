import {getSistemas} from 'SQLcon'
let express = require("express")
let mysql = require("mysql")
let cors = require("cors")
let bodyParser = require("body-parser")

var jsonParser = bodyParser.json()

app.configure(() => {
    app.use(express.bodyParser());
});

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/sistemas", (req, res) => {
    var resultado = getSistemas()
    res.send(Object.values(resultado))
})

app.post('/api/cadastro', jsonParser, (req, res) => {
    console.log(req)
})

app.listen(3000)
console.log("Servidor Aberto :)")