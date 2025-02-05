// criar uma variável para armazenar a lista
var amigos = [];
// Função para adicionar nomes a lista
function adicionarAmigo() {
 let nomes = document.querySelector('input');
 let nomes2 = nomes.value.trim() // o .trim() serve para excluir os espaços colocados no texto
 if (nomes2 === ''){ // Verificação se foi adicionado um espaço vazio 
    alert('Digite um nome, não é resgistrado espaços vazio');
    nomes.value = ''; // limpar o espaço 
} else if (amigos.includes(nomes2) ){  // Verificar se o nome escrito da mesma forma já existe na lista
    alert(`Digite um nome diferente, o nome ${nomes2} já existe na lista`);
    nomes.value = '';
} else {
        amigos.push(nomes2); // Adicionar o nome a lista
        nomes.value = '';
        let listaAmigos = document.getElementById('listaAmigos'); //Seleciona o local onde será apresentada a lista
        listaAmigos.innerHTML = ''; // vai limpar a lista anterior para a nova 
        for (let i = 0; i < amigos.length; i++) { // Loop para usar o elemento <li>  em todos os nomes da lista
            const amigo = amigos[i]; // Obtém o nome do amigo atual do loop 
            const listItem = document.createElement('li'); // criar o elemento <li> 
            listItem.textContent = amigo; // Define o texto do <li> como o nome do amigo
            listaAmigos.appendChild(listItem); // Adiciona o <li> dentro da lista <ul>
        }
}
}
function sortearAmigo() { // Função para sortear um nome
        let indice = Math.floor(Math.random() * amigos.length);
    if (amigos.length === 0){ // verificar se a lista está vazia 
       alert('A lista está vazia,  adicione nomes para que o sorteio ocorra');
    }else if (amigos.length === 1){ // verificar se tem apenas um nome na lista
        alert(`Há apenas o nome ${amigos} na sua lista, adicione mais nomes para que o sorteio ocorra`);
    } else {
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById('resultado'); // Seleciona a lista <ul>
        resultado.innerHTML = `O amigo secreto sorteado é:${amigoSorteado}`; // Informa quem é o amigo secreto
        amigos.splice(indice, 1); // retira o nome da lista
        document.querySelector(".button-draw").childNodes[2].nodeValue = ' Sortear novo amigo'
    }
}
