/**
 * ==============================================================================
 * DEVELOPER PORTFOLIO TEMPLATE — CORE INTERACTIVE ENGINE
 * ==============================================================================
 * High-performance vanilla JavaScript modules:
 * - Dynamic Configuration Binding & Component Hydration
 * - Centralized CSS Variable Theme Customization
 * - Sticky Navigation & Responsive Mobile Drawer
 * - Interactive Ambient Particle Grid (Canvas)
 * - 3D Tilt Card Physics with Dynamic Re-binding
 * - ScrollSpy Active Navigation Observer
 * - Multi-provider Contact Form (Demo Mode / Formspree / Web3Forms)
 * - Copy-to-clipboard Placeholders & Toast Notifications
 * ==============================================================================
 */

import { portfolioConfig } from './portfolio-config.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hydrate UI with central configuration data
  syncPortfolioData(portfolioConfig);

  // 2. Initialize interactive engines
  initNavbar();
  initBackgroundCanvas(portfolioConfig?.theme);
  initTiltEffects();
  initActiveNavSpy();
  initContactForm(portfolioConfig);
  initSocialPlaceholders();
  initBackToTop();
});

/**
 * Common SVG icons helper for tech stack logos
 */
const TECH_ICONS = {
  html: `<svg viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413H5.41l.37 4.148h11.983l-.37 4.147H9.932l-.248-2.766H6.151l.493 5.531h10.748l-.902 10.098L12 26.657l-4.49-1.246-.308-3.456H3.684l.617 6.913 7.7 2.132 7.7-2.132 1.03-11.536.859-9.619z"/></svg>`,
  css: `<svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413H5.41l.37 4.148h11.983l-.37 4.147H9.932l-.248-2.766H6.151l.493 5.531h10.748l-.902 10.098L12 26.657l-4.49-1.246-.308-3.456H3.684l.617 6.913 7.7 2.132 7.7-2.132 1.03-11.536.859-9.619z"/></svg>`,
  javascript: `<svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.888-1.798-2.876-2.507-.942-.338-1.393-.578-1.393-1.054 0-.462.338-.802 1.054-.802.738 0 1.25.32 1.545.925l1.64-1.026c-.61-1.196-1.76-1.768-3.185-1.768-2.022 0-3.328 1.196-3.328 2.876 0 1.636 1.15 2.378 2.923 2.997 1.054.372 1.348.653 1.348 1.196 0 .58-.51 1.002-1.378 1.002-1.08 0-1.737-.58-2.086-1.378l-1.688.972c.62 1.488 1.895 2.296 3.774 2.296 2.38 0 3.65-1.282 3.65-3.033zm-9.043-.16v-6.064h-2.052v6.177c0 1.708-.942 2.39-2.31 2.39-1.196 0-1.895-.62-2.28-1.393l1.658-.99c.23.44.535.688.942.688.423 0 .74-.23.74-.95v-.058h1.302z"/></svg>`,
  react: `<svg viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0-2.5c3.5 0 6.5 1.5 8 3.5-1.5 2-4.5 3.5-8 3.5s-6.5-1.5-8-3.5c1.5-2 4.5-3.5 8-3.5zm0-4c6.6 0 12 2.7 12 6s-5.4 6-12 6-12-2.7-12-6 5.4-6 12-6zm0 15c-3.5 0-6.5-1.5-8-3.5 1.5-2 4.5-3.5 8-3.5s6.5 1.5 8 3.5c-1.5 2-4.5 3.5-8 3.5z"/></svg>`,
  nodejs: `<svg viewBox="0 0 24 24" fill="#339933"><path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.3l8.4 4.85v9.7L12 21.7 3.6 16.85V7.15L12 2.3z"/></svg>`,
  expressjs: `<svg viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  mongodb: `<svg viewBox="0 0 24 24" fill="#47A248"><path d="M12 0C11.5 3 7 7.5 7 13.5c0 3.7 2.4 6.7 5 7.5 2.6-.8 5-3.8 5-7.5C17 7.5 12.5 3 12 0zm0 18.5c-1.5-.7-2.8-2.6-2.8-5 0-3.5 2.8-6.4 2.8-6.4s2.8 2.9 2.8 6.4c0 2.4-1.3 4.3-2.8 5z"/></svg>`,
  typescript: `<svg viewBox="0 0 24 24" fill="#3178C6"><path d="M0 0h24v24H0V0zm22 17.5c0-1.38-.85-2.22-2.83-2.92-1.32-.47-1.78-.85-1.78-1.52 0-.66.52-1.12 1.48-1.12.98 0 1.63.43 1.95 1.15l2.25-1.3C22.18 10.23 20.65 9.5 18.8 9.5c-2.48 0-4.22 1.47-4.22 3.65 0 2.12 1.42 3.03 3.57 3.82 1.48.55 1.83.95 1.83 1.62 0 .73-.67 1.2-1.72 1.2-1.4 0-2.2-.67-2.58-1.63l-2.28 1.28c.7 1.8 2.37 2.78 4.78 2.78 2.8 0 4.82-1.47 4.82-3.72zm-10.75-6H8.5V22H5.75V11.5H3V9.25h8.25V11.5z"/></svg>`,
  nextjs: `<svg viewBox="0 0 24 24" fill="#FFFFFF"><circle cx="12" cy="12" r="10" fill="none" stroke="#FFFFFF" stroke-width="2"/><path d="M15 9l-6 8M9 9v8"/></svg>`,
  python: `<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M11.9 0c-3.1 0-5.8.5-5.8 2.5v2.5h5.8v.8H3.6C1.6 5.8 0 7.4 0 10.1c0 2.6 1.6 4.3 3.6 4.3h1.7v-2.1c0-2.3 2-4.2 4.3-4.2h5.8V5.8c0-2-2.7-2.5-5.8-2.5zm-2.1 1.7a.8.8 0 1 1 0 1.7.8.8 0 0 1 0-1.7zm4.3 22.3c3.1 0 5.8-.5 5.8-2.5v-2.5H14.1v-.8h8.3c2 0 3.6-1.6 3.6-4.3 0-2.6-1.6-4.3-3.6-4.3h-1.7v2.1c0 2.3-2 4.2-4.3 4.2H10.6v2.3c0 2 2.7 2.5 5.8 2.5zm2.1-1.7a.8.8 0 1 1 0-1.7.8.8 0 0 1 0 1.7z"/></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="#38BDF8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
};

