// Dark‑mode toggle with localStorage
const btn = document.getElementById('theme-toggle');
const root = document.documentElement;
btn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? '' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
// Apply saved theme
root.setAttribute('data-theme', localStorage.getItem('theme') || '');

// Scroll‑triggered reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Optional: register Houdini layout worklet (masonry)
if ('registerLayoutWorklet' in CSS) {
  CSS.registerLayoutWorklet('masonry-grid', new URL('masonry-worklet.js', import.meta.url));
}
