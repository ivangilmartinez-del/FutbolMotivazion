// SLIDER CARRUSEL INFINITO
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (track && nextBtn && prevBtn) {
    let position = 0;
    const slideWidth = 190;
    const slides = Array.from(track.children);
    let totalSlides = slides.length;

    // DUPLICAMOS SLIDES PARA CARRUSEL INFINITO
    slides.forEach(slide => track.appendChild(slide.cloneNode(true)));

    const moveSlider = (dir = 1) => {
        position -= dir * slideWidth;
        track.style.transition = 'transform 0.5s linear';
        track.style.transform = `translateX(${position}px)`;
        if (Math.abs(position) >= slideWidth * totalSlides) {
            setTimeout(() => {
                track.style.transition = 'none';
                position = 0;
                track.style.transform = `translateX(0px)`;
            }, 500);
        }
    };

    nextBtn.addEventListener('click', () => moveSlider(1));
    prevBtn.addEventListener('click', () => moveSlider(-1));
    setInterval(() => moveSlider(1), 3000);
}

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

if (lightbox && lightboxImg && closeBtn) {
    document.querySelectorAll('.mini-galeria img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });
    closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });
    lightbox.addEventListener('click', e => {
        if (e.target !== lightboxImg) lightbox.style.display = 'none';
    });
}

// BOTÓN VER MÁS
document.querySelectorAll('.ver-mas').forEach(btn => {
    btn.addEventListener('click', () => {
        const tips = btn.previousElementSibling.querySelectorAll('.more-content');
        tips.forEach(tip => {
            tip.style.display = tip.style.display === 'list-item' ? 'none' : 'list-item';
        });
    });
});

// ANIMACIÓN SECCIONES AL SCROLL
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerBottom) { section.classList.add('show'); }
    });
});

// BOTÓN VOLVER ARRIBA
const topBtn = document.getElementById('topBtn');

if (topBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { topBtn.style.display = 'block'; }
        else { topBtn.style.display = 'none'; }
    });
    topBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}
// LIGHTBOX - agrandar imágenes
const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const bigImg = document.createElement("img");
    bigImg.src = img.src;

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(bigImg);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
showSlide(currentSlide);
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const frases = [
  "El esfuerzo de hoy es el éxito de mañana.",
  "Entrena como juegas, juega como sueñas.",
  "Sin sacrificio no hay victoria.",
  "El talento suma, la mentalidad multiplica.",
  "No se trata de ser el mejor, sino de ser mejor que ayer."
];

const fraseBox = document.getElementById("frase");

if (fraseBox) {
  fraseBox.textContent = frases[Math.floor(Math.random() * frases.length)];
}
let count = 0;
const counter = document.getElementById("contador");

function subirContador() {
  if (count < 100) {
    count++;
    counter.textContent = count + "% Motivación";
    setTimeout(subirContador, 30);
  }
}

subirContador();
