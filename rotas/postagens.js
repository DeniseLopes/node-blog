const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) =>{
    res.json({
        titulo: 'Meu post',
        conteudo: 'era uma vez uma publicação',
        autor: 'Denise'
        
    })
})

module.exports = router