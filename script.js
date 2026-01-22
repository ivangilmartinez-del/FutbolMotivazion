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
