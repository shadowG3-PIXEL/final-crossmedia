// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Simular botón de logo para volver al inicio
const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Simular acción del botón "Explorar ahora"
const explorarBtn = document.getElementById('explorar-btn');
if (explorarBtn) {
    explorarBtn.addEventListener('click', () => {
        const productosMasVendidos = document.getElementById('productos-mas-vendidos');
        if (productosMasVendidos) {
            window.scrollTo({ top: productosMasVendidos.offsetTop, behavior: 'smooth' });
        }
    });
}

// Modal Variables
const cartModal = document.getElementById('cartModal');
const closeButton = document.querySelector('.close-button');

if (cartModal && closeButton) {
    // Función para abrir el modal
    function openModal() {
        cartModal.style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModal() {
        cartModal.style.display = 'none';
    }

    // Eventos para cerrar el modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            closeModal();
        }
    });

    // Simular acción de los botones de compra
    const compraBtns = document.querySelectorAll('.compra-btn');
    compraBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal();
        });
    });
}

// Simular envío del formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Te has inscrito a nuestras promociones con éxito!');
        contactForm.reset();
    });
}

// Manejo del Menú Hamburguesa
const hamburger = document.getElementById('hamburger');
const navbarUL = document.querySelector('.navbar ul');

if (hamburger && navbarUL) {
    hamburger.addEventListener('click', () => {
        navbarUL.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }

        // Añadir clase 'scrolled' al header cuando se hace scroll
        const header = document.querySelector('.header');
        if (header) {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Carrusel
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;

// Solo inicializar el carrusel si hay slides y botones
if (slides.length > 0 && prevBtn && nextBtn && indicators.length > 0) {
    // Mostrar slide
    function showSlide(index) {
        if (index >= totalSlides) { currentSlide = 0; }
        else if (index < 0) { currentSlide = totalSlides - 1; }
        else { currentSlide = index; }

        const slideWidth = slides[0].clientWidth;
        const carouselSlide = document.querySelector('.carousel-slide');
        if (carouselSlide) {
            carouselSlide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
    }
// Hacer clic en el botón de la Galería
const galeriaBtn = document.querySelector('a[href="#galeria"]');
if (galeriaBtn) {
    galeriaBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const galeriaSection = document.getElementById('galeria');
        if (galeriaSection) {
            galeriaSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

    // Navegar al siguiente slide
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        resetInterval();
    });

    // Navegar al slide anterior
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetInterval();
    });

    // Navegar al slide seleccionado
    indicators.forEach(ind => {
        ind.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-slide'));
            if (!isNaN(index)) {
                showSlide(index);
                resetInterval();
            }
        });
    });

    // Auto carrusel
    function startSlideShow() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000); // Cambia cada 5 segundos
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Iniciar carrusel
    startSlideShow();

    // Ajustar carrusel al cambiar tamaño de ventana
    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });
}

// Animaciones al hacer scroll
const faders = document.querySelectorAll('.hero-content, .card, .carousel-item, .contact-container');

if (faders.length > 0) {
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}
