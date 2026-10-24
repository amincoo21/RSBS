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

/* ===== RSBS live chat (tawk.to) — added 2026-10-24 ===== */
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/6adb72ec29796e345bbc70d2/1k5kjhrko';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
/* ===== End of tawk.to chat ===== */
