document.addEventListener('DOMContentLoaded', function () {
    // Menu Responsivo
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('active');
        }
    });

    // Carrossel
    const slides = document.querySelectorAll('.carousel-slide');
    const carousel = document.querySelector('.carousel');
    let currentSlide = 0;
    let intervalId;

    function showSlide(n) {
        slides.forEach(slide => (slide.style.display = 'none'));
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (carousel) {
        intervalId = setInterval(nextSlide, 5000);

        carousel.addEventListener('mouseover', () => clearInterval(intervalId));
        carousel.addEventListener('mouseout', () => {
            intervalId = setInterval(nextSlide, 5000);
        });

        showSlide(currentSlide);
    }
});