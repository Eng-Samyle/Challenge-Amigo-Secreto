// criar uma variável para armazenar a lista
var amigos = [];
// Função para adicionar nomes a lista
function adicionarAmigo() {
 let nomes = document.querySelector('input');
 let nomes2 = nomes.value.trim() // o .trim() serve para excluir os espaços colocados entre no texto
 console.log(nomes2)
 if (nomes2 == ''){ // Alertar que foi adicionado um espaço vazio 
    alert('Digite um nome, não é resgistrado espaços vazio');
    nomes.value = ''; // limpar o espeaço 
} else if (amigos.includes(nomes2) ){  // Verificar se o nome já existe na lista
    alert(`Digite um nome diferente, o nome ${nomes2} já existe na lista`);
    nomes.value = '';
} else {
        amigos.push(nomes2); // Adicionar o nome a lista
        console.log(amigos);
        nomes.value = '';
        let listaAparente = document.querySelector('ul'); //Seleciona o local onde será apresentada a lista
           listaAparente.innerHTML = ''; // vai limpar a lista anterior para a nova 
        for (let i = 0; i < amigos.length; i++) { // Loop
            const amigo = amigos[i]; // Obtém o nome do amigo atual. const -> cria uma váriavel de valor fixo
            const listItem = document.createElement('li');
            listItem.textContent = amigo; // Define o texto do <li> como o nome do amigo
            // Adiciona o <li> dentro da lista <ul>
            listaAparente.appendChild(listItem);
        }
}
}