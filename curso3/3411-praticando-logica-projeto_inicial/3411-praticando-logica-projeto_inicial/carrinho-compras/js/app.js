let valorTotal = 0;
limpar();

// DESAFIO 3
document.querySelector('h2').textContent = 'Aparelhos no carrinho';

// DESAFIO 4
let variavelNumerica1 = 10, variavelNumerica2 = 25;
console.log(`A soma entre ${variavelNumerica1} e ${variavelNumerica2} é ${variavelNumerica1 + variavelNumerica2}`);

// DESAFIO 5
let textoTotal = 'a primeira parte (da esquerda);a segunda parte (da direita)';
console.log(textoTotal.split(';')[0]);
console.log(textoTotal.split(';')[1]);

// DESAFIO 6
let conjuntoDeNumeros = '1,9,2,8,3,7,4,6,5';
for(let i = 0; i < 9; i++) {
    console.log(conjuntoDeNumeros.split(',')[i]);
}

function adicionar() {
    let campoProduto = document.getElementById('produto').value;
    let valorProduto = parseInt(campoProduto.replace(/\D/g, ''));
    campoProduto = campoProduto.slice(0, -8);

    let campoQuantidade = document.getElementById('quantidade').value;
    let itensCarrinho = document.getElementById('lista-produtos');
    let itensIndvCarrinho = itensCarrinho.querySelector('.carrinho__produtos__produto');
    // DESAFIO 1
    if (campoQuantidade >= 1) {
        itensIndvCarrinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${campoQuantidade}x</span> ${campoProduto} <span class="texto-azul">R$${valorProduto * campoQuantidade}</span></section>`;
        atualizarTotal(valorProduto, campoQuantidade);
        document.getElementById('quantidade').value = 0;
    } else {
        alert("É necessário escolher a quantidade (Qtde.)")
    }
}

function limpar() {
    let itensCarrinho = document.getElementById('lista-produtos');
    let itensIndvCarrinho = itensCarrinho.querySelector('.carrinho__produtos__produto');
    itensIndvCarrinho.innerHTML = '';
    let tot = document.getElementById('valor-total');
    tot.innerHTML = '';
}

function atualizarTotal(valor, quantidade) {
    valorTotal += valor * quantidade;
    document.getElementById('valor-total').innerHTML = `R$${valorTotal}`;
}