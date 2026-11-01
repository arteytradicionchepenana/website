/* ==========================================================
   Arte y Tradición Chepenana — main.js
   Todo lo que normalmente se edita está al INICIO de este archivo:
   1) WhatsApp   2) Redes sociales   3) Categorías   4) Productos   5) Galería
   ========================================================== */

/* ---------- 1) WHATSAPP ---------- */
const WHATSAPP_NUMBER = "51949722356"; // 51 = código de Perú + 949722356
const WA_MESSAGES = {
  general: "Hola, estoy interesado(a) en las creaciones de Arte y Tradición Chepenana. Me gustaría conocer sus productos y realizar un pedido.",
  custom: "Hola, me gustaría hacer un pedido personalizado con Arte y Tradición Chepenana. Mi idea es: "
};

/* ---------- 2) REDES SOCIALES ----------
   Pega aquí tus enlaces cuando los tengas, por ejemplo:
   instagram: "https://www.instagram.com/tu_usuario"
   Si un enlace queda vacío (""), ese icono se oculta automáticamente. */
const socialLinks = { instagram: "", facebook: "", tiktok: "" };

/* ---------- 3) CATEGORÍAS ---------- */
const CATEGORIES = [
  { id: "arte-cultural", name: "Arte cultural de Chepén" },
  { id: "bordados",      name: "Bordados artesanales" },
  { id: "patchwork",     name: "Patchwork y arte decorativo" },
  { id: "bisuteria",     name: "Bisutería artesanal" },
  { id: "temporada",     name: "Creaciones de temporada" }
];

/* ---------- 4) PRODUCTOS (tarjetas de "Colecciones") ----------
   Para agregar un producto: copia un bloque y cambia los datos.
   - image: ruta dentro de assets/images/ (usa tus propias fotos)
   - destacado: true muestra la etiqueta "Destacado"
   Las imágenes actuales son REFERENCIALES. */
const products = [
  { name: "Cuadro del Vía Crucis de Chepén", category: "arte-cultural", destacado: true,
    description: "Cuadro decorativo inspirado en la fe y la tradición del Vía Crucis de Chepén, para llevar un recuerdo a tu hogar.",
    image: "assets/images/arte-cultural/cuadro-via-crucis.jpg", alt: "Cuadro enmarcado con Vía Crucis, San Sebastián y la iglesia de Chepén" },
  { name: "Llaveros con identidad", category: "arte-cultural", destacado: true,
    description: "Llaveros con motivos de Chepén: la iglesia, el hibisco y San Sebastián. Un detalle para recordar de dónde vienes.",
    image: "assets/images/arte-cultural/llaveros-culturales.jpg", alt: "Tres llaveros de madera con la iglesia, un hibisco y San Sebastián" },
  { name: "Arte dedicado a San Sebastián", category: "arte-cultural", destacado: false,
    description: "Creaciones dedicadas al patrón de la iglesia de Chepén, hechas con respeto y devoción.",
    image: "assets/images/arte-cultural/san-sebastian.jpg", alt: "Imagen de San Sebastián con aureola y flechas" },
  { name: "Inspiración Sacerdotisa de Moro", category: "arte-cultural", destacado: false,
    description: "Arte inspirado en la Sacerdotisa de Moro y en la identidad histórica de nuestra región.",
    image: "assets/images/arte-cultural/sacerdotisa-moro.jpg", alt: "Representación de la Sacerdotisa de Moro con tocado dorado" },

  { name: "Toallas con bordado floral", category: "bordados", destacado: true,
    description: "Bordados en toallas, manteles y telas con cinta de organza. Flores delicadas hechas puntada a puntada.",
    image: "assets/images/bordados/toallas-bordadas.jpg", alt: "Toallas blancas con rosas bordadas" },

  { name: "Cojín patchwork con flor en relieve", category: "patchwork", destacado: true,
    description: "Patchwork de alto relieve en telas con color y carácter. Piezas decorativas únicas para tu hogar.",
    image: "assets/images/patchwork/cojin-patchwork.jpg", alt: "Cojín patchwork con una flor de tela en relieve" },

  { name: "Collar y set de bisutería", category: "bisuteria", destacado: false,
    description: "Pulseras, aretes y collares con cuentas y detalles hechos a mano. También en combinaciones a tu gusto.",
    image: "assets/images/bisuteria/collar-set.jpg", alt: "Collar, pulsera y aretes de cuentas sobre un busto" },
  { name: "Collar con dije de flor", category: "bisuteria", destacado: false,
    description: "Collar artesanal con cuentas en tonos crema y rosados, y un dije floral como detalle central.",
    image: "assets/images/bisuteria/collar-detalle.jpg", alt: "Collar de cuentas con dije floral" },

  { name: "Muñecos navideños", category: "temporada", destacado: true,
    description: "Papá Noel, muñeco de nieve y detalles de temporada hechos a mano para decorar y regalar.",
    image: "assets/images/temporada/munecos-navidenos.jpg", alt: "Papá Noel y muñeco de nieve de tela junto a un arbolito" },
  { name: "Papá Noel de tela", category: "temporada", destacado: false,
    description: "Un clásico navideño elaborado con cariño. Consulta por tamaños y encargos para esta temporada.",
    image: "assets/images/temporada/papa-noel.jpg", alt: "Muñeco de Papá Noel de tela" }
];

