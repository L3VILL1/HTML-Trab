function somar(){
    const numero = [10, 70, 95, 25, 15];
    let soma = 0;

    for (let i = 0; i < numero.length; i++) {
    soma += numero[i];
    }

    console.log("A soma dos números foi: " + soma);
    document.getElementById('resultado').textContent = 'Resultado: ' + soma;
}