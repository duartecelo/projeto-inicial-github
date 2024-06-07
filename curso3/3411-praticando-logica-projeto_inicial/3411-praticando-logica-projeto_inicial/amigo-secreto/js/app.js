let arrayAmigos = [];
let arraySorteio = [];
let nomeAmigo = document.getElementById('nome-amigo');
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    if (nomeAmigo.value == 0 || NaN || null) {
        alert('Não é possível adicionar nomes vazios');
    } else if (arrayAmigos.includes(nomeAmigo.value)) {
        alert('O nome informado do amigo deve ser diferente de todos os outros');
    } else {
        arraySorteio = [];
        listaSorteio.innerHTML = '';

        arrayAmigos.push(nomeAmigo.value);
        if (arrayAmigos.length == 1) {
            listaAmigos.innerHTML += `<a href="#" onclick="removerAmigo('${nomeAmigo.value}')">${nomeAmigo.value}</a>`;
        } else {
            listaAmigos.innerHTML += `, <a href="#" onclick="removerAmigo('${nomeAmigo.value}')">${nomeAmigo.value}</a>`;
        }
    }
    nomeAmigo.value = '';
}

function sortear() {
    if (arrayAmigos.length < 3) {
        alert('É necessário ter, no mínimo, 3 amigos na lista para realizar o sorteio')
    } else {
        let atual = arrayAmigos[(parseInt(Math.random() * arrayAmigos.length))];
        let proximo;
        arraySorteio.push(atual);
        while(arraySorteio.length < arrayAmigos.length) {
            do {
                proximo = arrayAmigos[(parseInt(Math.random() * arrayAmigos.length))];
            } while (arraySorteio.includes(proximo));

            listaSorteio.innerHTML += `${atual} ⟶ ${proximo}<br>`;
            arraySorteio.push(proximo);
            atual = proximo;
        }
        listaSorteio.innerHTML += `${arraySorteio[arraySorteio.length - 1]} ⟶ ${arraySorteio[0]}`;
    }
}

function reiniciar() {
    arrayAmigos = [];
    arraySorteio = [];
    listaAmigos.innerHTML = '';
    nomeAmigo.value = '';
    listaSorteio.innerHTML = '';
}
// DESAFIO 1
function removerAmigo(amigo) {
    if (arrayAmigos.length == 1) {
        listaAmigos.innerHTML = '';
        arrayAmigos = [];
    } else {
        let indice = arrayAmigos.indexOf(amigo);
        arrayAmigos.splice(indice, 1);
        listaAmigos.innerHTML = `<a href="#" onclick="removerAmigo('${arrayAmigos[0]}')">${arrayAmigos[0]}</a>`;
        for (let i = 1; i < arrayAmigos.length; i++) {
            listaAmigos.innerHTML += `, <a href="#" onclick="removerAmigo('${arrayAmigos[i]}')">${arrayAmigos[i]}</a>`;
        }
    }
    arraySorteio = [];
    listaSorteio.innerHTML = '';
}

// DESAFIO 2
let minhaLista = [1,2,3];
let minhaLista2 = [4,5,6];
let novaLista = minhaLista.concat(minhaLista2);
console.log(novaLista);
// DESAFIO 3
novaLista.pop();
console.log(novaLista);
// DESAFIO 4
function embaralha(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        const elemento = lista[i - 1];
        lista[i - 1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elemento;
    }
}
embaralha(novaLista);
console.log(novaLista);

// DESAFIO 5
let arrayTeste = [1,2,2,3,4,4,4,4,5,6,6,6,6,6,6,7,8,8,8,8,8,8,8,8,9]; // 2 "dois", 4 "quatros", 6 "seis" e 8 "oitos"
function removerDuplicatas(array) {
    let arrayControle = [];
    for (let i = 0; i < array.length; i++) {
        if (!arrayControle.includes(array[i])) {
            arrayControle.push(array[i]);
        }
    }
    return arrayControle; // 1,2,3,4,5,6,7,8,9
}