function getTechIcon(name) {
  if (!name) return TECH_ICONS.default;
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const [k, svg] of Object.entries(TECH_ICONS)) {
    if (key.includes(k)) return svg;
  }
  return TECH_ICONS.default;
}

/**
 * 1. Sync & Apply Centralized Configuration to the DOM
 */
function syncPortfolioData(config) {
  if (!config) return;

  // Apply theme tokens to CSS variables
  applyTheme(config.theme);

  // SEO & Document Metadata
  syncMetadata(config.meta);

  // Brand Name in Navbar & Footer
  syncBrand(config.brand);

  // Hero Section
  syncHero(config.hero);

  // About Section & Bento Cards
  syncAbout(config.about);

  // Skills Section
  syncSkills(config.skills);

  // Featured Project Showcase
  syncProjects(config.projects);

  // Services Section
  syncServices(config.services);

  // Development Approach
  syncApproach(config.approach);

  // Contact Section & Social Links
  syncContact(config.contact);

  // Footer Section
  syncFooter(config.footer);
}

/**
 * Apply Centralized Theme Colors to CSS Variables
 */
function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;

  if (theme.accentBlue) root.style.setProperty('--accent-blue', theme.accentBlue);
  if (theme.accentCyan) root.style.setProperty('--accent-cyan', theme.accentCyan);
  if (theme.accentIndigo) root.style.setProperty('--accent-indigo', theme.accentIndigo);
  if (theme.accentPurple) root.style.setProperty('--accent-purple', theme.accentPurple);
  if (theme.accentEmerald) root.style.setProperty('--accent-emerald', theme.accentEmerald);
  if (theme.bgPrimary) root.style.setProperty('--bg-primary', theme.bgPrimary);
  if (theme.bgSecondary) root.style.setProperty('--bg-secondary', theme.bgSecondary);
  if (theme.bgCard) root.style.setProperty('--bg-card', theme.bgCard);

  // Dynamic gradients based on configured theme accents
  if (theme.accentBlue && theme.accentPurple) {
    const indigo = theme.accentIndigo || theme.accentBlue;
    root.style.setProperty('--grad-primary', `linear-gradient(135deg, ${theme.accentBlue} 0%, ${indigo} 50%, ${theme.accentPurple} 100%)`);
  }
  if (theme.accentCyan && theme.accentBlue) {
    root.style.setProperty('--grad-cyan-indigo', `linear-gradient(135deg, ${theme.accentCyan} 0%, ${theme.accentBlue} 100%)`);
  }
}

