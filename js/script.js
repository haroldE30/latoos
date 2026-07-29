  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 700);
  });

  // Sticky nav background
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('mobileBuy')?.classList.toggle('show', window.scrollY > 900);
  });

  // Mobile hamburger menu
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    const navLinks = btn.closest('header.nav')?.querySelector('nav.links');
    if (!navLinks) return;

    const closeMenu = () => {
      navLinks.classList.remove('open');
      btn.textContent = '☰';
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    const openMenu = () => {
      navLinks.classList.add('open');
      btn.textContent = '✕';
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Comparison bar fill on view
  const bars = document.querySelectorAll('.bar-fill');
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.getAttribute('data-pct');
        e.target.style.transform = `scaleX(${pct/100})`;
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => barIo.observe(b));

  // Magnetic buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.15}px, ${y*0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  // Particle canvas
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    const initParticles = () => {
      particles = Array.from({length: 60}, () => ({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*1.6 + 0.4,
        s: Math.random()*0.3 + 0.05,
        o: Math.random()*0.5 + 0.1
      }));
    };
    const animateParticles = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p => {
        p.y -= p.s;
        if (p.y < 0) p.y = canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(201,163,91,${p.o})`;
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };
    resize(); initParticles(); animateParticles();
    window.addEventListener('resize', () => { resize(); initParticles(); });
  }
