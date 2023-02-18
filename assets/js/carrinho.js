const carrinhoP = document.querySelector("[data-carrinho]");

function printaCarrinho(){
    const arrayAgain = localStorage.getItem('array');
    arrayConvertido = JSON.parse(arrayAgain);

    arrayConvertido.map(function(item){
        carrinhoP.innerHTML += `
            <div class="carrinho__produto">
                <img src="../${item.imagem}" alt="${item.alt}" class="carrinho__img">
                <p class="texto carrinho__nome">${item.nome}</p>
                <div class="carrinho__quantidade">
                    <label class="texto" for="qta-carrinho">Quantidade:</label>
                    <input type="number" name="qta" class="qta__carrinho" id="qta-carrinho" max="99" data-quantidade>
                </div>
                <p class="texto carrinho__preco" data-preco>R$ ${item.preco}</p>
            </div>
        `
    });

    carrinhoP.innerHTML += `
        <input type="button" value="Finalizar Compra" class="texto compra__botao compra__conteudo">
    `
}

// function atualizaPreco(){
//     const qta = document.querySelectorAll("[data-quantidade]")
//     let valorFinal;
//     console.log(qta);
//     qta.forEach( elemento => {
//         elemento.addEventListener('change', evento => {
//             preco = arrayCarrinho.preco;
//             console.log(preco);
//             valorFinal = preco * evento.target.value;
//             console.log(valorFinal);
//         })
//     })
// }

printaCarrinho();
//atualizaPreco();
