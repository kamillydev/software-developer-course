document.getElementById("language-opt").addEventListener("change", function () {
    if (this.value == "PT") {
        traduzirParaPortugues();
    } else {
        traduzirParaIngles();
    }
});

function traduzirParaPortugues() {
    //tudo que a função executa acontece entre as chaves
    //Filmes, séries e muito mais. Sem limites.
    document.getElementById("qualquer-coisa").innerText = "Filmes, séries e muito mais. Sem limites."
};
function traduzirParaIngles() {
    document.getElementById("qualquer-coisa").innerText = "Unlimited movies, TV shows, and more."
};