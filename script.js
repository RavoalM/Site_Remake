document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach(slide => (slide.style.display = "none")); // Esconde todos os slides

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1; // Reinicia no primeiro slide
        }

        slides[slideIndex - 1].style.display = "block"; // Mostra o slide atual

        setTimeout(showSlides, 3000); // Troca a cada 3 segundos
    }

    showSlides(); // Inicia o slideshow

    // Código para flip nos cartões e menu hamburguer
    const cards = document.querySelectorAll(".card");
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.getElementById("navbar");

    // Ação para flip nos cartões
    cards.forEach(card => {
        card.addEventListener("click", function (event) {
            // Ignora a interação se o clique for no botão "Fechar"
            if (!event.target.classList.contains('close-btn')) {
                card.classList.toggle("flipped");
            }
        });
    });

    const closeButtons = document.querySelectorAll(".close-btn");
    closeButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const card = event.target.closest(".card");
            card.classList.remove("flipped");
        });
    });

    // Função para alternar o menu no celular
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });
});
