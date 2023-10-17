function calcularMDC() {
    var num1 = parseInt(document.getElementById('N1Mdc').value);
    var num2 = parseInt(document.getElementById('N2Mdc').value);
    var resultadoDiv = document.getElementById('resultadoMdc');

    var mdc = calcularMDCEntreDoisNumeros(num1, num2);
    resultadoDiv.textContent = 'O MDC de ' + num1 + ' e ' + num2 + ' é ' + mdc;
}

function calcularMDCEntreDoisNumeros(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}