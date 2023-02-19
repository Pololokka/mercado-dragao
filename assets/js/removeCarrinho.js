function removeCarrinho() {
    const botao = document.querySelectorAll("[data-remove]");
    botao.forEach( elemento => {
        elemento.addEventListener('click', evento => {
            console.log(arrayCarrinho);
            const idProduto = evento.target.getAttribute('data-remove');
            const index = arrayCarrinho.findIndex(elemento => elemento.id == idProduto)
            console.log(index)
            console.log(idProduto)
            arrayCarrinho.splice(index, 1);
            salvaItens();
            location.reload()
        })
    })
}
removeCarrinho();
