let countdown;
let isPaused = true;
let timeLeft = 25 * 60;

function displayTime(minutes, seconds) {
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        countdown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                displayTime(minutes, seconds);
            } else {
                clearInterval(countdown);
                alert("Time's up! 🎉");
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = true;
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    isPaused = true;
    timeLeft = 25 * 60;
    displayTime(25, 0);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

displayTime(25, 0);
