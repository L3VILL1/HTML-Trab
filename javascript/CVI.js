function calcularContagem() {
    const N = parseInt(document.getElementById('N1CVI').value);
    const valoresEntrada = document.getElementById('N2CVI').value;
    const tokens = valoresEntrada.split(' ');
    const primeiroDado = parseInt(tokens[0]);
    let contador = 0;

    for (let i = N; i <= primeiroDado; i++) {
        contador++;
    }

    document.getElementById('resultadoCVI').textContent = 'Número de valores inteiros no intervalo: ' + contador;
}