let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Función para mostrar una diapositiva específica
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Función para mover el carrusel (adelante o atrás)
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Cambio automático de diapositivas cada 5 segundos
let autoSlideInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Detener el cambio automático cuando el usuario interactúa con los controles
document.querySelectorAll('.carousel-control').forEach(control => {
    control.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Detener el intervalo
        autoSlideInterval = setInterval(() => {
            moveSlide(1);
        }, 5000); // Reiniciar el intervalo
    });
});

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Asignar eventos a los botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => moveSlide(-1));
document.getElementById('nextBtn').addEventListener('click', () => moveSlide(1));



// Código de las citas aleatorias
const frases = [
    "Yo soy Iron Man. - Tony Stark",
    "Puedo hacer esto todo el día. - Steve Rogers",
    "¡Por Asgard! - Thor",
    "Wakanda Forever. - T'Challa",
    "Los grandes poderes conllevan grandes responsabilidades. - Tío Ben",
    "¡Hulk aplasta! - Hulk"
];

const boton = document.getElementById('quoteButton');
const textoCita = document.getElementById('quoteText');

boton.addEventListener('click', function() {
    const indice = Math.floor(Math.random() * frases.length);
    textoCita.textContent = frases[indice];
});
