// script.js

let timer = null;       // Stores the interval
let elapsedSeconds = 0; // Time in seconds

// Format seconds to HH:MM:SS
function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Start the stopwatch
function start() {
    if (!timer) {
        timer = setInterval(() => {
            elapsedSeconds++;
            document.getElementById('time-display').textContent = formatTime(elapsedSeconds);
        }, 1000);
    }
}

// Pause the stopwatch
function pause() {
    clearInterval(timer);
    timer = null;
}

// Reset the stopwatch
function reset() {
    pause();
    elapsedSeconds = 0;
    document.getElementById('time-display').textContent = formatTime(elapsedSeconds);
    document.getElementById('laps').innerHTML = '';
}

// Record a lap
function lap() {
    const lapTime = formatTime(elapsedSeconds);
    const li = document.createElement('li');
    li.textContent = lapTime;
    document.getElementById('laps').appendChild(li);
}

// Event listeners for buttons
document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
