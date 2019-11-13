const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db')

router.get('/postagem', (req, res) => {

    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=zzt18831;PWD=pjmm8fhvx7dg1m@3;PORT=50000;PROTOCOL=TCPIP", (err, conn) => {
        if(err) {
            return console.log(err)
        }

        conn.query('select * from ZZT18831.POSTAGEM', (err, data) => {
            if(err) {
                console.log({ erro: err })
            } else {
                console.log( data )
                res.send(data)
            }
        })
        conn.close(() => {
            console.log('conexao encerrada')
        })
    })
})

router.get('/postagem/nova', (req, res) => {
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=zzt18831;PWD=pjmm8fhvx7dg1m@3;PORT=50000;PROTOCOL=TCPIP", (err, conn) => {
        if(err) {
            return console.log({erro: err, mensagem: 'Falha de conexão'})
        }
        conn.query(`INSERT INTO ZZT18831.POSTAGEM (TITULO, CONTEUDO) values ('${req.query.titulo}','${req.query.conteudo}')`,(err, data) =>{
            if(err){
                console.log({erro: err, mensagem: 'Query insert falhou'})
            }else{
                console.log(data)
                res.send('Postagem inserida com sucesso!')
            }

            conn.close(() => {
                console.log('conexao encerrada')
            })
        })
    })
})

module.exports = router