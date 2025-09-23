const openButton = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');
const lines = openButton.querySelectorAll('span');

openButton.addEventListener('click', () => {
  const isClosed = menu.classList.contains('-translate-x-full');

  if (isClosed) {
    // Slide menu in (fade + scale up)
    menu.classList.remove('-translate-x-full', 'opacity-0', 'scale-95');
    menu.classList.add('translate-x-0', 'opacity-100', 'scale-100');

    // Show overlay
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');

    // Hamburger -> X
    lines[0].classList.add('rotate-45', 'translate-y-1.5');
    lines[1].classList.add('opacity-0');
    lines[2].classList.add('-rotate-45', '-translate-y-1.5');
  } else {
    // Ghost exit: fade + shrink + slide out
    menu.classList.add('-translate-x-full', 'opacity-0', 'scale-95');
    menu.classList.remove('translate-x-0', 'opacity-100', 'scale-100');

    // Hide overlay
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');

    // X -> Hamburger
    lines[0].classList.remove('rotate-45', 'translate-y-1.5');
    lines[1].classList.remove('opacity-0');
    lines[2].classList.remove('-rotate-45', '-translate-y-1.5');
  }
});

// Close when clicking on overlay
overlay.addEventListener('click', () => {
  menu.classList.add('-translate-x-full', 'opacity-0', 'scale-95');
  menu.classList.remove('translate-x-0', 'opacity-100', 'scale-100');
  overlay.classList.add('opacity-0', 'pointer-events-none');
  overlay.classList.remove('opacity-100');
  lines[0].classList.remove('rotate-45', 'translate-y-1.5');
  lines[1].classList.remove('opacity-0');
  lines[2].classList.remove('-rotate-45', '-translate-y-1.5');
});
