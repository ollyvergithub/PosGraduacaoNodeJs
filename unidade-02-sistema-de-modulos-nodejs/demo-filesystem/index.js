// Utilizando o módulo File system do NodeJs
const fs = require("fs")

fs.mkdir("./teste", function(){
    console.log('Criei o diretorio teste')
})

fs.writeFile("./teste/abcd.txt", "Olá tudo bem?",function(){
    console.log("Criei um novo arquivo no diretório testo com o nome abcd.txt")
})

fs.readFile('./teste/abcd.txt', function(error, data){
    console.log("O meu arquivo possui os dados: ", data.toString())
})