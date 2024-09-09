let hours = 0, minutes = 0, seconds = 0;
let isRunning = false;
let interval;

function updateDisplay() {
    const display = document.querySelector("#stopwatch h1");
    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

function start() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(function () {
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
        }, 1000); // Runs every second
    }
}

function stop() {
    isRunning = false;
    clearInterval(interval);
}

function reset() {
    stop();  // Ensure the timer is stopped
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}