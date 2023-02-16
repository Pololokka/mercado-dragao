var arrayCarrinho = JSON.parse(localStorage.getItem('array')) || [];
console.log(arrayCarrinho)

function salvaItens() {
    const arrayJSON = JSON.stringify(arrayCarrinho);
    localStorage.setItem('array', arrayJSON);
}
