const moment = require('moment')
moment.locale('pt-BR');

console.log("Data de hoje é: ", moment().format("DD/MM/YYYY") )
console.log("Data de hoje é: ", moment().format("dddd") )