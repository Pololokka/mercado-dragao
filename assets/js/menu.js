const botao = document.getElementById('btn');
const menu = document.getElementById('menu');
const botaoFecha = document.getElementById('btn-fecha');

botao.addEventListener("click", () => {
    menu.classList.toggle("menu__container")
    botao.classList.toggle("menu__botao--click")
    console.log("clicou");
})

botaoFecha.addEventListener("click", () => {
    menu.classList.toggle("menu__container")
    botao.classList.toggle("menu__botao--click")
    console.log("clicou");
})