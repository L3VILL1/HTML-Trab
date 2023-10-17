function gerarNumerosDeFibonacci() {
    var quantidade = parseInt(document.getElementById('N1Fibonacci').value);
    var resultadoDiv = document.getElementById('resultadoFibonacci');

    var numerosDeFibonacci = gerarNPrimeirosNumerosDeFibonacci(quantidade);
    resultadoDiv.textContent = 'Os primeiros ' + quantidade + ' números de Fibonacci são: ' + numerosDeFibonacci.join(', ');
}

function gerarNPrimeirosNumerosDeFibonacci(n) {
    var fibonacciArray = [];
    var a = 0;
    var b = 1;

    for (var i = 0; i < n; i++) {
        fibonacciArray.push(a);
        var temp = a + b;
        a = b;
        b = temp;
    }

    return fibonacciArray;
}