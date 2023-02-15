const todosP = document.querySelector("[data-todos]");

const produtosTodos = [
    {
        imagem : "assets/img/sapo.png",
        alt: "Sapo, de Chrono Trigger",
        nome : "Sapola do Chrono Trigger",
        descricao: "O mais valente dos cavaleiros, agora na sua casa! Impresso em resina e pintado a mão.",
        preco: "150,00"
    },
    {
        imagem : "assets/img/rolf.png",
        alt: "Rolf, o Bárbaro",
        nome : "Rolf, o Bárbaro",
        descricao: "Este sanguinário bárbaro mata orcs zumbis no café da manhã. Mini de plástico pintada a mão.",
        preco: "100,00"
    },
    {
        imagem : "assets/img/rex.png",
        alt: "Captão Rex",
        nome : "Captão Rex",
        descricao: "O comandante da 501ª está pronto para liderar suas tropas. Mini de plástico pintada a mão.",
        preco: "120,00"
    },
    {
        imagem : "assets/img/sapo.png",
        alt: "Sapo, de Chrono Trigger",
        nome : "Sapola do Chrono Trigger",
        descricao: "O mais valente dos cavaleiros, agora na sua casa! Impresso em resina e pintado a mão.",
        preco: "150,00"
    },
    {
        imagem : "assets/img/rolf.png",
        alt: "Rolf, o Bárbaro",
        nome : "Rolf, o Bárbaro",
        descricao: "Este sanguinário bárbaro mata orcs zumbis no café da manhã. Mini de plástico pintada a mão.",
        preco: "100,00"
    },
    {
        imagem : "assets/img/rex.png",
        alt: "Captão Rex",
        nome : "Captão Rex",
        descricao: "O comandante da 501ª está pronto para liderar suas tropas. Mini de plástico pintada a mão.",
        preco: "120,00"
    },
    {
        imagem : "assets/img/sapo.png",
        alt: "Sapo, de Chrono Trigger",
        nome : "Sapola do Chrono Trigger",
        descricao: "O mais valente dos cavaleiros, agora na sua casa! Impresso em resina e pintado a mão.",
        preco: "150,00"
    },
    {
        imagem : "assets/img/rolf.png",
        alt: "Rolf, o Bárbaro",
        nome : "Rolf, o Bárbaro",
        descricao: "Este sanguinário bárbaro mata orcs zumbis no café da manhã. Mini de plástico pintada a mão.",
        preco: "100,00"
    },
    {
        imagem : "assets/img/rex.png",
        alt: "Captão Rex",
        nome : "Captão Rex",
        descricao: "O comandante da 501ª está pronto para liderar suas tropas. Mini de plástico pintada a mão.",
        preco: "120,00"
    }
 ];

 var listaProdutosTodos = produtosTodos.map(function(item){
    todosP.innerHTML += `
        <div class="produto__container">
            <img src="../${item.imagem}" alt="${item.alt}" class="produto__imagem">
            <p class="subtitulo produto__titulo produto__conteudo">${item.nome}</p>
            <p class="texto produto__descricao produto__conteudo">${item.descricao}</p>
            <p class="texto produto__preco produto__conteudo">R$ ${item.preco}</p>
            <input type="button" class="texto produto__botao produto__conteudo" value="Pedir para o mercador" data-valor="${item.preco}">
        </div>
    `
 });

