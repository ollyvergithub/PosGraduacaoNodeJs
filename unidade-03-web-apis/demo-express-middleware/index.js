// Criando uma API com ExpressJs

const express = require('express')
const app = express()
const port = 3000

const logMiddleware = (req, res, next)=>{
    console.log("API recebeu alguma informação")

    next();
}

// Middleware que expoe arquivos staticos
//app.use(express.static("./site"))
// Entregando os staticos a partir de uma rota definida /site
//app.use('/site', express.static('./site'));
app.use('/site', express.static(__dirname + '/site'));

app.use(logMiddleware)

app.get('/', (req, res)=>{
    res.send('Hello World - API criada com ExpressJs!')
})

app.get('/pt', (req, res)=>{
    res.send('Olá Mundo - API criada com ExpressJs!')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})