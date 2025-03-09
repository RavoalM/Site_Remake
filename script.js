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

    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const modalImage = document.getElementById("modal-image");
        const closeModal = document.querySelector(".close");
    
        // Ação para abrir a janela modal
        document.addEventListener("DOMContentLoaded", function () {
            const modals = document.querySelectorAll(".modal");
            const openModalButtons = document.querySelectorAll(".open-modal");
            const closeModalButtons = document.querySelectorAll(".close");
        
            // Ação para abrir a janela modal
            openModalButtons.forEach(button => {
                button.addEventListener("click", function () {
                    const modalId = button.getAttribute("data-modal");
                    const modal = document.getElementById(modalId);
                    modal.style.display = "block"; // Mostra a janela modal
                });
            });
        
            // Ação para fechar a janela modal
            closeModalButtons.forEach(button => {
                button.addEventListener("click", function () {
                    const modal = button.closest(".modal");
                    modal.style.display = "none"; // Esconde a janela modal
                });
            });
        
            // Fecha a modal se o usuário clicar fora dela
            window.addEventListener("click", function (event) {
                modals.forEach(modal => {
                    if (event.target === modal) {
                        modal.style.display = "none"; // Esconde a janela modal
                    }
                });
            });
        });
    });
});
    // Função para alternar o menu no celular
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.getElementById("navbar");
    
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("open"); 
    });

document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', function() {
        const character = this.parentElement.querySelector('h2').innerText.toLowerCase();
        const modal = document.getElementById(`modal-${character}`);
        modal.style.display = "block";
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
        this.parentElement.parentElement.style.display = "none";
    }
});