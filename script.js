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
});

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}
