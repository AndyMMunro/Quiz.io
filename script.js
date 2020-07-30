// variables 

var timerEl = document.getElementById("countdowntimer");
var timeLeft = 60;

// functions

function timer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft
        if (timeLeft === 0) {
            clearInterval(timeInterval);

        }
    }, 1000);
}

timer()

