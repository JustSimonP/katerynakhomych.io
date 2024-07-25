// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            window.location.href = href;
        });
    });

    // Dropdown menu toggle for mobile view
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});