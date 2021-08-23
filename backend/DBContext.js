let mysql = require("mysql")

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistema_cadastro_login",
})

function getSistemas()
 {
    con.connect()

    con.query("SELECT * FROM sistemas", function (error, resultado) {
        if (error) {
            throw error
        }
        return resultado
    })
    
    con.end();
}

function setUsuario()
{
    con.connect()

    con.query(``, function (error) {

        if (error) throw error

    })

    con.end();
}


module.exports = { getSistemas , setUsuario }


