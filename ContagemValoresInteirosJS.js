function contarNumerosInteiros(N) {
  let contador = 0;

  for (let i = 1; i <= N; i++) {
    contador++;
  }

  return contador;
}


const N = 10;
const quantidadeInteiros = contarNumerosInteiros(N);
console.log(
  `Quantidade de números inteiros no intervalo de 1 a ${N}: ${quantidadeInteiros}`
);
