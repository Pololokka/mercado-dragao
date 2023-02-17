const ofertaP = document.querySelector("[data-oferta]");

produtosOferta.length = 6;

function printaProdutosOferta(){
    produtosOferta.map(function(item){
        ofertaP.innerHTML += `
            <div class="produto__container">
                <img src="${item.imagem}" alt="${item.alt}" class="produto__imagem">
                <p class="subtitulo produto__titulo produto__conteudo">${item.nome}</p>
                <p class="texto produto__descricao produto__conteudo">${item.descricao}</p>
                <p class="texto produto__preco produto__conteudo">R$ ${item.preco}</p>
                <input type="button" class="texto produto__botao produto__conteudo" value="Pedir para o mercador" data-oferta="${item.id}">
            </div>
        `
    });
}

function adicionaCarrinhoTodos() {
    const botao = document.querySelectorAll("[data-oferta]");
    botao.forEach( elemento => {
        elemento.addEventListener('click', evento => {
            console.log(evento.target.getAttribute('data-oferta'))
            let idProduto = evento.target.getAttribute('data-oferta');
            arrayCarrinho.push(produtosOferta.find(elemento => elemento.id == idProduto))
            salvaItens();
        })
    })
 }

adicionaCarrinhoTodos();
printaProdutosOferta();
