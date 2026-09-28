const bar = document.getElementById('progressBar');
const reveals = document.querySelectorAll('.reveal');

function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const amount = height > 0 ? (window.scrollY / height) * 100 : 0;
  bar.style.width = `${Math.min(100, amount)}%`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px' });

reveals.forEach((item) => observer.observe(item));
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
