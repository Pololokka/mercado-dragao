var arrayCarrinho = [];

function salvaItens() {
    const arrayJSON = JSON.stringify(arrayCarrinho);
    localStorage.setItem('array', arrayJSON);
}
