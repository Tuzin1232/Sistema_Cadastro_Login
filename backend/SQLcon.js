let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistema_cadastro_login",
})

export default function getSistemas() {
    con.connect()
    con.query("SELECT * FROM sistemas", function (error, resultado) {
        if (error) {
            throw error
        }
        return resultado
    })
}


