let minutes = 25;
let seconds = 0;
let timer;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Pomodoro session over");
            return;
        }
        seconds = 59;
        minutes--;
    } else {
        seconds--;
    }
    minutesDisplay.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}`;
    secondsDisplay.innerHTML = `${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById('pomodorobutton').addEventListener('click', function () {
    minutes = 15;
    seconds = 0;
    updateTimer();
});

document.getElementById('shortbreakbutton').addEventListener('click', function () {
    minutes = 5;
    seconds = 0;
    updateTimer();
});

document.getElementById('longbreakbutton').addEventListener('click', function () {
    minutes = 15;
    seconds = 0;
    updateTimer();
});

document.getElementById('startButton').addEventListener('click', startTimer);
