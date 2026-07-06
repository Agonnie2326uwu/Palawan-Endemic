/* ==========================================================================
   PALAWAN WILD — QUIZ (v2: photos + game-like presentation)
   Generates multiple-choice questions from data/species.js. Every question
   shows the animal's photo (falls back to a category icon if missing).
   Includes an animated progress bar and a livelier results screen.
   ========================================================================== */

const QUIZ_LENGTH = 8;

const QUIZ_CATEGORY_ICONS = {
  mammals: `<svg viewBox="0 0 24 24" fill="none" stroke="#f4efe1" stroke-width="1.4"><path d="M12 3c-1.8 0-3 1.4-3 3 0 .7.2 1.3.5 1.8C7.2 8.6 5 11 5 14c0 4 3.2 7 7 7s7-3 7-7c0-3-2.2-5.4-4.5-6.2.3-.5.5-1.1.5-1.8 0-1.6-1.2-3-3-3z"/><circle cx="9.5" cy="13" r="1"/><circle cx="14.5" cy="13" r="1"/></svg>`,
  birds: `<svg viewBox="0 0 24 24" fill="none" stroke="#f4efe1" stroke-width="1.4"><path d="M3 12c2-4 6-6 9-6 4.5 0 8 3 9 6-2 1-4 1.6-6 1.7L18 19l-3-2-3 2 .5-5.3C9.5 13.4 5.5 13.6 3 12z"/></svg>`,
  reptiles: `<svg viewBox="0 0 24 24" fill="none" stroke="#f4efe1" stroke-width="1.4"><path d="M3 16c2-3 3-7 6-9 2-1.4 4-1.4 5 0 .8 1.1.2 2.6-1 3-1.6.6-2 2-1 3 1 1 2.6.6 3-1 .4-1.4 2-2.6 3.4-1.8 1.6.9 1.8 3 .6 4.4-2 2.4-5.4 3.4-8.4 2.6C7.6 16.4 5 17.6 3 16z"/></svg>`
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWrongOptions(correctValue, allValues, count) {
  const pool = allValues.filter(v => v !== correctValue);
  return shuffle(pool).slice(0, count);
}

/** Build one question object: { prompt, options, correctIndex, explanation, animal } */
function buildQuestion(animal, type) {
  const allNames = SPECIES.map(s => s.name);
  const allSci = SPECIES.map(s => s.scientificName);
  const allStatus = [...new Set(SPECIES.map(s => s.statusLabel))];
  const allLocal = SPECIES.map(s => s.localName);

  if (type === "scientific") {
    const wrong = pickWrongOptions(animal.scientificName, allSci, 3);
    const options = shuffle([animal.scientificName, ...wrong]);
    return {
      animal,
      prompt: `What is the scientific name of the ${animal.name}?`,
      options,
      correctIndex: options.indexOf(animal.scientificName),
      explanation: `${animal.name} is scientifically known as ${animal.scientificName}.`
    };
  }

  if (type === "status") {
    const wrong = pickWrongOptions(animal.statusLabel, allStatus, Math.min(3, allStatus.length - 1));
    const options = shuffle([animal.statusLabel, ...wrong]);
    return {
      animal,
      prompt: `What is the IUCN conservation status of the ${animal.name}?`,
      options,
      correctIndex: options.indexOf(animal.statusLabel),
      explanation: `The ${animal.name} is currently classified as ${animal.statusLabel}.`
    };
  }

  if (type === "local") {
    const wrong = pickWrongOptions(animal.localName, allLocal, 3);
    const options = shuffle([animal.localName, ...wrong]);
    return {
      animal,
      prompt: `Which local name refers to the ${animal.name}?`,
      options,
      correctIndex: options.indexOf(animal.localName),
      explanation: `The ${animal.name} is locally known as ${animal.localName}.`
    };
  }

  // type === "name" — show photo + scientific name, ask for common name
  const wrong = pickWrongOptions(animal.name, allNames, 3);
  const options = shuffle([animal.name, ...wrong]);
  return {
    animal,
    prompt: `Which animal is "${animal.scientificName}"?`,
    options,
    correctIndex: options.indexOf(animal.name),
    explanation: `${animal.scientificName} is the scientific name for the ${animal.name}.`
  };
}

function generateQuiz() {
  const types = ["scientific", "status", "local", "name"];
  const chosenAnimals = shuffle(SPECIES).slice(0, QUIZ_LENGTH);
  return chosenAnimals.map(animal => buildQuestion(animal, types[Math.floor(Math.random() * types.length)]));
}

/* ---------------- Quiz runtime ---------------- */

let quizQuestions = [];
let currentQ = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;

function startQuiz() {
  quizQuestions = generateQuiz();
  currentQ = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  document.getElementById("quiz-intro").style.display = "none";
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-stage").style.display = "block";
  renderQuestion();
}

function renderProgressBar() {
  const pct = (currentQ / quizQuestions.length) * 100;
  return `
    <div class="quiz-progress-track">
      <div class="quiz-progress-fill" style="width:${pct}%;"></div>
    </div>
    <div class="quiz-progress-meta">
      <span>Question ${currentQ + 1} of ${quizQuestions.length}</span>
      <span class="quiz-streak">${streak > 1 ? `🔥 ${streak} streak` : ""}</span>
    </div>
  `;
}

function renderQuestion() {
  const q = quizQuestions[currentQ];
  const stage = document.getElementById("quiz-stage");
  const icon = QUIZ_CATEGORY_ICONS[q.animal.category] || "";

  stage.innerHTML = `
    ${renderProgressBar()}
    <div class="quiz-card" id="quiz-card">
      <div class="quiz-photo">
        ${icon}
        ${q.animal.image ? `<img src="${q.animal.image}" alt="" onerror="this.remove();">` : ""}
        <span class="quiz-photo-badge">${CATEGORY_LABELS[q.animal.category]}</span>
      </div>
      <div class="quiz-body">
        <h2 style="margin-bottom:20px;">${q.prompt}</h2>
        <div id="quiz-options" class="quiz-options"></div>
        <div id="quiz-feedback"></div>
      </div>
    </div>
  `;

  const optionsWrap = document.getElementById("quiz-options");
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.style.animationDelay = `${i * 60}ms`;
    btn.innerHTML = `<span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span><span class="quiz-option-text">${opt}</span>`;
    btn.addEventListener("click", () => selectAnswer(i, btn));
    optionsWrap.appendChild(btn);
  });
}

