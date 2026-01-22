const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190; // ancho de imagen + margen
const totalSlides = track.children.length;
const visibleSlides = Math.floor(document.querySelector('.slider-track-container').offsetWidth / slideWidth);

nextBtn.addEventListener('click', () => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});
<script src="script.js"></script>
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190; // ancho de imagen + margen
const totalSlides = track.children.length;
const container = document.querySelector('.slider-track-container');
const visibleSlides = Math.floor(container.offsetWidth / slideWidth);

// Función mover slider
function moveSlider() {
    if (position <= -(slideWidth * (totalSlides - visibleSlides))) {
        position = 0;
    } else {
        position -= 1; // mueve automáticamente 1px por frame
    }
    track.style.transform = `translateX(${position}px)`;
}

// Slider automático
let autoSlide = setInterval(moveSlider, 20); // velocidad suave

// Botones
nextBtn.addEventListener('click', () => {
    position -= slideWidth;
    if(position < -(slideWidth * (totalSlides - visibleSlides))) position = 0;
    track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
    position += slideWidth;
    if(position > 0) position = -(slideWidth * (totalSlides - visibleSlides));
    track.style.transform = `translateX(${position}px)`;
});

// Pausar automático al pasar el ratón
container.addEventListener('mouseenter', () => clearInterval(autoSlide));
container.addEventListener('mouseleave', () => autoSlide = setInterval(moveSlider, 20));
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190;
const totalSlides = track.children.length;
const visibleSlides = Math.floor(document.querySelector('.slider-track-container').offsetWidth / slideWidth);

// Flechas
nextBtn.addEventListener('click', () => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});

// Movimiento automático cada 3 segundos
setInterval(() => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
    } else {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
}, 3000);
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190;
const totalSlides = track.children.length;
const visibleSlides = Math.floor(document.querySelector('.slider-track-container').offsetWidth / slideWidth);

// Flechas
nextBtn.addEventListener('click', () => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});

// Movimiento automático cada 3 segundos
setInterval(() => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
    } else {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
}, 3000);
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190;
const totalSlides = track.children.length;
const visibleSlides = Math.floor(document.querySelector('.slider-track-container').offsetWidth / slideWidth);

// Flechas
nextBtn.addEventListener('click', () => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});

// Movimiento automático cada 3 segundos
setInterval(() => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
    } else {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
}, 3000);
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190;
const totalSlides = track.children.length;
const visibleSlides = Math.floor(document.querySelector('.slider-track-container').offsetWidth / slideWidth);

// Flechas
nextBtn.addEventListener('click', () => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});

// Movimiento automático cada 3 segundos
setInterval(() => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
    } else {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
}, 3000);
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;
const slideWidth = 190;
const totalSlides = track.children.length;
const visibleSlides = Math.floor(document.querySelector('.slider-track-container').offsetWidth / slideWidth);

// Flechas
nextBtn.addEventListener('click', () => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});

// Movimiento automático cada 3 segundos
setInterval(() => {
    if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
    } else {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
}, 3000);
