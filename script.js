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

// LIGHTBOX - agrandar imágenes de la galería
const images = document.querySelectorAll('.galeria img');

if (images.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:1000;justify-content:center;align-items:center;cursor:pointer;';
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            bigImg.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;';
            
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            
            lightbox.appendChild(bigImg);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

// ANIMACIÓN SECCIONES AL SCROLL
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// BOTÓN VOLVER ARRIBA
const topBtn = document.getElementById('topBtn');

if (topBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });
    
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
