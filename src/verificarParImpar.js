function verificarParImpar(num) {
    if (typeof num !== 'number') {
      return ("Isso não é um número.");
    } else if (num % 2 === 0) {
      return ("O número " + num + " é par.");
    } else {
      return ("O número " + num + " é ímpar.");
    }
  }
  
module.exports = verificarParImpar;