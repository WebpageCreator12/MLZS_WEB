document.addEventListener('DOMContentLoaded', () => {
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

// --- Mobile Menu Logic ---
if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Toggle icon from bars to times/close
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        
        // Prevent background scrolling when menu is open
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    });
}


// --- Preloader Logic (Existing) ---
const hidePreloader = () => {
    // Start fade-out
    preloader.style.opacity = '0';
    
    // Wait for fade-out and then show main content with fade-in
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.classList.remove('hidden'); 
        mainContent.style.opacity = '1'; 
    }, 500); 
};

// Use window.onload to ensure all assets are loaded
window.addEventListener('load', () => {
    // Ensure the preloader runs for at least 1.5 seconds
    setTimeout(hidePreloader, 1500);
});

// Fallback for fast loads
if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 500);
}
});