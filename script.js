// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initial Load Animation
const tl = gsap.timeline();

tl.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
})
.from('.hero-content h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
}, '-=0.5')
.from('.hero-content .subtitle', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.6')
.from('.hero-content .tagline', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.6')
.from('.hero-content .btn', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.6');

// Scroll Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// About Section
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Cards Staggered Animation
gsap.from('.card', {
    scrollTrigger: {
        trigger: '.experience-grid',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Skills Staggered Animation
gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills-wrapper',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Writing Cards Staggered Animation
gsap.from('.writing-card', {
    scrollTrigger: {
        trigger: '.writing-grid',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
