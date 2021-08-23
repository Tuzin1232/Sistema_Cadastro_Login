const DBContext = require("./DBContext")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get("/api/sistemas", (req, res) => {

    var resultado = DBContext.getSistemas()

    res.send(Object.values(resultado))

})

app.post('/api/cadastro', async (req, res) => {
    
    console.log(await req.body)
    
    //DBContext.setUsuario( /* Essa função vai cadastrar no banco de dados o usuario, passe como parametro a requisição do client */ );
})

app.listen(3000, () => {

    console.log(`Backend ta rodando -> http://localhost:3000`)

})