/* ---------- 5) GALERÍA ----------
   Cada foto: src (ruta), category (id de arriba), title (texto al ampliar).
   Agrega tus fotos propias subiéndolas a assets/images/galeria/ y
   añadiendo una línea aquí. */
const galleryPhotos = [
  { src: "assets/images/historia/iglesia-chepen.jpg",           category: "arte-cultural", title: "Iglesia de Chepén (imagen referencial)" },
  { src: "assets/images/arte-cultural/cuadro-via-crucis.jpg",   category: "arte-cultural", title: "Cuadro del Vía Crucis" },
  { src: "assets/images/temporada/papa-noel.jpg",               category: "temporada",     title: "Papá Noel de tela" },
  { src: "assets/images/bordados/toallas-bordadas.jpg",         category: "bordados",      title: "Toallas con bordado floral" },
  { src: "assets/images/arte-cultural/llaveros-culturales.jpg", category: "arte-cultural", title: "Llaveros con identidad" },
  { src: "assets/images/bisuteria/collar-detalle.jpg",          category: "bisuteria",     title: "Collar con dije de flor" },
  { src: "assets/images/patchwork/cojin-patchwork.jpg",         category: "patchwork",     title: "Cojín patchwork" },
  { src: "assets/images/historia/via-crucis.jpg",               category: "arte-cultural", title: "Vía Crucis (ilustración referencial)" },
  { src: "assets/images/temporada/munecos-navidenos.jpg",       category: "temporada",     title: "Muñecos navideños" },
  { src: "assets/images/arte-cultural/san-sebastian.jpg",       category: "arte-cultural", title: "San Sebastián" },
  { src: "assets/images/bisuteria/collar-set.jpg",              category: "bisuteria",     title: "Set de bisutería" },
  { src: "assets/images/arte-cultural/sacerdotisa-moro.jpg",    category: "arte-cultural", title: "Sacerdotisa de Moro" },
  { src: "assets/images/personalizados/regalo-personalizado.jpg", category: "temporada",   title: "Regalo con etiqueta personalizada" }
];

