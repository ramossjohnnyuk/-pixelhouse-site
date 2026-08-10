
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Substitua pelo WhatsApp da PixelHouse no formato DDI+DDD+numero.
// Exemplo: 5511999999999
const whatsappNumber = '5511954394303';
const message = encodeURIComponent('Olá! Vi o site da PixelHouse e quero conversar sobre um projeto.');
document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = `https://wa.me/${whatsappNumber}?text=${message}`;
});

// Parallax muito leve apenas em telas maiores.
if (window.matchMedia('(min-width: 901px)').matches) {
  const stage = document.querySelector('.architecture');
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / innerWidth - .5) * 10;
    const y = (e.clientY / innerHeight - .5) * 6;
    stage.style.transform = `perspective(1100px) rotateX(${58 - y*.12}deg) rotateZ(${-35 + x*.08}deg) translate3d(${6 + x*.08}%,${8 + y*.08}%,0)`;
  }, {passive:true});
}