/**
 * Sync Metadata & Document Title
 */
function syncMetadata(meta) {
  if (!meta) return;
  if (meta.siteTitle) document.title = meta.siteTitle;

  const updateMeta = (selector, attr, val) => {
    if (!val) return;
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, val);
  };

  updateMeta('meta[name="description"]', 'content', meta.description);
  updateMeta('meta[name="author"]', 'content', meta.author);
  updateMeta('meta[name="keywords"]', 'content', meta.keywords);
  updateMeta('meta[property="og:title"]', 'content', meta.siteTitle);
  updateMeta('meta[property="og:description"]', 'content', meta.description);
  updateMeta('meta[property="og:image"]', 'content', meta.previewImage);
  updateMeta('meta[property="twitter:title"]', 'content', meta.siteTitle);
  updateMeta('meta[property="twitter:description"]', 'content', meta.description);
}

/**
 * Sync Brand Identity
 */
function syncBrand(brand) {
  if (!brand) return;

  if (brand.name) {
    const brandNameEl = document.querySelector('.nav-brand-name');
    if (brandNameEl) brandNameEl.textContent = brand.name;

    const brandLink = document.querySelector('.nav-brand');
    if (brandLink) brandLink.setAttribute('aria-label', `${brand.name} Home`);

    const footerBrandEl = document.querySelector('.footer-brand .gradient-text');
    if (footerBrandEl) footerBrandEl.textContent = brand.name;
  }

  if (brand.logoPrefix) {
    const prefixEls = document.querySelectorAll('.nav-brand-code:first-child');
    prefixEls.forEach(el => (el.textContent = brand.logoPrefix));
  }
  if (brand.logoSuffix) {
    const suffixEls = document.querySelectorAll('.nav-brand-code:last-child');
    suffixEls.forEach(el => (el.textContent = brand.logoSuffix));
  }
  if (brand.ctaText) {
    const navCtaBtn = document.querySelector('.nav-cta-btn');
    if (navCtaBtn) navCtaBtn.textContent = brand.ctaText;
  }
}

/**
 * Sync Hero Section
 */
