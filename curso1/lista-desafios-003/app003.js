let numero = prompt('Escolha um número');
if (numero < 0) {
    while (numero <= 0) {
        console.log(numero);
        numero++;
    }
} else if (numero > 0) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
} else {
    console.log(numero)
}