/* ==========================================================
   A partir de aquí no es necesario editar nada
   ========================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || "";

  /* ---- WhatsApp ---- */
  function waLink(text) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  }
  document.querySelectorAll(".js-wa").forEach(a => {
    a.href = waLink(WA_MESSAGES[a.dataset.wa] || WA_MESSAGES.general);
  });

  /* ---- Menú móvil ---- */
  const header = $(".site-header");
  const toggle = $("#navToggle");
  const nav = $("#mainNav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  /* ---- Filtros ---- */
  function buildFilters(container, onChange) {
    const all = [{ id: "todos", name: "Todo" }].concat(CATEGORIES);
    container.innerHTML = "";
    all.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "filter-btn";
      b.textContent = c.name;
      b.setAttribute("aria-pressed", String(i === 0));
      b.addEventListener("click", () => {
        container.querySelectorAll(".filter-btn").forEach(x => x.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        onChange(c.id);
      });
      container.appendChild(b);
    });
  }

  /* ---- Productos ---- */
  const grid = $("#productGrid");
  function renderProducts(cat) {
    grid.innerHTML = "";
    products.filter(p => cat === "todos" || p.category === cat).forEach((p, i) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.animationDelay = (i * 60) + "ms";
      const msg = "Hola, me interesa «" + p.name + "» de Arte y Tradición Chepenana. ¿Me pueden dar más información?";
      card.innerHTML =
        '<button type="button" class="card-img" aria-label="Ampliar imagen: ' + esc(p.name) + '">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.alt || p.name) + '" loading="lazy">' +
          (p.destacado ? '<span class="badge">Destacado</span>' : "") +
        "</button>" +
        '<div class="card-body">' +
          '<p class="card-cat">' + esc(catName(p.category)) + "</p>" +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="desc">' + esc(p.description) + "</p>" +
          '<a class="btn btn-primary btn-sm" target="_blank" rel="noopener" href="' + waLink(msg) + '">Consultar por WhatsApp</a>' +
        "</div>";
      card.querySelector(".card-img").addEventListener("click", () => {
        const list = products.filter(x => cat === "todos" || x.category === cat)
          .map(x => ({ src: x.image, title: x.name, alt: x.alt || x.name }));
        openLightbox(list, i);
      });
      grid.appendChild(card);
    });
  }
  buildFilters($("#productFilters"), renderProducts);
  renderProducts("todos");

  /* ---- Galería ---- */
  const gGrid = $("#galleryGrid");
  let currentGallery = [];
  function renderGallery(cat) {
    gGrid.innerHTML = "";
    currentGallery = galleryPhotos.filter(g => cat === "todos" || g.category === cat);
    currentGallery.forEach((g, i) => {
      const fig = document.createElement("figure");
      fig.className = "g-item";
      fig.style.animationDelay = (i * 50) + "ms";
      fig.innerHTML =
        '<button type="button" aria-label="Ampliar: ' + esc(g.title) + '">' +
          '<img src="' + esc(g.src) + '" alt="' + esc(g.title) + '" loading="lazy">' +
        "</button><figcaption>" + esc(g.title) + "</figcaption>";
      fig.querySelector("button").addEventListener("click", () =>
        openLightbox(currentGallery.map(x => ({ src: x.src, title: x.title, alt: x.title })), i));
      gGrid.appendChild(fig);
    });
  }
  buildFilters($("#galleryFilters"), renderGallery);
  renderGallery("todos");

  /* ---- Lightbox ---- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let lbList = [], lbIndex = 0, lastFocus = null;

  function showLb() {
    const item = lbList[lbIndex];
    lbImg.src = item.src;
    lbImg.alt = item.alt || item.title;
    lbCap.textContent = item.title;
    const many = lbList.length > 1;
    $("#lbPrev").style.display = many ? "" : "none";
    $("#lbNext").style.display = many ? "" : "none";
  }
  function openLightbox(list, index) {
    lbList = list; lbIndex = index; lastFocus = document.activeElement;
    showLb();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  const step = d => { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); };
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
    if (e.key === "Tab") { // mantener el foco dentro del visor
      const f = [...lb.querySelectorAll("button")].filter(b => b.style.display !== "none");
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // Deslizar en móvil
  let tx = null;
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50 && lbList.length > 1) step(dx < 0 ? 1 : -1);
    tx = null;
  });

  /* ---- Redes sociales (se ocultan si están vacías) ---- */
  const SOCIAL_LABELS = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };
  const active = Object.keys(socialLinks).filter(k => socialLinks[k] && socialLinks[k].trim());
  if (active.length) {
    const html = active.map(k =>
      '<li><a class="social-link" href="' + esc(socialLinks[k]) + '" target="_blank" rel="noopener" aria-label="' +
      SOCIAL_LABELS[k] + ' de Arte y Tradición Chepenana">' + SOCIAL_LABELS[k] + "</a></li>").join("");
    $("#socialList").innerHTML = html;
    $("#socialBlock").hidden = false;
    $("#footerSocial").innerHTML = html;
  }

  /* ---- Animación al hacer scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: .12 });
    reveals.forEach(r => io.observe(r));
  } else {
    reveals.forEach(r => r.classList.add("visible"));
  }

  /* ---- Enlace activo del menú ---- */
  const links = [...document.querySelectorAll(".main-nav ul a")];
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
  window.addEventListener("scroll", () => {
    const y = window.scrollY + 140;
    let cur = sections[0];
    sections.forEach(s => { if (s.offsetTop <= y) cur = s; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id));
  }, { passive: true });

  $("#year").textContent = new Date().getFullYear();

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
})();
