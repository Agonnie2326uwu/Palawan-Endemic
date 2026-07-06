/* ==========================================================================
   PALAWAN WILD — SPECIES RENDER
   Builds species cards from data/species.js. Used on index.html (featured
   subset) and species.html (full grid, paired with filters.js).
   ========================================================================== */

/** Small inline SVG icons per category, shown on the card media area. */
const CATEGORY_ICONS = {
  mammals: `<svg viewBox="0 0 24 24" fill="none" stroke="#f4efe1" stroke-width="1.4"><path d="M12 3c-1.8 0-3 1.4-3 3 0 .7.2 1.3.5 1.8C7.2 8.6 5 11 5 14c0 4 3.2 7 7 7s7-3 7-7c0-3-2.2-5.4-4.5-6.2.3-.5.5-1.1.5-1.8 0-1.6-1.2-3-3-3z"/><circle cx="9.5" cy="13" r="1"/><circle cx="14.5" cy="13" r="1"/></svg>`,
  birds: `<svg viewBox="0 0 24 24" fill="none" stroke="#f4efe1" stroke-width="1.4"><path d="M3 12c2-4 6-6 9-6 4.5 0 8 3 9 6-2 1-4 1.6-6 1.7L18 19l-3-2-3 2 .5-5.3C9.5 13.4 5.5 13.6 3 12z"/><circle cx="15" cy="9" r=".6" fill="#f4efe1"/></svg>`,
  reptiles: `<svg viewBox="0 0 24 24" fill="none" stroke="#f4efe1" stroke-width="1.4"><path d="M3 16c2-3 3-7 6-9 2-1.4 4-1.4 5 0 .8 1.1.2 2.6-1 3-1.6.6-2 2-1 3 1 1 2.6.6 3-1 .4-1.4 2-2.6 3.4-1.8 1.6.9 1.8 3 .6 4.4-2 2.4-5.4 3.4-8.4 2.6C7.6 16.4 5 17.6 3 16z"/></svg>`
};

/**
 * Render an array of species objects into a target container as cards.
 * @param {Array} list - species objects (subset or full SPECIES array)
 * @param {HTMLElement} container
 */
function renderSpeciesCards(list, container) {
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding: 40px 0; color: var(--ink-soft);">
      No animals match your search. Try a different name or filter.
    </p>`;
    return;
  }

  container.innerHTML = list.map(animal => `
    <button class="species-card" data-id="${animal.id}" aria-haspopup="dialog">
      <div class="species-card__media">
        ${CATEGORY_ICONS[animal.category] || ""}
        ${animal.image ? `
          <img
            class="species-card__photo"
            src="${animal.image}"
            alt="${animal.name}"
            loading="lazy"
            onerror="this.remove();"
          >
        ` : ""}
      </div>
      <div class="species-card__body">
        <div class="species-card__category">${CATEGORY_LABELS[animal.category]}</div>
        <div class="species-card__name">${animal.name}</div>
        <div class="species-card__sci">${animal.scientificName}</div>
        <p class="species-card__blurb">${animal.blurb}</p>
        <span class="status-pill status-${animal.status}">
          <span class="dot"></span>${animal.statusLabel}
        </span>
      </div>
    </button>
  `).join("");

  // Wire each card to open the detail modal (modal.js defines openSpeciesModal)
  container.querySelectorAll(".species-card").forEach(card => {
    card.addEventListener("click", () => {
      const animal = SPECIES.find(s => s.id === card.dataset.id);
      if (animal && typeof openSpeciesModal === "function") {
        openSpeciesModal(animal);
      }
    });
  });
}
