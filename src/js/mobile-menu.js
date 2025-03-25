const refs = {
  openMenuBtn: document.querySelector('.open-mobile-menu-btn'),
  closeMenuBtn: document.querySelector('.close-mobile-menu-btn'),
  mobileMenu: document.querySelector('.modal-box'),
  navLinks: document.querySelectorAll('.mobile-menu-nav-item-link'),
};

function openMenu() {
  refs.mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  refs.mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
}

refs.openMenuBtn.addEventListener('click', openMenu);

refs.closeMenuBtn.addEventListener('click', closeMenu);

refs.navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    closeMenu();

    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});