function syncHero(hero) {
  if (!hero) return;

  const heroStatusEl = document.querySelector('.hero-status-pill span:last-child');
  if (heroStatusEl && hero.statusBadge) heroStatusEl.textContent = hero.statusBadge;

  const heroNameEl = document.querySelector('.hero-title .gradient-text');
  if (heroNameEl && hero.name) heroNameEl.textContent = hero.name;

  const heroRoleEl = document.querySelector('.hero-role-wrapper span:last-child');
  if (heroRoleEl && hero.role) heroRoleEl.textContent = hero.role;

  const heroDescEl = document.querySelector('.hero-description');
  if (heroDescEl && hero.description) heroDescEl.textContent = hero.description;

  // Primary & Secondary CTAs
  if (hero.primaryCta) {
    const pBtn = document.querySelector('.hero-cta-group .btn-primary');
    if (pBtn) {
      if (hero.primaryCta.href) pBtn.setAttribute('href', hero.primaryCta.href);
      const textSpan = pBtn.querySelector('span');
      if (textSpan && hero.primaryCta.text) textSpan.textContent = hero.primaryCta.text;
    }
  }

  if (hero.secondaryCta) {
    const sBtn = document.querySelector('.hero-cta-group .btn-secondary');
    if (sBtn) {
      if (hero.secondaryCta.href) sBtn.setAttribute('href', hero.secondaryCta.href);
      const textSpan = sBtn.querySelector('span');
      if (textSpan && hero.secondaryCta.text) textSpan.textContent = hero.secondaryCta.text;
    }
  }

  // Highlights stats
  if (Array.isArray(hero.highlights)) {
    const statItems = document.querySelectorAll('.hero-stat-item');
    hero.highlights.forEach((stat, idx) => {
      if (statItems[idx]) {
        const valEl = statItems[idx].querySelector('.hero-stat-value');
        const lblEl = statItems[idx].querySelector('.hero-stat-label');
        if (valEl && stat.value) valEl.textContent = stat.value;
        if (lblEl && stat.label) lblEl.textContent = stat.label;
      }
    });
  }

  // Interactive Code Card in Hero
  if (hero.codeCard) {
    const winTitle = document.querySelector('.code-window-card .window-title');
    if (winTitle && hero.codeCard.fileName) winTitle.textContent = hero.codeCard.fileName;

    const winTag = document.querySelector('.code-window-card .window-tag');
    if (winTag && hero.codeCard.language) winTag.textContent = hero.codeCard.language;

    const code = hero.codeCard.codeLines;
    if (code) {
      const codeName = document.querySelector('#code-prop-name');
      if (codeName && code.name) codeName.textContent = `"${code.name}"`;

      const codeRole = document.querySelector('#code-prop-role');
      if (codeRole && code.role) codeRole.textContent = `"${code.role}"`;

      const codeEdu = document.querySelector('#code-prop-education');
      if (codeEdu && code.education) codeEdu.textContent = `"${code.education}"`;
    }
  }
}

/**
 * Sync About Section & Bento Cards
 */
function syncAbout(about) {
  if (!about) return;

  const tagEl = document.querySelector('#about .section-tag');
  if (tagEl && about.tag) tagEl.textContent = about.tag;

  const titleEl = document.querySelector('#about .section-title');
  if (titleEl && about.title) titleEl.textContent = about.title;

  const subtitleEl = document.querySelector('#about .section-description');
  if (subtitleEl && about.subtitle) subtitleEl.textContent = about.subtitle;

  const aboutHeaderEl = document.querySelector('.about-badge-header');
  if (aboutHeaderEl && about.badgeHeader) aboutHeaderEl.textContent = about.badgeHeader;

  // Narrative paragraphs
  if (Array.isArray(about.narrative)) {
    const narrativeEls = document.querySelectorAll('.about-narrative');
    about.narrative.forEach((text, i) => {
      if (narrativeEls[i]) narrativeEls[i].textContent = text;
    });
  }

  // Bento Feature Cards Grid
  if (Array.isArray(about.bentoCards) && about.bentoCards.length > 0) {
    const bentoContainer = document.querySelector('.bento-grid');
    if (bentoContainer) {
      bentoContainer.innerHTML = about.bentoCards
        .map(
          card => `
        <div class="bento-card">
          <div class="bento-icon-wrapper">${escapeHtml(card.icon || '✨')}</div>
          <h4 class="bento-title">${escapeHtml(card.title || '')}</h4>
          <span class="bento-value">${escapeHtml(card.value || '')}</span>
          <p class="bento-desc">${escapeHtml(card.description || '')}</p>
        </div>`
        )
        .join('');
    }
  }
}

