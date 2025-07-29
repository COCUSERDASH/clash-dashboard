// Example finish timestamps (use your real ones later)
const mainTimers = [
  { label: 'TH15 #3', end: new Date("2025-07-29T20:00:00") },
  { label: 'TH14 #6', end: new Date("2025-07-29T21:30:00") }
];

const bbTimers = [
  { label: 'OTTO #1', end: new Date("2025-07-30T00:00:00") }
];

function formatRemaining(timeLeftMs) {
  if (timeLeftMs <= 0) return "Done";
  const totalSec = Math.floor(timeLeftMs / 1000);
  const hrs = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return `${hrs}h ${mins}m ${secs}s`;
}

function updateTimers() {
  const now = new Date();
  const mainDiv = document.getElementById("main-timers");
  const bbDiv = document.getElementById("bb-timers");

  mainDiv.innerHTML = "";
  bbDiv.innerHTML = "";

  for (const t of mainTimers) {
    const left = t.end - now;
    const row = document.createElement("div");
    row.className = "timer-row";
    row.innerHTML = `<span>${t.label}</span><span>${formatRemaining(left)}</span>`;
    mainDiv.appendChild(row);
  }

  for (const t of bbTimers) {
    const left = t.end - now;
    const row = document.createElement("div");
    row.className = "timer-row";
    row.innerHTML = `<span>${t.label}</span><span>${formatRemaining(left)}</span>`;
    bbDiv.appendChild(row);
  }
}

setInterval(updateTimers, 1000);
