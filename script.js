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

    // ATIVA O MENU HAMBURGUER
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // ATIVA O DROPDOWN NO "MAIS"
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropbtn && dropdownContent) {
        dropbtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Impede que o clique feche o menu automaticamente
            dropdownContent.classList.toggle("show");
        });

        // Fecha o dropdown ao clicar fora
        document.addEventListener("click", function (event) {
            if (!dropdownContent.contains(event.target) && !dropbtn.contains(event.target)) {
                dropdownContent.classList.remove("show");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function (event) {
            // Ignora a interação se o clique for no botão "Fechar"
            if (!event.target.classList.contains("close-btn")) {
                card.classList.toggle("flipped");
            }
        });
    });

    // Fechar o cartão quando clicar no botão de fechar
    document.querySelectorAll(".close-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Impede que o clique feche o cartão novamente
            this.closest(".card").classList.remove("flipped");
        });
    });
});

