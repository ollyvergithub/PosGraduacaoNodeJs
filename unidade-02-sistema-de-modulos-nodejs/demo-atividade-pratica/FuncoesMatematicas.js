const chamaOperacao = (operacao, n1, n2) => {
    switch (operacao) {
        case 'adicao':
            return adicao(n1, n2)
        case 'subtracao' :
            return subtracao(n1, n2)
        case 'multiplicacao' :
            return multiplicacao(n1, n2)
        case 'divisao':
            return divisao(n1, n2)
        default:
            return "Operação inválida as opções são adicao, subtracao, multiplicacao ou divisao"
    }
}

const checaSeNumero = (n1, n2) => {
    return !(isNaN(n1) || isNaN(n2));
}

const adicao = (n1, n2) => {
    if (!checaSeNumero(n1, n2)){
        return "Somente números são aceitos"
    }else {
        return n1 + n2
    }
}

const subtracao = (n1, n2) => {

    if (!checaSeNumero(n1, n2)){
        return "Somente números são aceitos"
    }else {
        return n1-n2
    }
}

const multiplicacao = (n1, n2) => {
    if (!checaSeNumero(n1, n2)){
        return "Somente números são aceitos"
    }else {
        return n1*n2
    }
}

const divisao = (n1, n2) => {
    if (!checaSeNumero(n1, n2)) {
        return "Somente números são aceitos"
    }else if (n2 === 0){
        return 'Não é possível realizar a divisão por 0'
    }else {
        return n1/n2
    }
}

module.exports = {
    chamaOperacao,
}