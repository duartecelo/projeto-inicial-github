// Desafio 1
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
}

// Desafio 2
function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }
    let fatorial = numero;
    while (numero > 2) {
        numero--;
        fatorial *= numero;
    }
    return fatorial;
}

// Desafio 3
function calculoReais(dinheiroUSD) {
    return dinheiroUSD * 4.8;
}

// Desafio 4
function perimetroRetangular(altura, largura) {
    console.log(altura * 2 + largura * 2);
}

// Desafio 5
function salaCircular(raio) {
    console.log(2 * 3.14 * raio);
    console.log(3.14 * raio * raio);
}

// Desafio 6
function mostrarTabuada(numero) {
    let contador = 1;
    while (contador <= 10) {
        console.log(numero * contador);
    }
}
