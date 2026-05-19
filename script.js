/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
});

/* ============================================
   ACTIVE NAV LINK
   ============================================ */

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

/* ============================================
   SMOOTH SCROLL
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .team-member, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ============================================
   SCROLL EFFECT FOR NAVBAR
   ============================================ */

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

/* ============================================
   COUNTER ANIMATION
   ============================================ */

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const achievementCards = document.querySelectorAll('.achievement-card h3');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            achievementCards.forEach(card => {
                const text = card.textContent;
                let number = parseInt(text.replace(/\D/g, ''));
                animateCounter(card, number);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const achievementsSection = document.querySelector('.achievements');
if (achievementsSection) {
    counterObserver.observe(achievementsSection);
}

/* ============================================
   FORM VALIDATION
   ============================================ */

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Validation happens in the HTML form itself
        // This is just for additional handling if needed
    });
}

/* ============================================
   PRODUCT RATING DISPLAY
   ============================================ */

function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    return stars;
}

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */

function createBackToTopButton() {
    const button = document.createElement('div');
    button.id = 'backToTop';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        font-size: 24px;
        box-shadow: var(--shadow-lg);
    `;
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
}

createBackToTopButton();

/* ============================================
   LAZY LOADING SIMULATION
   ============================================ */

function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

setupLazyLoading();

/* ============================================
   ADD CSS RULE FOR SCROLLED NAVBAR
   ============================================ */

const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
    
    #backToTop:hover {
        background-color: var(--primary-dark);
        box-shadow: 0 8px 20px rgba(0, 102, 204, 0.4);
    }
`;
document.head.appendChild(style);

/* ============================================
   INITIALIZATION
   ============================================ */

console.log('RehabCare website loaded successfully');
