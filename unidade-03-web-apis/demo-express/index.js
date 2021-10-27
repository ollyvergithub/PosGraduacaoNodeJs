// Criando uma API com ExpressJs

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello World - API criada com ExpressJs!')
})

app.get('/pt', (req, res)=>{
    res.send('Olá Mundo - API criada com ExpressJs!')
})

app.post('/post', (req, res)=>{
    res.send({status: "OK"})
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})