
// ========== HAMBURGER MENU ==========
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'flex';
  navMenu.style.display = isOpen ? 'none' : 'flex';
  menuButton.innerHTML = isOpen ? '&#9776;' : '✖';
});

// ========== FOOTER: YEAR & LAST MODIFIED ==========
document.getElementById('year').textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;
