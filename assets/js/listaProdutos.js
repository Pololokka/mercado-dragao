const todosP = document.querySelector("[data-todos]");

var listaProdutosTodos = produtosTodos.map(function(item){
    todosP.innerHTML += `
        <div class="produto__container">
            <img src="${item.imagem}" alt="${item.alt}" class="produto__imagem">
            <p class="subtitulo produto__titulo produto__conteudo">${item.nome}</p>
            <p class="texto produto__descricao produto__conteudo">${item.descricao}</p>
            <p class="texto produto__preco produto__conteudo">R$ ${item.preco}</p>
            <input type="button" class="texto produto__botao produto__conteudo" value="Pedir para o mercador" data-valor="${item.id}">
        </div>
    `
});

function adicionaCarrinhoTodos() {
    const botao = document.querySelectorAll("[data-valor]");
    botao.forEach( elemento => {
        elemento.addEventListener('click', evento => {
            let idProduto = evento.target.getAttribute('data-valor');
            arrayCarrinho.push(produtosTodos.find(elemento => elemento.id == idProduto))
            salvaItens();
        })
    })
 }

 adicionaCarrinhoTodos();
