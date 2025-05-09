// 1. Apply saved theme or default
const root = document.documentElement;
root.setAttribute('data-theme', localStorage.getItem('theme') || '');

// 2. Dark‑mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? '' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// 3. Scroll‑triggered Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 4. Initialize Masonry Fallback
document.addEventListener('DOMContentLoaded', () => {
  new Masonry('#grid', { itemSelector: '.card', gutter: 16 });
});
