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
lightbox.addEventListener('click', e=>{
    if(e.target!==lightboxImg) lightbox.style.display='none';
});

// BOTÓN VER MÁS
document.querySelectorAll('.ver-mas').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const tips = btn.previousElementSibling.querySelectorAll('.more-content');
        tips.forEach(tip=>{
            tip.style.display = tip.style.display==='list-item'?'list-item':'list-item';
            tip.style.display='list-item';
        });
    });
});

// ANIMACIÓN SECCIONES AL SCROLL
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', ()=>{
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section=>{
        const top = section.getBoundingClientRect().top;
        if(top < triggerBottom){ section.classList.add('show'); }
    });
});

// BOTÓN VOLVER ARRIBA
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200){ topBtn.style.display='block'; }
    else{ topBtn.style.display='none'; }
});
topBtn.addEventListener('click', ()=>{ window.scrollTo({top:0, behavior:'smooth'}); });
