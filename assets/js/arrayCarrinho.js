var arrayCarrinho = JSON.parse(localStorage.getItem('array')) || [];

function salvaItens() {
    const arrayJSON = JSON.stringify(arrayCarrinho);
    localStorage.setItem('array', arrayJSON);
}
