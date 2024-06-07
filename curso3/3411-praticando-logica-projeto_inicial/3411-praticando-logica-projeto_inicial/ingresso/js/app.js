function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value; // inferior ; superior ; pista
    let qtdIngresso = document.getElementById('qtd').value;
    /*
    let qtdPista = document.getElementById('qtd-pista').textContent;
    let qtdSuperior = document.getElementById('qtd-superior').textContent;
    let qtdInferior = document.getElementById('qtd-inferior').outerHTML;
    */
    let qtdAtualIngresso = (document.getElementById(`qtd-${tipoIngresso}`));
    // DESAFIO 1
    if (qtdIngresso < 0) {
        alert('[ERRO] Insira um número positivo')
    } else {
        if (qtdIngresso == 0 || NaN) {
        alert('É necessário escolher a quantidade (Qtde.) do ingresso que você deseja');
        } else {
            if (qtdAtualIngresso.textContent == 0) {
                alert('Não há mais ingressos desse tipo');
            } else {
                if (qtdIngresso > parseInt(qtdAtualIngresso.textContent)) {
                    alert('A quantidade escolhida foi maior do que a quantidade de ingressos disponíveis');
                }
                else {
                    document.getElementById(`qtd-${tipoIngresso}`).innerHTML -= qtdIngresso;
                    let trechoFrase = qtdIngresso == 1 ? 'Ingresso comprado' : 'Ingressos comprados';
                    alert(`${trechoFrase} com sucesso!`);
                }
            }
        }
    }
}

// DESAFIO 2
function stringToInt(string) {
    return parseInt(string);
}

// DESAFIO 3  
//////////////////////////////////////////////////////////////
                                                            //
// adição                                                   //
function soma(num1, num2) {                                 //
    return num1 + num2;                                     //
}                                                           //
                                                            //
// subtração                                                //
function subtracao(num1, num2) {                            //
    return num1 - num2;                                     //
}                                                           //
                                                            //
// multiplicação                                            //
function multiplicacao(num1, num2) {                        //
    return num1 * num2;                                     //
}                                                           //
                                                            //
// divisão                                                  //
function divisao(num1, num2) {                              //
    return num1 / num2;                                     //
}                                                           //
                                                            //
// calcular alguma operação                                 //
function calcular(operacao, num1, num2) {                   //
    switch(operacao) {                                      //
        case 'soma':                                        //
            soma(num1, num2);                               //
            break;                                          //
        case 'subtracao':                                   //
            subtracao(num1, num2);                          //
            break;                                          //
        case 'multiplicacao':                               //
            multiplicacao(num1, num2);                      //
            break;                                          //
        case 'divisao':                                     //
            divisao(num1, num2);                            //
            break;                                          //
    }                                                       //
}                                                           //
//////////////////////////////////////////////////////////////

// DESAFIO 4
function parOuImpar(numero) {
    return numero % 2 == 0 ? 'par' : 'impar'
}

// DESAFIO 5
function celsiusAndFahrenheit(graus, tipoAReceber) {
    if (tipoAReceber == 'celsius') {
        return (graus - 32) / 1.8;
    } else if (tipoAReceber == 'fahrenheit'){
        return graus * 1.8 + 32;
    } else {
        return 'TIPO INVÁLIDO';
    }
}