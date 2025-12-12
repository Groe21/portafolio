// ==================================
// NAVIGATION
// ==================================

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function activateMenuAtCurrentSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateMenuAtCurrentSection);

// ==================================
// SCROLL TO TOP BUTTON
// ==================================

const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================================
// SMOOTH SCROLLING
// ==================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================================
// SKILLS ANIMATION
// ==================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

animateSkillBars();

// ==================================
// FADE IN ON SCROLL
// ==================================

const fadeElements = document.querySelectorAll('.service-card, .project-card, .timeline-item, .stat-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// ==================================
// CONTACT FORM
// ==================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simple client-side validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showFormMessage('Por favor completa todos los campos.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Por favor ingresa un correo electrónico válido.', 'error');
            return;
        }
        
        // For now, just show success message
        // In production, you would send this to a backend server
        showFormMessage('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        contactForm.reset();
        
        // Optional: Integrate with EmailJS or similar service
        // Example with EmailJS:
        // emailjs.send('service_id', 'template_id', formData)
        //     .then(() => {
        //         showFormMessage('¡Mensaje enviado con éxito!', 'success');
        //         contactForm.reset();
        //     })
        //     .catch(() => {
        //         showFormMessage('Error al enviar el mensaje. Intenta de nuevo.', 'error');
        //     });
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ==================================
// TYPING ANIMATION (Optional)
// ==================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to activate typing animation on hero title
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });

// ==================================
// STATS COUNTER ANIMATION
// ==================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

animateCounters();

// ==================================
// PROJECT IMAGE PLACEHOLDER
// ==================================

// Handle broken images gracefully
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('error', function() {
        // Create a placeholder if image fails to load
        this.style.display = 'none';
        const parent = this.parentElement;
        if (!parent.querySelector('.img-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'img-placeholder';
            placeholder.innerHTML = '<i class="fas fa-image fa-3x"></i>';
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                color: white;
            `;
            parent.insertBefore(placeholder, parent.firstChild);
        }
    });
});

// ==================================
// CURSOR EFFECT (Optional)
// ==================================

// Uncomment to add a custom cursor effect
// const cursor = document.createElement('div');
// cursor.className = 'custom-cursor';
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// });

// document.querySelectorAll('a, button').forEach(el => {
//     el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
//     el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
// });

// ==================================
// PRELOADER (Optional)
// ==================================

window.addEventListener('load', () => {
    // Remove preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
    
    // Initialize animations
    document.body.classList.add('loaded');
});

// ==================================
// DARK MODE TOGGLE (Optional)
// ==================================

// Uncomment to add dark mode functionality
// const darkModeToggle = document.getElementById('darkModeToggle');
// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// if (darkModeToggle) {
//     // Check for saved user preference
//     const currentTheme = localStorage.getItem('theme');
//     if (currentTheme === 'dark') {
//         document.body.classList.add('dark-mode');
//     }

//     darkModeToggle.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//         localStorage.setItem('theme', theme);
//     });
// }

// ==================================
// CONSOLE MESSAGE
// ==================================

console.log('%c¡Hola Developer! 👋', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c¿Te gusta lo que ves? ¡Hablemos!', 'color: #f59e0b; font-size: 14px;');
console.log('%cEmail: guerreroemilio001@gmail.com', 'color: #6b7280; font-size: 12px;');
