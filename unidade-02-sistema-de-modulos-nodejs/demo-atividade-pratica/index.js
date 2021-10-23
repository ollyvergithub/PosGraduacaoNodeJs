const fn = require('./FuncoesMatematicas')

const x = 10;
const y = 1;

const adErroOperacao = fn.chamaOperacao('adicao2', x, y)
const adErroType = fn.chamaOperacao('adicao', 'r', y)

const ad = fn.chamaOperacao('adicao', 1, 1)
const ad2 = fn.chamaOperacao('adicao', -123, 123123)
const mult = fn.chamaOperacao('multiplicacao', 8, 0)
const mult2 = fn.chamaOperacao('multiplicacao', 1239123, 12313)
const div = fn.chamaOperacao('divisao', 123, -12)
const div2 = fn.chamaOperacao('divisao', 313123, 0)

console.log("Com import de modulo funcoes ADICAO Erro Operacao: ", adErroOperacao);
console.log("Com import de modulo funcoes ADICAO Erro Type: ", adErroType);

console.log("Com import de modulo funcoes ADICAO: ", ad);
console.log("Com import de modulo funcoes ADICAO: ", ad2);
console.log("Com import de modulo funcoes Multiplicacao: ", mult);
console.log("Com import de modulo funcoes Multiplicacao: ", mult2);
console.log("Com import de modulo funcoes Divisão: ", div);
console.log("Com import de modulo funcoes Divisão: ", div2);
