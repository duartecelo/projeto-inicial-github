let tituloH1 = document.querySelector('h1');
tituloH1.innerHTML = 'Hora do Desafio';

function clicarConsole() {
    console.log('O botão foi clicado');
}
function clicarAlerta() {
    alert('Eu amo JS');
}
function clicarPrompt() {
    let cidade = prompt("Digite o nome de alguma cidade brasileira");
    alert(`Estive em ${cidade} e lembrei de você`)
}
function clicarSoma() {
    let num1 = prompt('Digite um número');
    let num2 = prompt('Digite outro número');
    let numResultado = parseInt(num1) + parseInt(num2);
    alert(`A soma entre esses números é ${numResultado}`)
}