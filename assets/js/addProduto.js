const botaoAdd = document.querySelector("[data-addBtn]")

botaoAdd.addEventListener('click', addItem)

function addItem() {
    const arrayAgainProdutos = localStorage.getItem('arrayProdutos');
    arrayProdutosSalvos = JSON.parse(arrayAgainProdutos);

    const imgAdd = document.querySelector("[data-addImg]").value;
    const altAdd = document.querySelector("[data-addAlt]").value;
    const nomeAdd = document.querySelector("[data-addNome]").value;
    const descAdd = document.querySelector("[data-addDesc]").value;
    const precoAdd = document.querySelector("[data-addPreco]").value;
    const ofertaAdd = document.querySelector("[data-addOferta]").checked;

    let novoProduto = {
        id : new Date(),
        imagem : imgAdd,
        alt : altAdd,
        nome : nomeAdd,
        descricao: descAdd,
        preco: precoAdd,
        quantidade : "1"
    }

    ofertaAdd == false ? produtosTodos.unshift(novoProduto) : produtosOferta.unshift(novoProduto);
    salvaProdutos();
    salvaOfertas();
}
