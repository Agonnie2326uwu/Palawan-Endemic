document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.getElementById("hero-slideshow");
  if (!slideshow) return;

  const allImgs = Array.from(slideshow.querySelectorAll("img"));
  const dotsContainer = document.getElementById("hero-dots");

  let slides = [];
  let current = 0;
  let timer;
  let rotationBuilt = false;

  function buildRotation() {
    if (rotationBuilt) return;
    rotationBuilt = true;

    slides = allImgs.filter(img => img.dataset.failed !== "true");

    dotsContainer.innerHTML = "";
    if (slides.length === 0) return;

    slides.forEach((img, i) => img.classList.toggle("is-active", i === 0));
    current = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `Show slide ${i + 1}`);
      if (i === 0) dot.setAttribute("aria-current", "true");
      dot.addEventListener("click", () => {
        clearInterval(timer);
        goTo(i);
        startTimer();
      });
      dotsContainer.appendChild(dot);
    });

    if (slides.length > 1) startTimer();
  }

  function goTo(index) {
    slides[current].classList.remove("is-active");
    dotsContainer.children[current].removeAttribute("aria-current");
    current = index;
    slides[current].classList.add("is-active");
    dotsContainer.children[current].setAttribute("aria-current", "true");
  }

  function next() { goTo((current + 1) % slides.length); }

  function startTimer() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  let settled = 0;
  function markSettled(img, failed) {
    if (img.dataset.checked === "true") return;
    img.dataset.checked = "true";
    img.dataset.failed = failed ? "true" : "false";
    if (failed) img.style.display = "none";
    settled++;
    if (settled === allImgs.length) buildRotation();
  }

  allImgs.forEach(img => {
    if (img.complete) {
      markSettled(img, img.naturalWidth === 0);
    } else {
      img.addEventListener("load", () => markSettled(img, false), { once: true });
      img.addEventListener("error", () => markSettled(img, true), { once: true });
    }
  });

  setTimeout(() => { if (!rotationBuilt) buildRotation(); }, 4000);
});
