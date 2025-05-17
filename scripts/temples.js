// ========== HAMBURGER MENU ==========
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    menuButton.innerHTML = isOpen ? '&#9776;' : '✖';
  });
}

// ========== FOOTER: YEAR & LAST MODIFIED ==========
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('last-modified');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// ========== INTERACTIVE TEMPLE DETAILS ==========
function showDetails(title, description) {
  const titleElement = document.getElementById('temple-title');
  const descElement = document.getElementById('temple-description');
  const detailsSection = document.getElementById('photo-details');

  if (titleElement && descElement && detailsSection) {
    titleElement.textContent = title;
    descElement.textContent = description;
    detailsSection.classList.remove('hidden');
  }
}

// ========== CLOSE DETAILS WHEN CLICKING OUTSIDE ==========
document.addEventListener('click', (e) => {
  const details = document.getElementById('photo-details');
  const isInsideFigure = e.target.closest('figure');
  const isInsideDetails = e.target.closest('#photo-details');

  if (details && !isInsideFigure && !isInsideDetails) {
    details.classList.add('hidden');
  }
});
