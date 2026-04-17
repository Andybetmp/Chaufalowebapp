// ============================================================
//  CHAUFALO – team.js
//  Componente React del equipo (Babel standalone via CDN)
//  ► Para agregar o editar miembros modifica SOLO el array
//    TEAM_DATA que está justo abajo.
// ============================================================

const { useState, useEffect, useRef } = React;

// ============================================================
//  ✏️  EDITA AQUÍ LOS DATOS DEL EQUIPO
// ============================================================
const TEAM_DATA = [
  {
    id: "founder",
    name: "Bruno Javier Lira",
    role: "Fundador & Chef Principal",
    bio: "El cerebro y el corazón detrás de Chaufalo. Su amor por el chaufa nació en casa y hoy lo comparte con el mundo, un wok a la vez.",
    photo: "assets/person3.jpg",
    badge: "👑 Fundador",
    badgeClass: "badge-founder",
    socials: {
      instagram: "https://www.instagram.com/chaufalo",
      tiktok: "",
      whatsapp: "",
    },
  },
  {
    id: "collab1",
    name: "Carlos Enrique Zevallos",
    role: "Community Manager",
    bio: "La voz de Chaufalo en redes sociales. Conecta con la comunidad y hace que cada post se sienta tan rico como el chaufa mismo.",
    photo: "assets/person1.jpg",
    badge: "⭐ Colaborador",
    badgeClass: "badge-collab",
    socials: {
      instagram: "https://www.instagram.com/quiquezev",
      tiktok: "",
      whatsapp: "",
    },
  },
  {
    id: "collab2",
    name: "Jolaus Andy Meza",
    role: "Desarrollador Web",
    bio: "El que hizo posible que Chaufalo llegue al mundo digital. Código, diseño y mucho amor por el chaufa en cada línea.",
    photo: "assets/person2.jpg",
    badge: "⭐ Colaborador",
    badgeClass: "badge-collab",
    socials: {
      instagram: "https://www.instagram.com/costa_bet_mp",
      tiktok: "",
      whatsapp: "",
    },
  },
];
// ============================================================

// ── Íconos SVG inline ──────────────────────────────────────
const IconIG = () => (
  React.createElement('svg', { viewBox: "0 0 24 24", className: "team-social-icon", 'aria-hidden': "true" },
    React.createElement('path', { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
  )
);

const IconTK = () => (
  React.createElement('svg', { viewBox: "0 0 24 24", className: "team-social-icon", 'aria-hidden': "true" },
    React.createElement('path', { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" })
  )
);

const IconWA = () => (
  React.createElement('svg', { viewBox: "0 0 24 24", className: "team-social-icon", 'aria-hidden': "true" },
    React.createElement('path', { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
  )
);

// ── Componente de tarjeta de miembro ──────────────────────
function TeamCard({ member, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return React.createElement('article', {
    ref,
    className: `team-card ${visible ? 'team-card--visible' : ''}`,
    style: { '--card-delay': `${index * 0.15}s` },
    id: `team-member-${member.id}`,
  },
    // Glow de fondo
    React.createElement('div', { className: 'team-card__glow', 'aria-hidden': "true" }),

    // Foto
    React.createElement('div', { className: 'team-card__photo-wrap' },
      React.createElement('img', {
        src: member.photo,
        alt: `Foto de ${member.name}`,
        className: 'team-card__photo',
        loading: 'lazy',
        onError: (e) => {
          // Fallback si no hay foto: muestra iniciales
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }
      }),
      React.createElement('div', {
        className: 'team-card__initials',
        style: { display: 'none' }
      }, member.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase())
    ),

    // Badge de rol
    React.createElement('span', { className: `team-card__badge ${member.badgeClass}` }, member.badge),

    // Contenido
    React.createElement('div', { className: 'team-card__body' },
      React.createElement('h3', { className: 'team-card__name' }, member.name),
      React.createElement('p', { className: 'team-card__role' }, member.role),
      React.createElement('p', { className: 'team-card__bio' }, member.bio),
    ),

    // Redes sociales
    React.createElement('div', { className: 'team-card__socials' },
      member.socials.instagram && React.createElement('a', {
        href: member.socials.instagram,
        className: 'team-social-btn team-social-btn--ig',
        target: '_blank', rel: 'noopener',
        'aria-label': `Instagram de ${member.name}`,
        title: 'Instagram',
      }, React.createElement(IconIG)),

      member.socials.tiktok && React.createElement('a', {
        href: member.socials.tiktok,
        className: 'team-social-btn team-social-btn--tk',
        target: '_blank', rel: 'noopener',
        'aria-label': `TikTok de ${member.name}`,
        title: 'TikTok',
      }, React.createElement(IconTK)),

      member.socials.whatsapp && React.createElement('a', {
        href: `https://wa.me/${member.socials.whatsapp}`,
        className: 'team-social-btn team-social-btn--wa',
        target: '_blank', rel: 'noopener',
        'aria-label': `WhatsApp de ${member.name}`,
        title: 'WhatsApp',
      }, React.createElement(IconWA)),
    )
  );
}

// ── Sección principal ─────────────────────────────────────
function TeamSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return React.createElement('section', { className: 'team-section', id: 'equipo' },
    // Decoraciones de fondo
    React.createElement('div', { className: 'team-section__bg-deco', 'aria-hidden': "true" },
      React.createElement('span', null, '🍳'),
      React.createElement('span', null, '🔥'),
      React.createElement('span', null, '🥢'),
    ),

    React.createElement('div', { className: 'container' },
      // Header
      React.createElement('header', {
        ref: headerRef,
        className: `team-header ${headerVisible ? 'team-header--visible' : ''}`,
      },
        React.createElement('span', { className: 'section-eyebrow center' }, 'El equipo'),
        React.createElement('h2', { className: 'section-title' },
          'Conoce a nuestros ',
          React.createElement('span', { className: 'red-text' }, 'Colaboradores')
        ),
        React.createElement('p', { className: 'section-sub' },
          'Las personas que hacen posible que cada chaufa llegue con amor a tu puerta. 🔥'
        )
      ),

      // Grid de tarjetas
      React.createElement('div', { className: 'team-grid', id: 'team-grid' },
        TEAM_DATA.map((member, i) =>
          React.createElement(TeamCard, { key: member.id, member, index: i })
        )
      )
    )
  );
}

// ── Mount ──────────────────────────────────────────────────
const teamRoot = document.getElementById('team-root');
if (teamRoot) {
  ReactDOM.createRoot(teamRoot).render(React.createElement(TeamSection));
}
