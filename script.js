const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.innerHTML = open ? '&#10005;' : '&#9776;';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.innerHTML = '&#9776;';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
