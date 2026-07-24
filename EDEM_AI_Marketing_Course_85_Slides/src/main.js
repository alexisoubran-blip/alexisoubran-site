import "@fontsource/anton/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import "./styles.css";
import { slides } from "./slides.js";
import { toolbox } from "./toolbox.js";

const slidesRoot = document.querySelector(".slides");
const toolboxPanel = document.querySelector(".toolbox");
const toolboxContent = document.querySelector("#toolbox-content");
const toast = document.querySelector(".toast");
const timers = new Map();

function renderSources(sources = []) {
  if (!sources.length) return "";
  return `
    <div class="slide-sources">
      ${sources
        .map(
          (item) =>
            `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`
        )
        .join("")}
    </div>`;
}

function renderTimer(duration, kind) {
  if (!duration) return "";
  return `
    <div class="timer ${kind === "break" ? "timer-large" : ""}" data-seconds="${duration * 60}">
      <div class="timer-face">
        <span data-timer-display>${String(duration).padStart(2, "0")}:00</span>
        <small>MIN</small>
      </div>
      <div class="timer-controls">
        <button type="button" data-timer-action="start">START</button>
        <button type="button" data-timer-action="pause">PAUSE</button>
        <button type="button" data-timer-action="reset">RESET</button>
      </div>
    </div>`;
}

