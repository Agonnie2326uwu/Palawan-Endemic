import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SPECIES, STATUS_META } from "../data/species.js";

const LOCATION_COORDS = {
  "Puerto Princesa": [9.7392, 118.7353],
  "Puerto Princesa Subterranean River N.P.": [10.1995, 118.9211],
  "Puerto Princesa Bay": [9.79, 118.75],
  "St. Paul Subterranean River N.P.": [10.1995, 118.9211],
  "Balabac": [7.9889, 117.0644],
  "Busuanga": [12.1167, 120.0167],
  "Coron": [11.9951, 120.2010],
  "Roxas": [10.5928, 119.3650],
  "Dumaran Island": [10.5667, 119.7833],
  "Culion": [11.8833, 120.0167],
  "Palawan mainland forests": [9.85, 118.75],
  "Calamian Islands": [12.0, 120.0],
  "Victoria-Anepahan Range": [9.95, 118.55],
  "Mt. Mantalingajan foothills": [8.8333, 117.7],
  "Mt. Mantalingajan": [8.8333, 117.7],
  "Aborlan": [9.4500, 118.5167],
  "Rasa Island Wildlife Sanctuary": [9.7167, 119.3333],
  "Narra": [9.3, 118.4167],
  "Iwahig": [9.6167, 118.7833],
  "Mangrove areas, Puerto Princesa Bay": [9.78, 118.74],
  "Cleopatra's Needle": [10.0667, 118.8667],
  "Calauit Island": [12.3167, 119.9333],
  "Mangroves & coastal forest, mainland Palawan": [10.0, 118.9],
  "Lowland & dry forest, mainland Palawan": [9.6, 118.6],
  "El Nido forests": [11.1949, 119.4079],
  "Freshwater rivers & marshes, southern Palawan": [8.95, 117.65],
  "Central & northern Palawan forest": [10.3, 119.0],
  "Coastal woodland & plantation edges": [9.9, 118.8],
  "Palawan lowland & secondary forest": [9.7, 118.7],
  "Katala Foundation study areas": [9.74, 118.74],
  "Palawan lowland forest & forest-edge": [9.5, 118.55]
};

document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const map = L.map("map", { scrollWheelZoom: false }).setView([9.9, 118.8], 8);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 13,
    minZoom: 7,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());

  let activeCategory = "all";
  const markers = [];

  function colorFor(animal) {
    return STATUS_META[animal.status].color;
  }

  function makeDivIcon(color) {
    return L.divIcon({
      className: "",
      html: `<div style="width:16px;height:16px;border-radius:50%;background:${color};border:2px solid #fbf8f0;box-shadow:0 1px 4px rgba(0,0,0,0.4);"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  }

  SPECIES.forEach(animal => {
    animal.locations.forEach(locName => {
      const coords = LOCATION_COORDS[locName];
      if (!coords) return;

      const jitter = () => (Math.random() - 0.5) * 0.04;
      const lat = coords[0] + jitter();
      const lng = coords[1] + jitter();

      const marker = L.marker([lat, lng], { icon: makeDivIcon(colorFor(animal)) })
        .bindPopup(`
          <strong>${animal.name}</strong><br>
          <em style="font-size:0.85em;">${animal.scientificName}</em><br>
          <span style="font-size:0.82em;">${locName}</span><br>
          <span style="font-size:0.78em; font-weight:700; color:${colorFor(animal)};">${animal.statusLabel}</span>
        `);

      marker.speciesCategory = animal.category;
      marker.addTo(map);
      markers.push(marker);
    });
  });

  function applyMapFilter(category) {
    activeCategory = category;
    markers.forEach(m => {
      if (category === "all" || m.speciesCategory === category) {
        if (!map.hasLayer(m)) m.addTo(map);
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
    });
  }

  document.querySelectorAll(".map-filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".map-filter-chip").forEach(c => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      applyMapFilter(chip.dataset.category);
    });
  });
});