/**
 * Sync Technical Skills Section
 */
function syncSkills(skills) {
  if (!skills) return;

  const tagEl = document.querySelector('#skills .section-tag');
  if (tagEl && skills.tag) tagEl.textContent = skills.tag;

  const titleEl = document.querySelector('#skills .section-title');
  if (titleEl && skills.title) titleEl.textContent = skills.title;

  const subtitleEl = document.querySelector('#skills .section-description');
  if (subtitleEl && skills.subtitle) subtitleEl.textContent = skills.subtitle;

  // Dynamically render Categories and Skill Items
  if (Array.isArray(skills.categories) && skills.categories.length > 0) {
    const container = document.querySelector('.skills-categories');
    if (container) {
      container.innerHTML = skills.categories
        .map(cat => {
          const itemsHtml = Array.isArray(cat.items)
            ? cat.items
                .map(item => {
                  const iconSvg = item.iconSvg || getTechIcon(item.name);
                  const color = item.color || '#38BDF8';
                  return `
            <div class="skill-item">
              <div class="skill-info-left">
                <div class="skill-logo" style="color: ${escapeHtml(color)};">
                  ${iconSvg}
                </div>
                <span class="skill-name">${escapeHtml(item.name || '')}</span>
              </div>
              <span class="skill-badge" style="border-color: ${escapeHtml(color)}40; color: ${escapeHtml(color)};">${escapeHtml(item.badge || '')}</span>
            </div>`;
                })
                .join('')
            : '';

          return `
          <div class="skill-category-card">
            <div class="skill-category-header">
              <div class="category-icon-box">${escapeHtml(cat.icon || '🚀')}</div>
              <div>
                <h3 class="category-title">${escapeHtml(cat.title || '')}</h3>
                <span class="category-subtitle">${escapeHtml(cat.subtitle || '')}</span>
              </div>
            </div>
            <div class="skills-list">
              ${itemsHtml}
            </div>
          </div>`;
        })
        .join('');
    }
  }
}

/**
 * Sync Featured Project Section
 */
function syncProjects(projects) {
  if (!projects) return;

  const tagEl = document.querySelector('#projects .section-tag');
  if (tagEl && projects.tag) tagEl.textContent = projects.tag;

  const titleEl = document.querySelector('#projects .section-title');
  if (titleEl && projects.title) titleEl.textContent = projects.title;

  const subtitleEl = document.querySelector('#projects .section-description');
  if (subtitleEl && projects.subtitle) subtitleEl.textContent = projects.subtitle;

  const feat = projects.featured;
  if (!feat) return;

  const badgeTag = document.querySelector('.project-badge-tag');
  if (badgeTag && feat.badgeTag) badgeTag.textContent = feat.badgeTag;

  const nameEl = document.querySelector('.project-name');
  if (nameEl && feat.name) nameEl.textContent = feat.name;

  const descEl = document.querySelector('.project-desc');
  if (descEl && feat.description) descEl.textContent = feat.description;

  const urlPill = document.querySelector('.browser-url-pill span');
  if (urlPill && feat.browserUrl) urlPill.textContent = feat.browserUrl;

  const imgLink = document.querySelector('.project-image-link');
  if (imgLink && feat.liveDemoUrl) {
    imgLink.setAttribute('href', feat.liveDemoUrl);
    imgLink.setAttribute('aria-label', `Open ${feat.name} live demo`);
  }

  const imgEl = document.querySelector('.project-img');
  if (imgEl && feat.image) {
    imgEl.setAttribute('src', feat.image);
    if (feat.imageAlt) imgEl.setAttribute('alt', feat.imageAlt);
  }

  // Key Features Checklist
  if (Array.isArray(feat.features) && feat.features.length > 0) {
    const featList = document.querySelector('.project-features-list');
    if (featList) {
      featList.innerHTML = feat.features
        .map(
          f => `
        <li class="project-feature-item">
          <span class="feature-check-icon">✓</span>
          <span>${escapeHtml(f)}</span>
        </li>`
        )
        .join('');
    }
  }

  // Tech Tags
  if (Array.isArray(feat.techTags) && feat.techTags.length > 0) {
    const tagsContainer = document.querySelector('.tech-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = feat.techTags
        .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
        .join('');
    }
  }

  // Action Buttons (Live Demo + Optional Source Code)
  const actionsContainer = document.querySelector('.project-actions');
  if (actionsContainer) {
    let actionsHtml = '';
    if (feat.liveDemoUrl) {
      actionsHtml += `
      <a href="${escapeHtml(feat.liveDemoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <span>Live Demo</span>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>`;
    }
    if (feat.sourceCodeUrl && feat.sourceCodeUrl !== '#' && feat.sourceCodeUrl !== '') {
      actionsHtml += `
      <a href="${escapeHtml(feat.sourceCodeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <span>Source Code</span>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>`;
    }
    actionsContainer.innerHTML = actionsHtml;
  }
}

