let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let laps = document.getElementById("laps");
let interval = null;

function updateDisplay() {
  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (interval !== null) return;
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  clearInterval(interval);
  interval = null;
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = '';
}

function lapTime() {
  const lap = document.createElement("li");
  lap.innerText = display.innerText;
  laps.appendChild(lap);
}
