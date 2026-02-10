// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const typewriterElement = document.getElementById('typewriter');

// ===== Typewriter Effect =====
const roles = [
    'Data Science Enthusiast',
    'Machine Learning Engineer',
    'Python Developer',
    'Data Analyst'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start typewriter effect
setTimeout(typeWriter, 1000);

// ===== Navbar Scroll Effect =====
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

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

window.addEventListener('scroll', highlightNavLink);

// ===== Animate Numbers =====
const statNumbers = document.querySelectorAll('.stat-number');

function animateNumbers() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };

        updateNumber();
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Trigger number animation when stats section is visible
            if (entry.target.classList.contains('profile-card')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.reveal, .profile-card').forEach(el => {
    observer.observe(el);
});

// Add reveal class to sections
document.querySelectorAll('.project-card, .skills-category, .achievement-card, .cert-card, .highlight-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ===== Smooth Scroll for Safari =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Parallax Effect for Orbs =====
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// ===== Console Easter Egg =====
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cFeel free to check out the code. Built with ❤️ by Vidath', 'font-size: 14px; color: #a1a1aa;');
console.log('%c📧 Contact: tvidath@gmail.com', 'font-size: 12px; color: #14b8a6;');
