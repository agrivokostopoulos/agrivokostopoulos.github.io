/* 
 * main.js
 * Logic for:
 * 1. Mobile navigation toggle
 * 2. Smooth scrolling
 * 3. Active link highlighting
 * 4. Expandable abstracts
 * 5. Dark Mode Toggle
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Dark Mode Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else if (currentTheme == 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    } else if (prefersDarkScheme.matches) {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });

    // --- Mobile Navigation ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a'); // Fixed selector

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon based on state
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a'); // Fixed selector

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // -100 to offset header height
            if (pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(currentSection)) {
                item.classList.add('active');
            }
        });
    });

    // --- Expandable Abstracts ---
    const toggles = document.querySelectorAll('.abstract-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling; // The .abstract-content div

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                toggle.textContent = 'Hide full abstract';
            } else {
                content.classList.add('hidden');
                toggle.textContent = 'Read full abstract';
            }
        });
    });

});
