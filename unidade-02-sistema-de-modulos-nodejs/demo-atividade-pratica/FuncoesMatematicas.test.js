const fn = require('./FuncoesMatematicas')

describe('Testando módulo FuncoesMatematicas', ()=>{

    it('Deve retornar uma operação inválida',  function() {
        let retorno = 'Operação inválida as opções são adicao, subtracao, multiplicacao ou divisao'
        expect(fn.chamaOperacao('OperacaoNaoExistente')).toBe(retorno)
    });

    it('Deve retornar que somente números são válidos - primeiro parametro', function () {
        let retorno = 'Somente números são aceitos'
        expect(fn.chamaOperacao('adicao', 'naoSouUmNumero', 10)).toBe(retorno)
    });

    it('Deve retornar que somente números são válidos - segundo parametro', function () {
        let retorno = 'Somente números são aceitos'
        expect(fn.chamaOperacao('adicao', 10, 'naoSouUmNumero')).toBe(retorno)
    });

    it('Deve retornar que somente números são válidos - os dois parametros', function () {
        let retorno = 'Somente números são aceitos'
        expect(fn.chamaOperacao('adicao', '10', 'naoSouUmNumero')).toBe(retorno)
    });

    it('Deve retornar não pode ser dividido por 0', function () {
        let retorno = 'Não é possível realizar a divisão por 0'
        expect(fn.chamaOperacao('divisao', 313123, 0)).toBe(retorno)

    });

    it('Deve retornar a soma de 1 + 2', function () {
        expect(fn.chamaOperacao('adicao', 1, 2)).toBe(3)
    });
})