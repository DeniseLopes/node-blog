const express = require('express')
const router = express.Router()

router.get('/galeria', (req, res) =>{
    res.json({
        add_img: 'imagem',
    })
})

module.exports = router