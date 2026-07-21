const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');

toggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
