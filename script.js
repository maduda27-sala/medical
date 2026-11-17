// Universo da Medicina

console.log("Bem-vindo ao Universo da Medicina!");

const links = document.querySelectorAll('.menu a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        console.log("Navegando pelo site...");
    });
});