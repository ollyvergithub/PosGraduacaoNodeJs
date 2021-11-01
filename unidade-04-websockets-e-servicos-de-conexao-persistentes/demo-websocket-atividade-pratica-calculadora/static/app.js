window.onload = (() =>{
    let form = document.getElementById('calculadora')
    let val1 = document.getElementById('val1')
    let val2 = document.getElementById('val2')
    let operacao = document.getElementById('operacao')
    let socketStatus = document.getElementById("status");
    let resultado = document.getElementById("resultado");
    let closeBtn = document.getElementById("close");

    let socket = new WebSocket("ws://localhost:9898/");

    socket.onerror = (error =>{
        console.log("Erro em Websocket: ", error)
    })

    // Função chamada no momento da conexão do cliente com o servidor
    socket.onopen = function (event) {
        console.log("Socket.onopen event: ", event)
        socketStatus.innerHTML =
            "Conectado ao servidor: " + event.currentTarget.url;
        socketStatus.className = "text-success";
    };

    // Função para tratar mensagens enviadas pelo servidor.
    socket.onmessage = function (event) {
        let message = event.data;
        resultado.innerHTML += "<p class='mb-0'>"+message+"</p>";
    };

    // Função chamada no momento da desconexão do servidor com o cliente
    socket.onclose = function (event) {
        socketStatus.innerHTML = "Websocket desconectado.";
        socketStatus.className = "text-danger";
    };

    // Função que envia mensagens para o servidor através da conexão websocket
    form.onsubmit = function (e) {
        e.preventDefault();

        // Pega a mensagem digitada no campo de mensagem do formulário
        let valor1 = val1.value;
        let valor2 = val2.value;
        let oper = operacao.value;

        let array = [oper, valor1, valor2]

        // Envia a mensagem através do websocket
        socket.send(array);

        // Limpa o campo de mensagem
        val1.value = "";
        val2.value = "";
        operacao.value = ''

        return false;
    };


    // Função que fecha a conexão websocket
    closeBtn.onclick = function (e) {
        e.preventDefault();

        socket.close();

        return false;
    };

})