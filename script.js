const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
items.forEach((item) => io.observe(item));

const visual = document.querySelector('.hero-visual');
if (visual && matchMedia('(pointer:fine)').matches) {
  visual.addEventListener('mousemove', (e) => {
    const r = visual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    visual.style.transform = `rotateX(${y * -2.2}deg) rotateY(${x * 3.2}deg)`;
  });
  visual.addEventListener('mouseleave', () => { visual.style.transform = ''; });
}
