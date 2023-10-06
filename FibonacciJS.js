const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número de termos da sequência de Fibonacci a serem gerados: ", (N) => {
  const fibonacci = [0, 1];

  for (let i = 2; i < N; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  console.log("Sequência de Fibonacci:", fibonacci.join(" "));
  rl.close();
});
