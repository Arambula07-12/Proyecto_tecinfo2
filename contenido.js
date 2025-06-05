document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic button to scroll to courses section
    const exploreCoursesBtn = document.querySelector('.hero-section .btn-primary');
    if (exploreCoursesBtn) {
        exploreCoursesBtn.addEventListener('click', () => {
            const sectionId = exploreCoursesBtn.dataset.section;
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Course category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const courseCards = document.querySelectorAll('.course-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filterCategory = button.dataset.category;

            courseCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (filterCategory === 'todos' || cardCategory === filterCategory) {
                    card.style.display = 'flex'; // Show card (using flex for structure)
                    card.style.animation = 'fadeIn 0.6s ease-out forwards'; // Re-animate
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });

    // Registration button alert (simple interaction)
    document.querySelectorAll('.register-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const courseId = e.currentTarget.dataset.courseId;
            const courseTitle = e.currentTarget.closest('.course-card').querySelector('h3').textContent;
            alert(`¡Genial! Te has pre-inscrito al curso: "${courseTitle}". Recibirás un correo con más detalles.`);
            // In a real application, you'd send this data to a backend.
        });
    });

    // Form submission (basic example)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name && email && message) {
                alert(`Mensaje enviado por ${name} (${email}). ¡Gracias por contactarnos!`);
                // Clear form fields
                this.reset();
                // In a real application, you'd use fetch() to send data to a server.
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }

    // Intersection Observer for animations on scroll (more advanced effect)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when out of view to re-animate on scroll back
                entry.target.classList.remove('fade-in-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add a base class for styling
        observer.observe(section);
    });

    // Add CSS for fade-in-section and fade-in-visible to your CSS file
    // (This is a conceptual addition, you'd actually add this to contenido.css)
    /*
    .fade-in-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .fade-in-section.fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
    // For now, the general animations in CSS are enough, but this is a path for more controlled scroll animations.
});
