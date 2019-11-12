const express = require('express')
const router = express.Router()

router.get('/contato', (req, res) =>{
    res.json({
        nome: 'Elliot',
        email: 'elliot@mail.com',
        assunto: 'quero te patrocinar',
        telefone: '12997133032',
        mensagem: 'Meu post',       

    })
})

module.exports = router