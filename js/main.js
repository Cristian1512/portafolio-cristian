// ==========================================================================
// Cristian Cárdenas — Portafolio — lógica del sitio
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initYear();
  renderExperience(EXPERIENCIA, CATEGORIAS_EXPERIENCIA);
  renderProjects(PROYECTOS);
  initRevealOnScroll();
});

/* -------------------- Menú móvil -------------------- */
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* -------------------- Año en footer -------------------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------- Experiencia: pestañas + línea de tiempo -------------------- */
function renderExperience(experiencia, categorias) {
  const tabsEl = document.getElementById("expTabs");
  const leadEl = document.getElementById("expTabLead");
  const timelineEl = document.getElementById("expTimeline");
  if (!tabsEl || !timelineEl) return;

  const orden = Object.keys(categorias);

  const renderTab = (cat) => {
    tabsEl.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.cat === cat);
    });
    if (leadEl) leadEl.textContent = categorias[cat].lead;
    const items = experiencia.filter((e) => e.categoria === cat);
    timelineEl.innerHTML = items.map(experienceItemHTML).join("");
  };

  tabsEl.innerHTML = orden
    .map(
      (cat, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-cat="${cat}">${categorias[cat].label}</button>`
    )
    .join("");

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    renderTab(btn.dataset.cat);
  });

  renderTab(orden[0]);
}

function experienceItemHTML(e) {
  return `
    <li class="timeline-item reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-year">${e.anio}</span>
        <h3>${e.rol}</h3>
        <p class="timeline-place">${e.empresa} · ${e.lugar}</p>
        <p>${e.descripcion}</p>
      </div>
    </li>
  `;
}

/* -------------------- Proyectos: render + filtros -------------------- */
function renderProjects(proyectos) {
  const grid = document.getElementById("proyectosGrid");
  const filtersEl = document.getElementById("filtros");
  const filtersFrenteEl = document.getElementById("filtrosFrente");
  if (!grid) return;

  const projectsById = new Map(proyectos.map((p) => [p.id, p]));

  let selectedCat = "Todos";
  let selectedFrente = "Todos";

  const matchesFrente = (p) => {
    if (selectedFrente === "Todos") return true;
    return Array.isArray(p.frente) ? p.frente.includes(selectedFrente) : p.frente === selectedFrente;
  };

  const applyFilters = () => {
    const filtered = proyectos.filter(
      (p) => (selectedCat === "Todos" || p.categoria === selectedCat) && matchesFrente(p)
    );
    grid.innerHTML = filtered.map(projectCardHTML).join("");
  };

  // Cambiar de imagen en tarjetas con más de una vista (ej. render BIM +
  // foto de obra del mismo proyecto). Delegado sobre el grid porque las
  // tarjetas se regeneran en cada filtrado.
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".media-switch-btn");
    if (!btn) return;
    const card = btn.closest(".project-card");
    const project = projectsById.get(card.dataset.id);
    const idx = Number(btn.dataset.idx);
    const img = project.imgs[idx];
    card.querySelector(".media-bg").src = img.src;
    card.querySelector(".media-fg").src = img.src;
    card.querySelector(".media-fg").alt = img.label ? `${project.titulo} — ${img.label}` : project.titulo;
    card.querySelectorAll(".media-switch-btn").forEach((b) => b.classList.toggle("active", b === btn));
  });

  // Filtro por tipo de edificación (se construye a partir de las categorías presentes en los datos)
  const categorias = ["Todos", ...new Set(proyectos.map((p) => p.categoria))];
  if (filtersEl) {
    filtersEl.innerHTML = categorias
      .map(
        (cat, i) =>
          `<button class="filter-btn${i === 0 ? " active" : ""}" data-cat="${cat}">${cat}</button>`
      )
      .join("");

    filtersEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filtersEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCat = btn.dataset.cat;
      applyFilters();
    });
  }

  // Filtro por frente profesional (BIM / Diseño y Consultoría / Construcción y Obra),
  // construido a partir de los frentes presentes en los datos (un proyecto puede
  // pertenecer a más de un frente, ej. un mismo encargo con coordinación BIM e
  // interventoría de obra). Reutiliza las etiquetas de CATEGORIAS_EXPERIENCIA
  // (js/experiencia-data.js) para mantener el mismo vocabulario que Experiencia.
  const frentesPresentes = new Set();
  proyectos.forEach((p) => {
    (Array.isArray(p.frente) ? p.frente : [p.frente]).filter(Boolean).forEach((f) => frentesPresentes.add(f));
  });
  const ordenFrentes = Object.keys(CATEGORIAS_EXPERIENCIA).filter((f) => frentesPresentes.has(f));
  const frentes = ["Todos", ...ordenFrentes];
  if (filtersFrenteEl) {
    filtersFrenteEl.innerHTML = frentes
      .map((frente, i) => {
        const label = frente === "Todos" ? "Todos" : CATEGORIAS_EXPERIENCIA[frente]?.label || frente;
        return `<button class="filter-btn${i === 0 ? " active" : ""}" data-frente="${frente}">${label}</button>`;
      })
      .join("");

    filtersFrenteEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filtersFrenteEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedFrente = btn.dataset.frente;
      applyFilters();
    });
  }

  applyFilters();
}

function projectCardHTML(p) {
  // Un proyecto normalmente tiene una sola foto ("img"), pero puede tener
  // varias vistas del mismo proyecto ("imgs": ej. render BIM + foto de obra)
  // — en ese caso se muestra un selector pequeño para alternar entre ellas.
  const images = p.imgs || (p.img ? [{ src: p.img, label: null }] : []);

  const media = images.length
    ? `<img class="media-bg" src="${images[0].src}" alt="" aria-hidden="true" loading="lazy">
       <img class="media-fg" src="${images[0].src}" alt="${p.titulo}" loading="lazy">
       ${images.length > 1 ? mediaSwitchHTML(images) : ""}`
    : `<div class="project-placeholder">
         ${blueprintIconSVG()}
         <span>Imagen próximamente</span>
       </div>`;

  const meta = [
    p.area ? `<span><strong>${p.area}</strong></span>` : "",
    p.anio ? `<span>${p.anio}</span>` : "",
    p.ubicacion ? `<span>${p.ubicacion}</span>` : "",
    p.lod ? `<span>${p.lod}</span>` : "",
  ]
    .filter(Boolean)
    .join("");

  return `
    <article class="project-card reveal" data-cat="${p.categoria}" data-id="${p.id}">
      <div class="project-media">
        <span class="project-category-badge">${p.categoria}</span>
        ${p.estado ? `<span class="project-status-badge">${p.estado}</span>` : ""}
        ${media}
      </div>
      <div class="project-body">
        <h3>${p.titulo}</h3>
        ${p.rol ? `<p class="project-role">${p.rol}</p>` : ""}
        <p class="project-desc">${p.descripcion}</p>
        <div class="project-meta">${meta}</div>
      </div>
    </article>
  `;
}

function mediaSwitchHTML(images) {
  return `
    <div class="media-switch">
      ${images
        .map(
          (img, i) =>
            img.label
              ? `<button class="media-switch-btn${i === 0 ? " active" : ""}" data-idx="${i}">${img.label}</button>`
              : `<button class="media-switch-btn media-switch-btn-dot${i === 0 ? " active" : ""}" data-idx="${i}" aria-label="Vista ${i + 1}"></button>`
        )
        .join("")}
    </div>
  `;
}

function blueprintIconSVG() {
  return `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 21V9l9-6 9 6v12"></path>
    <path d="M9 21V12h6v9"></path>
  </svg>`;
}

/* -------------------- Animación al hacer scroll -------------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll(
    ".timeline-item, .project-card, .contact-card, .stat, .skill-group"
  );
  items.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "150px 0px 150px 0px" }
  );

  items.forEach((el) => observer.observe(el));

  // Salvaguarda: si un salto de scroll instantáneo (p. ej. abrir el sitio
  // directamente en #contacto) hace que un elemento nunca cruce el umbral
  // del observer, revélalo de todas formas para que el contenido nunca
  // quede oculto de forma permanente.
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      el.classList.add("visible");
    });
  }, 1500);

  // Revelar instantáneamente cuando el filtro de proyectos o las pestañas
  // de experiencia regeneran su contenido (sin volver a esperar el scroll)
  const grid = document.getElementById("proyectosGrid");
  if (grid) {
    const mo = new MutationObserver(() => {
      grid.querySelectorAll(".project-card").forEach((el) => {
        el.classList.add("reveal", "visible");
      });
    });
    mo.observe(grid, { childList: true });
  }

  const timeline = document.getElementById("expTimeline");
  if (timeline) {
    const mo = new MutationObserver(() => {
      timeline.querySelectorAll(".timeline-item").forEach((el) => {
        el.classList.add("reveal", "visible");
      });
    });
    mo.observe(timeline, { childList: true });
  }
}
