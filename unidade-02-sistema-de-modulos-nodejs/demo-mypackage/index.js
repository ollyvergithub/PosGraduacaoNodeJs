const funcoes = require('./meu-modulo/funcoes')

const x = 10;
const y = 1;

const ad = funcoes.adicao(x, y)
const sub = funcoes.subtracao(x,y)
const z = funcoes.zero


 console.log("Com import de modulo funcoes ADICAO ", ad);

 console.log("Com import de modulo funcoes SUBTRACAO ", sub);

 console.log("Com import de modulo funcoes Const ZERO ", z);