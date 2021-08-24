let mysql = require("mysql")

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistema_cadastro_login",
})

function getSistemas() {
    con.connect()

    con.query("SELECT * FROM sistemas", function (error, resultado) {
        if (error) {
            throw error
        }
        return resultado
    })

    con.end();
}

function boolToInt(valor){
    return valor == true ? 1 : 0
}

function setUsuario(cliente) {
    con.connect()
    let ID = ""
    con.query(`INSERT INTO clientes (id, avaliacao, tipo, pend_financeira, mes_atraso, contrato_ativo, nome, cnpj, cpf, telefone, celular, contato, ramo_atividade, cidade, rua, bairro, numero, UF, cep, complemento, ip_acesso, obv, ativo, codigo_cliente) VALUES (null, '${boolToInt(cliente.avaliar)}', '${cliente.tipo}', '${boolToInt(cliente.pend_financeira)}', '${cliente.meses_atrasado}', '${boolToInt(cliente.contrato_atv)}', '${cliente.nome}', '${cliente.cnpj}', '${cliente.cpf}', '${cliente.telefone}', '${cliente.celular}', '${cliente.contato}', '${cliente.ramo}', '${cliente.cidade}', '${cliente.rua}', '${cliente.bairro}', '${cliente.numero}', '${cliente.UF}', '${cliente.number}', '${cliente.complemento}', '${cliente.ip_acesso}', '${cliente.obv}', '${cliente.sistemas}','${cliente.codigo_cliente}')`,
        function (error, resultado, fields) {
            if (error) console.log(error)
            ID = resultado.insertId
            setClienteSistema(cliente, ID)
        })
}

function setClienteSistema(cliente, ID){
    
    cliente.sistemas.forEach(sistema => {
        con.query(`INSERT INTO clientesistemas(id, cliente_id, sistema, ativo, data_inicio, data_termino, valor) VALUES (null,'${ID}','${sistema.sistema}','${boolToInt(sistema.ativo)}','${sistema.data_inicio}','${sistema.data_fim}','${sistema.valor}')`,
            function (error) {

                if (error) console.log(error)

            })
    });

}

module.exports = { getSistemas, setUsuario }


