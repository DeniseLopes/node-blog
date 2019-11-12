const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.send('funcionando...')
})

const rotas = require('./rotas')
app.use('/api', rotas)

app.use(express.static(__dirname + '/react-blog'))

const port = 3001

app.listen(port, () =>{
    console.log('servidor esta rodando em http://localhost:', port)
})