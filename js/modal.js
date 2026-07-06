/* ==========================================================================
   PALAWAN WILD — MODAL
   Opens a detail dialog for a species: full bio, encounter guidance, and
   first aid if relevant. Used wherever species-render.js builds cards.
   ========================================================================== */

let lastFocusedElement = null;

function buildModalHTML(animal) {
  const dangerMeta = DANGER_META[animal.dangerLevel];

  const locList = animal.locations.map(loc => `<span class="loc-tag">${loc}</span>`).join("");

  const encounterList = animal.ifEncountered
    .map(step => `<li>${step}</li>`)
    .join("");

  const firstAidBlock = animal.firstAid ? `
    <div class="first-aid-box">
      <div class="modal-section-title">⚠ If bitten / injured — first aid</div>
      <ul class="modal-list">
        ${animal.firstAid.map(step => `<li>${step}</li>`).join("")}
      </ul>
      <p style="margin-top:10px; margin-bottom:0; font-size: 0.82rem;">
        This is first-aid guidance only, not a substitute for professional care.
        For serious injury, go to the nearest hospital or call the numbers on the
        <a href="rescue.html" style="text-decoration:underline;">Rescue &amp; Hotline page</a>.
      </p>
    </div>
  ` : `
    <div class="callout" style="margin-top:8px;">
      This species poses no real danger to people. No first aid section is needed —
      if you find one injured or in distress, see the
      <a href="rescue.html" style="text-decoration:underline;">Rescue &amp; Hotline page</a>.
    </div>
  `;

  const photoBlock = animal.image ? `
    <img
      class="modal-photo"
      src="${animal.image}"
      alt="${animal.name}"
      onerror="this.remove();"
    >
  ` : "";

  return `
    <button class="modal-close" aria-label="Close">✕</button>
    ${photoBlock}
    <h3 class="modal-eyebrow-name">${CATEGORY_LABELS[animal.category]}</h3>
    <h2 style="margin-bottom:2px;">${animal.name}</h2>
    <p style="font-style:italic; color: var(--ink-soft); margin-bottom: 0;">${animal.scientificName}</p>
    <p style="font-size:0.85rem; margin-top:2px;">Local name: <strong>${animal.localName}</strong></p>

    <div class="modal-meta-row">
      <span class="status-pill status-${animal.status}"><span class="dot"></span>${animal.statusLabel}</span>
      <span class="danger-badge" style="color:${dangerMeta.color};">${dangerMeta.label}</span>
    </div>

    <div class="modal-section-title">Where it's found</div>
    <div class="modal-loc-list">${locList}</div>

    <div class="modal-section-title">About</div>
    <p>${animal.details}</p>

    <div class="modal-section-title">If you encounter one</div>
    <p style="margin-bottom:8px;">${animal.encounter}</p>
    <ul class="modal-list">${encounterList}</ul>

    ${firstAidBlock}
  `;
}

function openSpeciesModal(animal) {
  const overlay = document.getElementById("species-modal-overlay");
  const modal = document.getElementById("species-modal");
  if (!overlay || !modal) return;

  modal.innerHTML = buildModalHTML(animal);
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";

  lastFocusedElement = document.activeElement;
  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.focus();
  closeBtn.addEventListener("click", closeSpeciesModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSpeciesModal();
  });
}

function closeSpeciesModal() {
  const overlay = document.getElementById("species-modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSpeciesModal();
});