/**
 * Sync Services / What I Can Build Section
 */
function syncServices(services) {
  if (!services) return;

  const tagEl = document.querySelector('#services .section-tag');
  if (tagEl && services.tag) tagEl.textContent = services.tag;

  const titleEl = document.querySelector('#services .section-title');
  if (titleEl && services.title) titleEl.textContent = services.title;

  const subtitleEl = document.querySelector('#services .section-description');
  if (subtitleEl && services.subtitle) subtitleEl.textContent = services.subtitle;

  // Dynamically render service cards
  if (Array.isArray(services.items) && services.items.length > 0) {
    const grid = document.querySelector('.services-grid');
    if (grid) {
      grid.innerHTML = services.items
        .map(
          item => `
        <div class="service-card">
          <div class="service-icon-box">${escapeHtml(item.icon || '⚡')}</div>
          <h3 class="service-title">${escapeHtml(item.title || '')}</h3>
          <p class="service-desc">${escapeHtml(item.description || '')}</p>
        </div>`
        )
        .join('');
    }
  }
}

/**
 * Sync Development Approach Section
 */
function syncApproach(approach) {
  if (!approach) return;

  const tagEl = document.querySelector('#approach .section-tag');
  if (tagEl && approach.tag) tagEl.textContent = approach.tag;

  const titleEl = document.querySelector('#approach .section-title');
  if (titleEl && approach.title) titleEl.textContent = approach.title;

  const subtitleEl = document.querySelector('#approach .section-description');
  if (subtitleEl && approach.subtitle) subtitleEl.textContent = approach.subtitle;

  // Render Step Cards
  if (Array.isArray(approach.steps) && approach.steps.length > 0) {
    const container = document.querySelector('.approach-steps-container');
    if (container) {
      container.innerHTML = approach.steps
        .map(
          step => `
        <div class="approach-step-card">
          <div class="step-number">${escapeHtml(step.number || '01')}</div>
          <h3 class="step-title">${escapeHtml(step.title || '')}</h3>
          <p class="step-desc">${escapeHtml(step.description || '')}</p>
        </div>`
        )
        .join('');
    }
  }

  // Render AI Integration Note Card
  if (approach.aiCard) {
    const aiIcon = document.querySelector('.ai-card-icon');
    if (aiIcon && approach.aiCard.icon) aiIcon.textContent = approach.aiCard.icon;

    const aiTitle = document.querySelector('.ai-card-content h4');
    if (aiTitle && approach.aiCard.title) aiTitle.textContent = approach.aiCard.title;

    const aiDesc = document.querySelector('.ai-card-content p');
    if (aiDesc && approach.aiCard.description) aiDesc.textContent = approach.aiCard.description;
  }
}

/**
 * Sync Contact Section & Social Links
 */
