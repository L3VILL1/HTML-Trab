const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Por favor, digite um número inteiro positivo: ", (numero) => {
  const ehPrimo = verificarPrimo(numero);
  if (ehPrimo) {
    console.log(numero + " é um número primo.");
  } else {
    console.log(numero + " não é um número primo.");
  }
  rl.close();
});

function verificarPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
