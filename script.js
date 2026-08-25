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

// Scroll Animations for Titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// About Section
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
    },
    x: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

// The animations for .card, .skill-category, and .writing-card 
// have been removed to ensure the content is always visible 
// regardless of layout shifts caused by media loading.

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Refresh ScrollTrigger after images and videos load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
