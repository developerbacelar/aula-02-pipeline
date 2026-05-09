const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

describe('Calculadora Básica', () => {
  
  // Testes de Soma
  test('deve somar 2 + 3 e retornar 5', () => {
    console.log(variavelQueNaoExiste);
    expect(somar(2, 3)).toBe(5);
  });

  test('deve somar números negativos (-1 + -1) e retornar -2', () => {
    console.log(variavelQueNaoExiste);
    expect(somar(-1, -1)).toBe(-2);
  });

  // Testes de Subtração
  test('deve subtrair 5 - 2 e retornar 3', () => {
    expect(subtrair(5, 2)).toBe(3);
  });

  // Testes de Multiplicação
  test('deve multiplicar 4 * 3 e retornar 12', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  // Testes de Divisão
  test('deve dividir 10 / 2 e retornar 5', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('deve lançar um erro ao tentar dividir por zero', () => {
    // Para testar erros, precisamos passar uma função callback para o expect
    expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero');
  });

});