function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimo() {
    var num = parseInt(document.getElementById('N1Primo').value);
    var resultadoDiv = document.getElementById('resultadoPrimo');

    if (isPrime(num)) {
        resultadoDiv.textContent = num + ' é um número primo.';
    } else {
        resultadoDiv.textContent = num + ' não é um número primo.';
    }
}