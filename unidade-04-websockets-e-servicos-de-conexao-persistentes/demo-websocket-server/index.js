const express = require('express')
const http = require('http')
const Websocket = require('ws')

const app = express()

// Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app)

// Inicializa uma instancia do servidor websocket a partir do servidor http
const wss = new Websocket.Server({server})

// Função responsável por manusear a conexao websocket
wss.on("connection", (ws) => {

    // Função que trata as mensagens recebidas pelo servidor
    ws.on("message", (message)=>{
        console.log("Mensagem recebida em wss.on ", message.toString());
        ws.send(message.toString());
        ws.send(message.toString());
    })

})

//Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
    console.log("Servidor conectado na porta:", server.address().port);
});
