document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os itens do menu de navegação
    const navItems = document.querySelectorAll("nav.item div");
    // Seleciona todas as seções de conteúdo de cada personagem
    const sections = document.querySelectorAll("main section");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Esconde todas as seções
            sections.forEach(section => section.style.display = "none");
            // Mostra a seção correspondente ao item clicado
            sections[index].style.display = "block";
        });
    });

    // Exibe apenas a primeira seção por padrão
    sections.forEach(section => section.style.display = "none");
    if (sections[0]) {
        sections[0].style.display = "block";
    }
});
