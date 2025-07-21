// script.js
const navLinks = document.querySelector('.nav-links');

document.querySelector('.navbar .logo').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});


