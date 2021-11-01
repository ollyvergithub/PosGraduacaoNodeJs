const express = require('express')
const http = require('http')
const Websocket = require('ws')
const portaFront = 7000
const app = express()
const fn = require('./FuncoesMatematicas')

app.use('/', express.static(__dirname + '/static'));

// Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app)

// Inicializa uma instancia do servidor websocket a partir do servidor http
const websocket = new Websocket.Server({server})

// Função responsável por manusear a conexao websocket
websocket.on("connection", (ws) => {

    // Função que trata as mensagens recebidas pelo servidor
    ws.on("message", (message)=>{
        let message_string = message.toString()
        let message_array = message_string.split(',')
        console.log("Mensagem recebida em websocket.on ", message_string);
        console.log("Mensagem recebida em websocket.on Convertida para array", message_array);
        let resultado = fn.chamaOperacao(message_array)
        ws.send(resultado);
    })

    setInterval(() =>{
        ws.send("Estou enviando sozinho")
        }, 10000
    );

})

// Inicia o front
// app.listen(portaFront, ()=>{
//     console.log(`Example app listening at http://localhost:${portaFront}`)
// })

// Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
    console.log("Servidor conectado na porta:", server.address().port);
});