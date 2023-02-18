const produtosTodos = JSON.parse(localStorage.getItem('arrayProdutos')) || [
    {
        id : "0",
        imagem : "https://cdn.discordapp.com/attachments/621499803884584998/1076243333996875867/sapo.png",
        alt: "Sapo, de Chrono Trigger",
        nome : "Sapola do Chrono Trigger",
        descricao: "O mais valente dos cavaleiros, agora na sua casa! Impresso em resina e pintado a mão.",
        preco: "150,00"
    },
    {   
        id : "1",
        imagem : "https://cdn.discordapp.com/attachments/621499803884584998/1076243333749416047/rolf.png",
        alt: "Rolf, o Bárbaro",
        nome : "Rolf, o Bárbaro",
        descricao: "Este sanguinário bárbaro mata orcs zumbis no café da manhã. Mini de plástico pintada a mão.",
        preco: "100,00"
    },
    {
        id : "2",
        imagem : "https://cdn.discordapp.com/attachments/621499803884584998/1076243333531324576/rex.png",
        alt: "Capitão Rex",
        nome : "Capitão Rex",
        descricao: "O comandante da 501ª está pronto para liderar suas tropas. Mini de plástico pintada a mão.",
        preco: "120,00"
    }
];

function salvaProdutos() {
    const arrayProdutosJSON = JSON.stringify(produtosTodos);
    localStorage.setItem('arrayProdutos', arrayProdutosJSON);
}

salvaProdutos();
