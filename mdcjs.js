const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o valor de A: ", (A) => {
  rl.question("Digite o valor de B: ", (B) => {
    A = parseInt(A);
    B = parseInt(B);
    let mdc = 0;

    if (A < B) {
      for (let i = 1; i <= A; i++) {
        if (A % i === 0 && B % i === 0) {
          mdc = i;
        }
      }
    } else if (B < A) {
      for (let i = 1; i <= B; i++) {
        if (A % i === 0 && B % i === 0) {
          mdc = i;
        }
      }
    } else {
      mdc = A; // A e B são iguais, então o MDC é A ou B.
    }

    console.log("MDC entre " + A + " e " + B + " é " + mdc);
    rl.close();
  });
});
