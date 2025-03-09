document.addEventListener("DOMContentLoaded", function () {
    // Slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? "block" : "none"; // Mostra apenas o slide atual
        });

        slideIndex = (slideIndex + 1) % slides.length; // Avança para o próximo slide
        setTimeout(showSlides, 3000); // Troca a cada 3 segundos
    }

    showSlides(); // Inicia o slideshow

    // Modal
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");

    // Ação para abrir a janela modal
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = card.querySelector("h3").innerText;
            const description = card.querySelector("p").innerText;
            const imgSrc = card.querySelector("img").src; // Imagem do cartão

            modalTitle.innerText = title;
            modalDescription.innerText = description;
            modalImage.src = imgSrc;

            modal.style.display = "block"; // Mostra a janela modal
        });
    });

    // Ação para fechar a janela modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Esconde a janela modal
    });

    // Fecha a modal se o usuário clicar fora dela
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Esconde a janela modal
        }
    });

    // Função para alternar o menu no celular
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("open"); // Alterna a classe 'open' no navbar
    });
});