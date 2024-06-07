// DESAFIO 1
function tipoNumerico(numero) {
    if (numero < 0) {
        return 'negativo';
    } else if (numero > 0) {
        return 'positivo';
    } else {
        return 'zero';
    }
}

// DESAFIO 2
function maiorDeIdade(idade) {
    return idade >= 18 ? true : false;
}

// DESAFIO 3
function ehVazia(string) {
    return string === '' ? true : false;
}

// DESAFIO 4
function ehBissexto(ano) {
    return ano % 4 == 0 ? true : false;
}

// DESAFIO 5
function media(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        return (x + y) / 2;
    } else {
        return 'É necessário que os dois valores sejam números.';
    }
}

// DESAFIO 6
function tamanhoArray(array) {
    array.length;
}

// DESAFIO 7
let arrayTeste = ['banana','maçã','laranja','morango','limão'];
console.log(arrayTeste.includes('laranja'));

// DESAFIO 8
function temNoArray(array, elemento) {
    return array.includes(elemento) ? true : false;
}

// DESAFIO 9
console.log(arrayTeste.includes('morango'));

// DESAFIO 10
function estudaAqui(arrayEstudantes, estudante) {
    return arrayEstudantes.includes(estudante) ? true : false;
}

// DESAFIO 11
function somParEProImp(arrayNumeros) {
    let somaPares = 0;
    let produtoImpares = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) {
            somaPares += arrayNumeros[i];
        } else {
            produtoImpares *= arrayNumeros[i];
        }
    }
    return `${somaPares}, ${produtoImpares}`
}