import { SPECIES } from "../data/species.js";
import { renderSpeciesCards } from "./species-render.js";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("species-grid");
  const chips = document.querySelectorAll(".filter-chip");
  const searchInput = document.getElementById("species-search");
  if (!grid) return;

  let activeCategory = "all";
  let query = "";

  function applyFilters() {
    let result = SPECIES;

    if (activeCategory !== "all") {
      result = result.filter(a => a.category === activeCategory);
    }

    if (query.trim() !== "") {
      const q = query.trim().toLowerCase();
      result = result.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.scientificName.toLowerCase().includes(q) ||
        a.localName.toLowerCase().includes(q)
      );
    }

    renderSpeciesCards(result, grid);
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      activeCategory = chip.dataset.category;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value;
      applyFilters();
    });
  }

  applyFilters();
});
