const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const MongoClient = require("mongodb").MongoClient
const uri = "mongodb://localhost:27017"
// Necessario para funcionar o ObjectId - Acredito ser por conta da versao do mongo 3.6 que estou usando
const ObjectId = require("mongodb").ObjectId;

MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log("Erro ao conectar ao MongoDB ", err)
    db = client.db('PosGraduacaoNodeJsUnidade03CrudCompleto')

    app.listen(port, ()=>{
        console.log(`Example app listening at http://localhost:${port}`)
    })
})


// Setando Express não lida com a leitura de dados do elemento <form> por conta própria. Temos que adicionar outro pacote chamado body-parser
app.use(bodyParser.urlencoded({extended: true}))

// Setando a Template Engine
app.set('view engine', 'ejs')

app.route('/') //setado a rota, e abaixo as ações a serem tomadas dentro desta rota
    .get(function(req, res) {
        const cursor = db.collection('data').find()
        res.render('index.ejs')
    })

    .post((req, res) => {
        db.collection('data').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('Salvo no Banco de Dados')
            res.redirect('/show')
        })
    })

app.route('/show')
    .get((req, res) => {
        db.collection('data').find().toArray((err, results) => {
            if (err) return console.log(err)
            res.render('show.ejs', { data: results })
        })
    })
    .post((req, res)=>{
        db.collection('data').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('Salvo no Banco de Dados')
            res.redirect('/show')
        })
    })

app.route('/edit/:id')
    .get((req, res) => {
        let id = req.params.id

        console.log("XXXXX ID Objeto ", id)

        db.collection('data').find(ObjectId(id)).toArray((err, result) => {
            console.log("XXX OBJETO ", result)
            if (err) return res.send(err)
            res.render('edit.ejs', { data: result })
        })
    })
    .post((req, res) => {
        let id = req.params.id
        let name = req.body.name
        let surname = req.body.surname

        db.collection('data').updateOne({_id: ObjectId(id)}, {
            $set: {
                name: name,
                surname: surname
            }
        }, (err, result) => {
            if (err) return res.send(err)
            res.redirect('/show')
            console.log('Atualizado no Banco de Dados')
        })
    })


app.route('/delete/:id')
    .get((req, res) => {
        var id = req.params.id

        db.collection('data').deleteOne({_id: ObjectId(id)}, (err, result) => {
            if (err) return res.send(500, err)
            console.log('Deletado do Banco de Dados!')
            res.redirect('/show')
        })
    })