function selectAnswer(index, btnEl) {
  const q = quizQuestions[currentQ];
  const allBtns = document.querySelectorAll(".quiz-option");
  allBtns.forEach(b => b.disabled = true);

  const isCorrect = index === q.correctIndex;
  if (isCorrect) {
    score++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
  } else {
    streak = 0;
  }

  allBtns[q.correctIndex].classList.add("is-correct");
  if (!isCorrect) btnEl.classList.add("is-wrong");

  const feedback = document.getElementById("quiz-feedback");
  feedback.innerHTML = `
    <div class="quiz-feedback-box ${isCorrect ? 'is-correct-box' : 'is-wrong-box'}">
      <p class="quiz-feedback-title">${isCorrect ? "✓ Correct!" : "✕ Not quite."}</p>
      <p class="quiz-feedback-text">${q.explanation}</p>
    </div>
    <button class="btn btn-primary" id="quiz-next-btn" style="margin-top:16px;">
      ${currentQ + 1 < quizQuestions.length ? "Next question →" : "See results →"}
    </button>
  `;
  feedback.classList.add("is-in");
  document.getElementById("quiz-next-btn").addEventListener("click", nextQuestion);
}

function nextQuestion() {
  currentQ++;
  if (currentQ < quizQuestions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-stage").style.display = "none";
  const resultEl = document.getElementById("quiz-result");
  resultEl.style.display = "block";

  const pct = Math.round((score / quizQuestions.length) * 100);
  let message, grade, gradeColor;
  if (pct >= 85) {
    message = "Field-guide ready — you really know your Palawan endemics.";
    grade = "Field Expert"; gradeColor = "var(--status-least)";
  } else if (pct >= 60) {
    message = "Solid grasp of Palawan's wildlife. A bit more reading and you'll have it cold.";
    grade = "Wildlife Spotter"; gradeColor = "var(--warm-amber-dark)";
  } else {
    message = "A good start — browse the species directory and try again.";
    grade = "Curious Explorer"; gradeColor = "var(--status-vulnerable)";
  }

  resultEl.innerHTML = `
    <div class="quiz-result-card">
      <p class="eyebrow">Quiz complete</p>
      <div class="quiz-score-circle" style="--score-pct:${pct};">
        <span class="quiz-score-number">${score}/${quizQuestions.length}</span>
      </div>
      <h2 style="color:${gradeColor}; margin-top:18px;">${grade}</h2>
      <p style="max-width:440px; margin: 0 auto 8px;">${message}</p>
      ${bestStreak > 2 ? `<p style="font-size:0.88rem; color: var(--ink-soft);">🔥 Best streak: ${bestStreak} in a row</p>` : ""}
      <div style="display:flex; gap:14px; flex-wrap:wrap; justify-content:center; margin-top:22px;">
        <button class="btn btn-primary" id="quiz-retry-btn">Try again</button>
        <a href="species.html" class="btn btn-outline" style="border-color: var(--canopy-green); color: var(--canopy-green-dark);">Review the species directory</a>
      </div>
    </div>
  `;
  document.getElementById("quiz-retry-btn").addEventListener("click", startQuiz);

  // Animate the score ring in
  requestAnimationFrame(() => {
    document.querySelector(".quiz-score-circle").classList.add("is-filled");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("quiz-start-btn");
  if (startBtn) startBtn.addEventListener("click", startQuiz);
});
