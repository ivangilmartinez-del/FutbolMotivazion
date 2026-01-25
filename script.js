// ===== CHATBOT IA =====
const chatBtn = document.getElementById('chatBtn');
const chatModal = document.getElementById('chatModal');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

// Abrir chat
if (chatBtn) {
    chatBtn.addEventListener('click', () => {
        chatModal.classList.add('active');
        chatInput.focus();
    });
}

// Cerrar chat
if (chatClose) {
    chatClose.addEventListener('click', () => {
        chatModal.classList.remove('active');
    });
}

// Cerrar al hacer clic fuera
chatModal.addEventListener('click', (e) => {
    if (e.target === chatModal) {
        chatModal.classList.remove('active');
    }
});

// Base de conocimientos del chatbot
const chatResponses = {
    'técnica': '¡Excelente pregunta! Para mejorar tu técnica: 1) Practica control de balón 15 min diarios, 2) Trabaja tu pierna menos hábil, 3) Observa videos de profesionales, 4) Practica regates con conos.',
    'ejercicios': 'Te recomiendo estos ejercicios: 1) Saltos de caja para potencia, 2) Sprints de 20m para velocidad, 3) Escalera de agilidad, 4) Trabajo de core para estabilidad, 5) Flexibilidad con estiramientos dinámicos.',
    'motivado': 'Mantente motivado con estos tips: 1) Establece metas alcanzables a corto plazo, 2) Celebra tus pequeños logros, 3) Entrena con compañeros, 4) Visualiza tu éxito, 5) Recuerda por qué amas el fútbol.',
    'entrenamiento': 'Un buen entrenamiento incluye: 1) Calentamiento (10 min), 2) Técnica individual (20 min), 3) Ejercicios tácticos (30 min), 4) Partido práctica (30 min), 5) Estiramiento (10 min).',
    'alimentación': 'Nutrición para futbolistas: 1) Carbohidratos complejos (arroz, pasta), 2) Proteínas magras (pollo, pescado), 3) Frutas y verduras, 4) Hidratación constante, 5) Evita comida chatarra.',
    'lesiones': 'Prevención de lesiones: 1) Calienta siempre antes de jugar, 2) Estira después, 3) Fortalece músculos estabilizadores, 4) Descansa adecuadamente, 5) Usa equipo apropiado.',
    'mentalidad': 'Mentalidad ganadora: 1) Confianza en ti mismo, 2) Aprende de los errores, 3) Mantén actitud positiva, 4) Visualiza el éxito, 5) Nunca te rindas.',
    'equipo': 'Trabajo en equipo: 1) Comunica constantemente, 2) Apoya a tus compañeros, 3) Entiende tu rol, 4) Celebra los éxitos juntos, 5) Aprende de cada jugador.',
    'default': '¡Interesante pregunta! Como asistente de FútbolMotiva, te recomiendo explorar nuestras secciones de Motivación y Tips. ¿Te gustaría saber sobre técnica, ejercicios o mantener la motivación?'
};

// Función para agregar mensaje
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${isUser ? 'user' : 'robot'}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Función para mostrar indicador de escritura
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
}

// Función para obtener respuesta
function getResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    for (const [key, response] of Object.entries(chatResponses)) {
        if (key !== 'default' && lowerQuestion.includes(key)) {
            return response;
        }
    }
    
    return chatResponses.default;
}

// Procesar mensaje
function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        const typingIndicator = showTyping();
        
        setTimeout(() => {
            typingIndicator.remove();
            const response = getResponse(message);
            addMessage(response);
        }, 1500);
    }
}

// Event listeners
if (chatSend) {
    chatSend.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Quick replies
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
        const question = e.target.getAttribute('data-question');
        chatInput.value = question;
        sendMessage();
    }
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== CONTADOR ANIMADO ESTADÍSTICAS =====
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
};

const statsSection = document.getElementById('stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ===== SLIDER CARRUSEL INFINITO =====
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');

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
