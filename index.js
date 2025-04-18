const readline = require('readline')
const verificarParImpar = require('./src/verificarParImpar')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite um número: ', (input) => {
  const numero = Number(input)

  const resultado = verificarParImpar(numero)
  console.log(`Resultado: ${resultado}`)

  rl.close()
})
