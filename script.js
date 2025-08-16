// Alternating line reveals (staggered and directional)
document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.line');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // directional slide-in based on position (odd/even)
        const even = [...el.parentElement.children].indexOf(el) % 2 === 1;
        el.style.transitionDelay = `${(idx % 5) * 80}ms`;
        el.animate(
          [
            { transform: `translate(${even ? '40px' : '-40px'}, 20px)`, opacity: 0 },
            { transform: 'translate(0,0)', opacity: 1 }
          ],
          { duration: 650, easing: 'cubic-bezier(.17,.67,.28,.98)', fill: 'both' }
        );
        el.classList.add('show');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  lines.forEach(l => io.observe(l));
});
