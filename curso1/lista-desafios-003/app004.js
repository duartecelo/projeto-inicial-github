let numero = prompt('Escolha um número');
let contador = 0;
if (numero < 0) {
    while (contador >= numero) {
        console.log(contador);
        contador--;
    }
} else if (numero > 0) {
    while (contador <= numero) {
        console.log(contador);
        contador++;
    }
} else {
    console.log(numero)
}