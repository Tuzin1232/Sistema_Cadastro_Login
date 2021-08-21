let express = require("express")
let mysql = require("mysql")
let cors = require("cors")
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistema_cadastro_login",
})

con.connect()

const app = express()
app.use(cors())

app.get("/api/sistemas",function(req, res){
    con.query("SELECT * FROM sistemas", function(error, resultado){
        if(error){
            throw error
        }

        res.send(Object.values(resultado))
    })
})

app.post('/api/cadastro', function(req, res){
    console.log(req)
})

app.listen(3000)
console.log("Servidor Aberto :)")