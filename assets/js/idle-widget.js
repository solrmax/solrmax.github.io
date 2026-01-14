document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("idle-bar");
  if (!widget) {
    return;
  }

  const signalEl = document.getElementById("idle-signal");
  const rateEl = document.getElementById("idle-rate");
  const clickPowerEl = document.getElementById("idle-click-power");
  const cpsEl = document.getElementById("idle-cps");
  const clickBtn = document.getElementById("idle-click");
  const upgradeScannerBtn = document.getElementById("idle-upgrade-scanner");
  const upgradeAmplifierBtn = document.getElementById("idle-upgrade-amplifier");
  const scannerCostEl = document.getElementById("idle-upgrade-scanner-cost");
  const amplifierCostEl = document.getElementById("idle-upgrade-amplifier-cost");
  const statusEl = document.getElementById("idle-status");
  const charactersEl = document.getElementById("idle-characters");
  const progressFillEl = document.getElementById("idle-progress-fill");
  const victoryEl = document.getElementById("idle-victory");
  const continueBtn = document.getElementById("idle-continue");

  if (!signalEl || !rateEl || !clickPowerEl || !cpsEl || !clickBtn || !upgradeScannerBtn || !upgradeAmplifierBtn || !progressFillEl || !victoryEl || !continueBtn) {
    return;
  }

  const BASE_CLICK = 1;
  const AUTO_PER_LEVEL = 0.35;
  const CLICK_PER_LEVEL = 1;
  const WIN_SIGNAL = 450;
  const LEGACY_STORAGE_KEYS = ["idleWidgetState", "idleWidgetStateV2"];

  LEGACY_STORAGE_KEYS.forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      // Ignore storage cleanup failures.
    }
  });

  const baseCosts = {
    scanner: 12,
    amplifier: 20,
  };

  let clicksThisSecond = 0;
  let smoothedCps = 0;

  const state = {
    signal: 0,
    scannerLevel: 0,
    amplifierLevel: 0,
    hasWon: false,
  };

  widget.hidden = false;
  victoryEl.hidden = true;

  const recalcDerived = () => {
    state.autoRate = state.scannerLevel * AUTO_PER_LEVEL;
    state.clickValue = Math.max(
      1,
      BASE_CLICK + state.amplifierLevel * CLICK_PER_LEVEL
    );
  };

  recalcDerived();

  const formatNumber = (value) =>
    Math.floor(value).toLocaleString("en-US");

  const costFor = (base, level) => Math.floor(base * Math.pow(1.6, level));

  const updateCharacters = () => {
    if (!charactersEl) {
      return;
    }

    const targetCount = Math.min(16, Math.floor(Math.log1p(state.signal) * 3));
    const currentCount = charactersEl.children.length;

    if (currentCount === targetCount) {
      return;
    }

    if (currentCount > targetCount) {
      while (charactersEl.children.length > targetCount) {
        charactersEl.removeChild(charactersEl.lastChild);
      }
      return;
    }

    for (let index = currentCount; index < targetCount; index += 1) {
      const character = document.createElement("span");
      character.className = "idle-bar__character";
      charactersEl.appendChild(character);
    }
  };

  const updateCps = () => {
    const effectiveCps = clicksThisSecond * state.clickValue;
    smoothedCps = smoothedCps * 0.8 + effectiveCps * 0.2;
    clicksThisSecond = 0;
    cpsEl.textContent = smoothedCps.toFixed(1);
  };

  const updateProgress = () => {
    const progress = Math.min(1, state.signal / WIN_SIGNAL);
    progressFillEl.style.width = `${(progress * 100).toFixed(2)}%`;
  };

  if (state.hasWon) {
    updateProgress();
    updateCharacters();
    return;
  }

  const showVictory = () => {
    state.hasWon = true;
    widget.hidden = true;
    victoryEl.hidden = false;
    progressFillEl.style.width = "100%";
  };

  const resetGame = () => {
    state.signal = 0;
    state.scannerLevel = 0;
    state.amplifierLevel = 0;
    state.hasWon = false;
    clicksThisSecond = 0;
    smoothedCps = 0;
    cpsEl.textContent = "0.0";
    progressFillEl.style.width = "0%";

    if (charactersEl) {
      while (charactersEl.firstChild) {
        charactersEl.removeChild(charactersEl.firstChild);
      }
    }

    recalcDerived();
    widget.hidden = false;
    victoryEl.hidden = true;
    updateUI();
  };

  const updateUI = () => {
    signalEl.textContent = formatNumber(state.signal);
    rateEl.textContent = state.autoRate.toFixed(2);
    clickPowerEl.textContent = formatNumber(state.clickValue);

    const scannerCost = costFor(baseCosts.scanner, state.scannerLevel);
    const amplifierCost = costFor(baseCosts.amplifier, state.amplifierLevel);

    scannerCostEl.textContent = formatNumber(scannerCost);
    amplifierCostEl.textContent = formatNumber(amplifierCost);

    upgradeScannerBtn.disabled = state.signal < scannerCost;
    upgradeAmplifierBtn.disabled = state.signal < amplifierCost;

    statusEl.textContent = `Drones x${state.scannerLevel} · Auto ${state.autoRate.toFixed(2)}/s · Click ${state.clickValue}`;
    updateCharacters();
    updateProgress();

    if (!state.hasWon && state.signal >= WIN_SIGNAL) {
      triggerVictory();
    }
  };

  const spawnConfettiBurst = () => {
    const colors = ["var(--green)", "var(--text-light)", "var(--green-alpha-45)"];
    for (let index = 0; index < 30; index += 1) {
      const piece = document.createElement("span");
      piece.className = "idle-confetti";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[index % colors.length];
      piece.style.animationDelay = `${Math.random() * 0.2}s`;
      piece.style.setProperty("--confetti-x", `${(Math.random() * 2 - 1) * 120}px`);
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 2000);
    }
  };

  const triggerVictory = () => {
    showVictory();
    spawnConfettiBurst();
  };

  clickBtn.addEventListener("click", () => {
    state.signal += state.clickValue;
    clicksThisSecond += 1;
    updateUI();
  });

  upgradeScannerBtn.addEventListener("click", () => {
    const cost = costFor(baseCosts.scanner, state.scannerLevel);
    if (state.signal < cost) {
      return;
    }
    state.signal -= cost;
    state.scannerLevel += 1;
    recalcDerived();
    updateUI();
  });

  upgradeAmplifierBtn.addEventListener("click", () => {
    const cost = costFor(baseCosts.amplifier, state.amplifierLevel);
    if (state.signal < cost) {
      return;
    }
    state.signal -= cost;
    state.amplifierLevel += 1;
    recalcDerived();
    updateUI();
  });

  continueBtn.addEventListener("click", () => {
    resetGame();
  });

  setInterval(() => {
    if (state.autoRate > 0) {
      state.signal += state.autoRate;
    }
    updateCps();
    updateUI();
  }, 1000);

  updateUI();
});
