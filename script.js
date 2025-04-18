document.addEventListener('DOMContentLoaded', function() {
    // Control del reproductor de audio
    const playDemoBtn = document.getElementById('playDemo');
    const demoAudio = document.getElementById('demoAudio');
    let isPlaying = false;

    playDemoBtn.addEventListener('click', function() {
        if (isPlaying) {
            demoAudio.pause();
            playDemoBtn.textContent = 'Escuchar Demo';
        } else {
            demoAudio.play();
            playDemoBtn.textContent = 'Pausar Demo';
        }
        isPlaying = !isPlaying;
    });

    // Control del slider de artistas
    const slides = document.querySelectorAll('.artist-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });

    // Auto-avance del slider cada 5 segundos
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Aquí normalmente enviarías los datos a un servidor
        console.log('Formulario enviado:', { name, email, message });
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        
        // Resetear el formulario
        contactForm.reset();
    });

    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});