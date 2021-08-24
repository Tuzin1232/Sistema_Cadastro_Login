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
    
    DBContext.setUsuario(await req.body);
})

app.listen(3000, () => {

    console.log(`Backend ta rodando -> http://localhost:3000`)

})