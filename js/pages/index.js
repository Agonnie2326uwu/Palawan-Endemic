import { SPECIES } from "../../data/species.js";
import { renderSpeciesCards } from "../species-render.js";
import "../modal.js";
import "../nav.js";
import "../hero.js";
import "../theme.js";

document.addEventListener("DOMContentLoaded", () => {
  const featuredIds = ["palawan-pangolin", "philippine-cockatoo", "philippine-crocodile", "palawan-peacock-pheasant"];
  const featured = SPECIES.filter(s => featuredIds.includes(s.id));
  renderSpeciesCards(featured, document.getElementById("featured-grid"));
});
