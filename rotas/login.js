const express = require('express')
const router = express.Router()

router.get('/login', (req, res) =>{
    res.json({
        email: 'kalleo@mail.com',
        senha: 'patins123456'
    })
})

module.exports = router