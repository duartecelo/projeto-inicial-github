/*
//TENTIVA DO 0
function alterarStatus(numero) {
    botao = document.querySelector(`a[onclick="alterarStatus(${numero})"]`)
    imagem = document.querySelector(`div[class="dashboard__item__img"]`)

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar'
        imagem.classList.remove('dashboard__item__img--rented')
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver'
        imagem.classList.add('dashboard__item__img--rented')
    }
}
*/

// TENTATIVA CERTA
let qtdJogosAlugados = 1;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        // DESAFIO DA CONFIRMAÇÃO DE DEVOLUÇÃO:                         //
        if (confirm("Você realmente deseja devolver o jogo?")){         //
            botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
        qtdJogosAlugados--;
        } else {                                                        //
            return;                                                     //
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        qtdJogosAlugados++;
    }
}

// DESAFIO DA FUNÇÃO DA QUANTIDADE DE JOGOS ALUGADOS
function mostrarQtdDeJogosAlugados() {
    let jogos = qtdJogosAlugados == 1 ? 'jogo alugado' : 'jogos alugados';
    console.log(`Há ${qtdJogosAlugados} ${jogos}`)
}

// DESAFIO DO PALÍNDROMO
function isPalindromo(texto) {
    for(let i = 0, j = texto.length - 1; i <= j; i++, j--) {
        if (texto[i] != texto[j]) {
            return false;
        }
    }
    return true;
}

// DESAFIO ORDEM CRESCENTE
function emOrdemCrescente(n1, n2, n3) {
    let listaNumeros = [n1, n2, n3];
    return listaNumeros.sort();
}