// ===================================================
//  CHAUFALO – script.js
// ===================================================

/* ---------- Navbar scroll effect ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---------- Hamburger menu ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ---------- Scroll-triggered animations ---------- */
const animatedEls = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

animatedEls.forEach(el => observer.observe(el));

/* ---------- Horario day highlight based on current day ---------- */
(function highlightToday() {
  const day = new Date().getDay(); // 0=Sun, 2=Tue, 5=Fri
  const martes  = document.getElementById('horarioMartes');
  const viernes = document.getElementById('horarioViernes');

  if (day === 2 && martes) {
    martes.style.borderColor = 'var(--red)';
    martes.style.boxShadow   = 'var(--shadow-red)';
    addHoyBadge(martes);
  } else if (day === 5 && viernes) {
    viernes.style.borderColor = 'var(--amber)';
    viernes.style.boxShadow   = '0 8px 32px rgba(230,126,34,.4)';
    addHoyBadge(viernes);
  }

  function addHoyBadge(card) {
    const badge = document.createElement('div');
    badge.textContent = '🔴 ¡HOY ABIERTOS!';
    badge.style.cssText = `
      position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
      background: var(--red); color: #fff; font-weight: 700; font-size: .75rem;
      padding: .25rem .9rem; border-radius: 50px;
      white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,.3);
      letter-spacing: .05em;
    `;
    card.style.position = 'relative';
    card.prepend(badge);
  }
})();

/* ---------- WhatsApp number configuration ---------- */
// TODO: Replace 51999999999 with the real WhatsApp number in all href links
// Format: country code + number, no spaces or dashes
// Example for Peru: 51987654321

/* ---------- Smooth parallax on hero ---------- */
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroImg.style.transform = `scale(1.08) translateY(${scrolled * 0.15}px)`;
    }
  }, { passive: true });
}

/* ---------- Floating emoji random movement ---------- */
document.querySelectorAll('.float-emoji').forEach((el, i) => {
  const duration = 5 + Math.random() * 4;
  const delay    = Math.random() * 3;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay    = `-${delay}s`;
});

/* ---------- CTA bg-stars random placement ---------- */
document.querySelectorAll('.cta-bg-stars span').forEach(el => {
  el.style.animationDuration = `${7 + Math.random() * 5}s`;
});

/* ---------- Easter egg: Konami code for chaufaholic message ---------- */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
document.addEventListener('keydown', e => {
  if (e.key === KONAMI[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === KONAMI.length) {
      konamiIdx = 0;
      showEasterEgg();
    }
  } else {
    konamiIdx = 0;
  }
});

function showEasterEgg() {
  const toast = document.createElement('div');
  toast.innerHTML = '🍳 ¡Eres un verdadero Chaufaholic! 🏆';
  toast.style.cssText = `
    position: fixed; top: 30px; left: 50%; transform: translateX(-50%);
    background: linear-gradient(135deg, #c0392b, #e74c3c);
    color: #fff; font-family: Caveat,cursive; font-size: 1.4rem; font-weight: 700;
    padding: 1rem 2rem; border-radius: 50px; z-index: 9999;
    box-shadow: 0 8px 32px rgba(192,57,43,.6);
    animation: slideUp .4s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}
