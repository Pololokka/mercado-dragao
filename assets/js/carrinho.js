const carrinhoP = document.querySelector("[data-carrinho]");

function printaCarrinho(){
    const arrayAgain = localStorage.getItem('array');
    arrayConvertido = JSON.parse(arrayAgain);

    arrayConvertido.map(item => {
        carrinhoP.innerHTML += `
            <div class="carrinho__produto">
                <img src="${item.imagem}" alt="${item.alt}" class="carrinho__img">
                <p class="texto carrinho__nome">${item.nome}</p>
                <div class="carrinho__quantidade">
                    <label class="texto" for="qta-carrinho">Quantidade:</label>
                    <input type="number" name="qta" class="qta__carrinho" id="qta-carrinho" max="99" min="0" data-qta="${item.id}">
                </div>
                <p class="texto carrinho__preco" id="${item.id}">R$ ${item.preco}</p>
                <input type="button" value="Remover Item" class="texto produto__botao" data-remove="${item.id}">
            </div>
        `
    });

    carrinhoP.innerHTML += `
        <input type="button" value="Finalizar Compra" class="texto compra__botao compra__conteudo">
    `
}

function atualizaPreco(){
    const qta = document.querySelectorAll("[data-qta]")
    let valorFinal;
    qta.forEach( elemento => {
        elemento.addEventListener('change', evento => {
            const idProduto = evento.target.getAttribute('data-qta');
            const achaItem = arrayCarrinho.find(elemento => elemento.id == idProduto)
            const achaIndex = arrayCarrinho.findIndex(elemento => elemento.id == idProduto)
            preco = parseInt(achaItem.preco);

            quantidade = evento.target.value;
            arrayCarrinho[achaIndex].quantidade = quantidade;
            valorFinal = preco * quantidade;
            console.log(valorFinal)

            const mudaPreco = document.getElementById(idProduto);
            mudaPreco.innerHTML = `R$ ${valorFinal},00`
        })
    })
}


printaCarrinho();
atualizaPreco();
