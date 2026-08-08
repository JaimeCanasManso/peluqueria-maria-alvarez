/* ==========================================================================
   MARÍA ÁLVAREZ — script.js
   Comportamiento: header al hacer scroll, menú móvil, animaciones al
   entrar en viewport (reveal + trazo dorado) y lightbox de galería.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header: fondo sólido al hacer scroll ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  const closeMenu = () => {
    document.body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Reveal al hacer scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal, .section-head');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Lightbox de galería ---------- */
  const galleryItems = Array.from(document.querySelectorAll('#galleryGrid .item'));
  const lightbox = document.getElementById('lightbox');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxLabel = document.getElementById('lightboxLabel');
  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    const caption = galleryItems[currentIndex].dataset.caption || '';
    lightboxCaption.textContent = caption;
    lightboxLabel.textContent = 'Foto: ' + caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const showRelative = (delta) => {
    currentIndex = (currentIndex + delta + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => showRelative(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => showRelative(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showRelative(1);
    if (e.key === 'ArrowLeft') showRelative(-1);
  });

});