function syncContact(contact) {
  if (!contact) return;

  const tagEl = document.querySelector('#contact .section-tag');
  if (tagEl && contact.tag) tagEl.textContent = contact.tag;

  const titleEl = document.querySelector('#contact .contact-info-title');
  if (titleEl && contact.title) titleEl.textContent = contact.title;

  const textEl = document.querySelector('#contact .contact-info-text');
  if (textEl && contact.subtitle) textEl.textContent = contact.subtitle;

  const socials = contact.socialLinks;
  if (!socials) return;

  // WhatsApp
  const waItem = document.querySelector('.social-item-whatsapp');
  if (waItem && socials.whatsapp) {
    waItem.setAttribute('href', socials.whatsapp.url || '#');
    const badge = waItem.querySelector('.social-badge');
    if (badge && socials.whatsapp.badge) badge.textContent = socials.whatsapp.badge;
  }

  // LinkedIn
  const liItem = document.querySelector('.social-item-linkedin');
  if (liItem && socials.linkedin) {
    liItem.setAttribute('href', socials.linkedin.url || '#');
    const badge = liItem.querySelector('.social-badge');
    if (badge && socials.linkedin.badge) badge.textContent = socials.linkedin.badge;
  }

  // Email
  const emItem = document.querySelector('.social-item-email');
  if (emItem && socials.email?.address) {
    emItem.setAttribute('data-value', socials.email.address);
    const badge = emItem.querySelector('.social-badge');
    if (badge && socials.email.badge) badge.textContent = socials.email.badge;
  }

  // GitHub
  const ghItem = document.querySelector('.social-item-github');
  if (ghItem && socials.github) {
    ghItem.setAttribute('href', socials.github.url || '#');
    const badge = ghItem.querySelector('.social-badge');
    if (badge && socials.github.badge) badge.textContent = socials.github.badge;
  }

  // Instagram
  const igItem = document.querySelector('.social-item-instagram');
  if (igItem && socials.instagram) {
    igItem.setAttribute('href', socials.instagram.url || '#');
    const badge = igItem.querySelector('.social-badge');
    if (badge && socials.instagram.badge) badge.textContent = socials.instagram.badge;
  }

  // Footer Social Links
  const footerGh = document.querySelector('.footer-link-github');
  if (footerGh && socials.github) footerGh.setAttribute('href', socials.github.url || '#');

  const footerLi = document.querySelector('.footer-link-linkedin');
  if (footerLi && socials.linkedin) footerLi.setAttribute('href', socials.linkedin.url || '#');

  const footerWa = document.querySelector('.footer-link-whatsapp');
  if (footerWa && socials.whatsapp) footerWa.setAttribute('href', socials.whatsapp.url || '#');

  // Floating WhatsApp Button
  const floatBtn = document.querySelector('.whatsapp-float-btn');
  if (floatBtn) {
    const waConfig = contact.floatingWhatsApp;
    if (waConfig?.enabled && waConfig.url && waConfig.url !== '#') {
      floatBtn.setAttribute('href', waConfig.url);
      floatBtn.style.display = 'inline-flex';
    } else {
      floatBtn.style.display = 'none';
    }
  }
}

/**
 * Sync Footer Section
 */
function syncFooter(footer) {
  if (!footer) return;
  const copyEl = document.querySelector('.footer-bottom p');
  if (copyEl && footer.copyrightText) {
    copyEl.textContent = footer.copyrightText;
  }
}

/**
 * Helper to escape HTML characters safely
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 2. Sticky Navbar & Accessible Mobile Drawer Logic
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  const allNavAnchors = document.querySelectorAll('.nav-link, .nav-cta-btn');

  // Sticky navbar with blur on scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    navLinks.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking any nav item
  allNavAnchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMobileMenu();
    }
  });
}

/**
 * 3. High-Performance Ambient Particle Canvas
 */