function renderMeta(meta = []) {
  if (!meta.length) return "";
  return `<div class="meta-row">${meta.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function renderSlide(slide, index) {
  const number = String(index + 1).padStart(2, "0");
  return `
    <section
      id="${slide.id}"
      class="deck-slide theme-${slide.theme || "light"} kind-${slide.kind || "standard"}"
      data-slide-id="${slide.id}"
      data-background-color="${slide.theme === "red" ? "#e10600" : slide.theme === "dark" ? "#080808" : "#f5f3ee"}"
    >
      <div class="slide-frame">
        <div class="slide-topline">
          <span class="micro-brand">EDEM</span>
          <span class="micro-section">${slide.eyebrow || ""}</span>
          <span class="micro-number">${number}</span>
        </div>
        <div class="slide-content">
          ${slide.eyebrow ? `<div class="eyebrow">${slide.eyebrow}</div>` : ""}
          ${slide.title ? `<h1>${slide.title}</h1>` : ""}
          ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
          ${slide.image ? `<div class="profile-image-wrap"><div class="profile-orbit"></div><img class="profile-image" src="${slide.image}" alt="Alexis Soubran"></div>` : ""}
          ${slide.body || ""}
          ${renderMeta(slide.meta)}
          ${renderTimer(slide.duration, slide.kind)}
        </div>
        ${renderSources(slide.sources)}
        <div class="slide-footer">
          <span>IA PARA LÍDERES DE MARKETING</span>
          <span>ALEXIS SOUBRAN · MINIMALIST</span>
        </div>
      </div>
      <aside class="notes">${slide.notes || ""}</aside>
    </section>`;
}

slidesRoot.innerHTML = slides.map(renderSlide).join("");

toolboxContent.innerHTML = toolbox
  .map(
    (group, index) => `
      <section class="tool-group">
        <div class="tool-index">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h3>${group.category}</h3>
          <p>${group.job}</p>
          <div class="tool-links">
            ${group.tools
              .map(
                ([name, url]) =>
                  `<a href="${url}" target="_blank" rel="noreferrer">${name}<span>↗</span></a>`
              )
              .join("")}
          </div>
        </div>
      </section>`
  )
  .join("");

const deck = new Reveal({
  plugins: [RevealNotes],
  hash: true,
  history: true,
  controls: false,
  progress: true,
  slideNumber: "c/t",
  width: 1600,
  height: 900,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  center: false,
  transition: "fade",
  backgroundTransition: "fade",
  pdfSeparateFragments: false,
  showNotes: false
});

await deck.initialize();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function openToolbox() {
  document.body.classList.add("toolbox-open");
  toolboxPanel.setAttribute("aria-hidden", "false");
}

function closeToolbox() {
  document.body.classList.remove("toolbox-open");
  toolboxPanel.setAttribute("aria-hidden", "true");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function updateTimer(timer) {
  const state = timers.get(timer);
  timer.querySelector("[data-timer-display]").textContent = formatTime(state.remaining);
  timer.classList.toggle("timer-warning", state.remaining > 0 && state.remaining <= 60);
  timer.classList.toggle("timer-done", state.remaining === 0);
}

function getTimerState(timer) {
  if (!timers.has(timer)) {
    timers.set(timer, {
      initial: Number(timer.dataset.seconds),
      remaining: Number(timer.dataset.seconds),
      interval: null
    });
  }
  return timers.get(timer);
}

function controlTimer(timer, action) {
  const state = getTimerState(timer);
  if (action === "start" && !state.interval && state.remaining > 0) {
    state.interval = window.setInterval(() => {
      state.remaining = Math.max(0, state.remaining - 1);
      updateTimer(timer);
      if (state.remaining === 0) {
        window.clearInterval(state.interval);
        state.interval = null;
        showToast("Tiempo terminado");
      }
    }, 1000);
  }
  if (action === "pause" && state.interval) {
    window.clearInterval(state.interval);
    state.interval = null;
  }
  if (action === "reset") {
    if (state.interval) window.clearInterval(state.interval);
    state.interval = null;
    state.remaining = state.initial;
    updateTimer(timer);
  }
}

function rangeValues(form) {
  return [...form.querySelectorAll('input[type="range"]')].reduce((acc, input) => {
    acc[input.name] = Number(input.value);
    return acc;
  }, {});
}

function calculate(form) {
  const values = rangeValues(form);
  const scoreNode = form.querySelector("[data-score]");
  const verdictNode = form.querySelector("[data-verdict]");
  const type = form.dataset.calculator;

  if (type === "readiness") {
    const score = Math.round(
      ((values.revenue + values.data + values.workflow + values.adoption + values.governance) /
        25) *
        100
    );
    const weakest = Math.min(...Object.values(values));
    scoreNode.textContent = score;
    verdictNode.textContent =
      weakest < 3
        ? "CORRIGE EL CUELLO DE BOTELLA"
        : score >= 80
          ? "LISTO PARA ESCALAR CON GATES"
          : score >= 60
            ? "LISTO PARA PILOTO CONTROLADO"
            : score >= 40
              ? "EXPERIMENTO ESTRECHO"
              : "NO FINANCIAR TODAVÍA";
  }

  if (type === "value") {
    const raw =
      (values.impact * values.speed * values.confidence) /
      Math.max(1, values.effort * values.risk);
    const score = Math.round(raw * 10) / 10;
    scoreNode.textContent = score.toFixed(1);
    verdictNode.textContent =
      score >= 8
        ? "ESCALAR CON GATES"
        : score >= 4
          ? "PILOTEAR"
          : score >= 2
            ? "REDISEÑAR ANTES DE FINANCIAR"
            : "MATAR O REPLANTEAR";
  }

  if (type === "vendor") {
    const weighted =
      values.problem +
      values.evidence * 1.5 +
      values.usability +
      values.economics +
      values.boundaries * 1.5 +
      values.architecture;
    const score = Math.round((weighted / 35) * 100);
    scoreNode.textContent = score;
    verdictNode.textContent =
      values.evidence < 3 || values.boundaries < 3
        ? "RECHAZAR HASTA TENER EVIDENCIA"
        : score >= 80
          ? "COMPRAR CON CONDICIONES"
          : score >= 60
            ? "PILOTO CONDICIONADO"
            : score >= 40
              ? "AMPLIAR DUE DILIGENCE"
              : "RECHAZAR";
  }
}

function persistField(field) {
  const slide = field.closest("[data-slide-id]");
  if (!slide || !field.name) return;
  localStorage.setItem(`edem:${slide.dataset.slideId}:${field.name}`, field.value);
}

function restoreFields() {
  document.querySelectorAll("input[name], textarea[name], select[name]").forEach((field) => {
    const slide = field.closest("[data-slide-id]");
    const saved = localStorage.getItem(`edem:${slide.dataset.slideId}:${field.name}`);
    if (saved !== null) field.value = saved;
  });
  document.querySelectorAll(".score-form").forEach((form) => {
    form.querySelectorAll('input[type="range"]').forEach((input) => {
      input.nextElementSibling.textContent = input.value;
    });
    calculate(form);
  });
}

restoreFields();

document.addEventListener("input", (event) => {
  const field = event.target.closest("input, textarea, select");
  if (!field) return;
  persistField(field);
  if (field.type === "range") {
    field.nextElementSibling.textContent = field.value;
    const form = field.closest(".score-form");
    if (form) calculate(form);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea, select")) event.stopPropagation();
  if (event.key === "Escape" && document.body.classList.contains("toolbox-open")) {
    closeToolbox();
    event.stopPropagation();
  }
});

document.addEventListener("click", async (event) => {
  const timerButton = event.target.closest("[data-timer-action]");
  if (timerButton) {
    controlTimer(timerButton.closest(".timer"), timerButton.dataset.timerAction);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  const jumpButton = event.target.closest("[data-jump]");

  if (jumpButton) {
    deck.slide(Number(jumpButton.dataset.jump));
    return;
  }

  if (!actionButton) return;
  const action = actionButton.dataset.action;

  if (action === "overview") deck.toggleOverview();
  if (action === "notes") deck.getPlugin("notes")?.open();
  if (action === "toolbox") openToolbox();
  if (action === "close-toolbox") closeToolbox();
  if (action === "fullscreen") {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  }
  if (action === "pdf") {
    const printUrl = new URL(window.location.href);
    printUrl.searchParams.set("print-pdf", "");
    printUrl.hash = "";
    window.open(printUrl.toString(), "_blank", "noopener");
  }
  if (action === "copy-capstone") {
    const form = document.querySelector(".capstone-form");
    const lines = [...form.querySelectorAll("textarea")].map(
      (field) => `${field.closest("label").childNodes[0].textContent.trim()}\n${field.value || "—"}`
    );
    await navigator.clipboard.writeText(
      `AI Marketing Investment Map — Alexis Soubran / EDEM\n\n${lines.join("\n\n")}`
    );
    showToast("Plan copiado");
  }
  if (action === "reset-capstone") {
    const form = document.querySelector(".capstone-form");
    form.reset();
    form.querySelectorAll("textarea").forEach((field) => {
      localStorage.removeItem(`edem:capstone:${field.name}`);
    });
    showToast("Plan reiniciado");
  }
});

deck.on("slidechanged", (event) => {
  const label = event.currentSlide?.querySelector(".eyebrow")?.textContent || "CURSO EJECUTIVO";
  document.querySelector(".course-label").textContent = label;
  closeToolbox();
});

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}
