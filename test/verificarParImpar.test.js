const verificarParImpar = require('../src/verificarParImpar')

describe('12 Testes para a função verificarParImpar', () => {
  test('Deve retornar "O número 4 é par." quando o número é 4', () => {
    expect(verificarParImpar(4)).toBe("O número 4 é par.")
  })

  test('Deve retornar "O número 7 é ímpar." quando o número é 7', () => {
    expect(verificarParImpar(7)).toBe("O número 7 é ímpar.")
  })

  test('Deve retornar "O número 0 é par." quando o número é 0', () => {
    expect(verificarParImpar(0)).toBe("O número 0 é par.")
  })

  test('Deve retornar "O número -2 é par." quando o número é -2', () => {
    expect(verificarParImpar(-2)).toBe("O número -2 é par.")
  })

  test('Deve retornar "O número -5 é ímpar." quando o número é -5', () => {
    expect(verificarParImpar(-5)).toBe("O número -5 é ímpar.")
  })

  test('Deve retornar "Isso não é um número." quando a entrada é "banana"', () => {
    expect(verificarParImpar("banana")).toBe("Isso não é um número.")
  })

  test('Deve retornar "Isso não é um número." quando a entrada é true', () => {
    expect(verificarParImpar(true)).toBe("Isso não é um número.")
  })

  test('Deve retornar "O número 100 é par." para um número par maior', () => {
    expect(verificarParImpar(100)).toBe("O número 100 é par.")
  })

  test('Deve retornar "O número 99 é ímpar." para um número ímpar maior', () => {
    expect(verificarParImpar(99)).toBe("O número 99 é ímpar.")
  })

  test('Deve retornar "O número -10 é par." para um número negativo par maior em valor absoluto', () => {
    expect(verificarParImpar(-10)).toBe("O número -10 é par.")
  })

  test('Deve retornar "O número -11 é ímpar." para um número negativo ímpar maior em valor absoluto', () => {
    expect(verificarParImpar(-11)).toBe("O número -11 é ímpar.")
  })

  test('Deve retornar "Isso não é um número." para null', () => {
    expect(verificarParImpar(null)).toBe("Isso não é um número.")
  })
})