function initBackgroundCanvas(theme) {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);

  let mouse = { x: -1000, y: -1000 };

  window.addEventListener(
    'resize',
    () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    },
    { passive: true }
  );

  window.addEventListener(
    'mousemove',
    e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    },
    { passive: true }
  );

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.6 + 0.6;
      this.alpha = Math.random() * 0.45 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;

      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.75;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Connect to cursor gently
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.update();
      p.draw();

      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - mdist / 140)})`;
        ctx.lineWidth = 1;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/**
 * 4. 3D Tilt Effect on Interactive Cards
 */
function initTiltEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return; // disable on mobile touch screens

  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach(el => {
    if (el._hasTiltListener) return;
    el._hasTiltListener = true;

    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

/**
 * 5. Active Navigation Observer (ScrollSpy)
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/**
 * 6. Contact Form Multi-Provider Handler
 * Supports:
 * - 'demo'      : Client-side simulation with clear instructive feedback
 * - 'formspree' : Sends direct JSON to Formspree
 * - 'web3forms' : Sends direct JSON to Web3Forms
 */
function initContactForm(config) {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const contactCfg = config?.contact || {};
  const provider = (contactCfg.formProvider || 'demo').toLowerCase();

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all required fields.', 3500);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('⚠️ Please enter a valid email address.', 3500);
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending Message...</span>';
    submitBtn.disabled = true;

    try {
      if (provider === 'formspree') {
        const endpoint = contactCfg.formspreeEndpoint;
        if (!endpoint || endpoint.includes('YOUR_FORMSPREE_ID')) {
          throw new Error('Please configure your Formspree endpoint in js/portfolio-config.js');
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
          form.reset();
          showToast('🎉 Thank you! Your message was sent successfully via Formspree.', 5000);
        } else {
          throw new Error('Formspree service returned an error.');
        }
      } else if (provider === 'web3forms') {
        const accessKey = contactCfg.web3formsAccessKey;
        if (!accessKey || accessKey.includes('YOUR_WEB3FORMS_ACCESS_KEY')) {
          throw new Error('Please configure your Web3Forms access key in js/portfolio-config.js');
        }

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            message
          })
        });

        const data = await response.json();
        if (data.success) {
          form.reset();
          showToast('🎉 Thank you! Your message was sent successfully via Web3Forms.', 5000);
        } else {
          throw new Error(data.message || 'Web3Forms submission failed.');
        }
      } else {
        // Default: Demo Simulation
        await new Promise(resolve => setTimeout(resolve, 800));
        form.reset();
        showToast('ℹ️ [Demo Mode] Message simulated! Connect Formspree or Web3Forms in js/portfolio-config.js to receive real emails.', 6000);
      }
    } catch (err) {
      showToast(`⚠️ ${err.message || 'Failed to send message. Please try again.'}`, 5000);
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

/**
 * 7. Social Links & Placeholders Handler
 */
function initSocialPlaceholders() {
  const placeholders = document.querySelectorAll('[data-placeholder]');

  placeholders.forEach(item => {
    item.addEventListener('click', () => {
      const type = item.getAttribute('data-placeholder');
      const val = item.getAttribute('data-value') || '';

      if (val) {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(val)
            .then(() => {
              showToast(`📋 ${type} (${val}) copied to clipboard!`, 3500);
            })
            .catch(() => {
              showToast(`ℹ️ ${type}: ${val}`, 3500);
            });
        } else {
          showToast(`ℹ️ ${type}: ${val}`, 3500);
        }
      } else {
        showToast(`ℹ️ ${type} link placeholder.`, 3000);
      }
    });
  });

  // Handle unconfigured social & footer links (#)
  const emptySocialLinks = document.querySelectorAll('.social-item, .footer-link');
  emptySocialLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href === '') {
        e.preventDefault();
        showToast('ℹ️ Placeholder link: Connect your profile URL in js/portfolio-config.js', 3500);
      }
    });
  });
}

/**
 * 8. Reusable Toast Notification System
 */
let toastTimeout;
function showToast(message, duration = 3500) {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

/**
 * 9. Back to Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
