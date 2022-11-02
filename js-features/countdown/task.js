let timerStartValue = document.getElementById("timer");
let timerId = setInterval(startTimer, 1000);

function startTimer() {    
    if (timerStartValue.textContent > 0) {
        timerStartValue.textContent -= 1;
    } else {   
        clearInterval(timerId);
        alert('Вы победили в конкурсе!'); 
    }  
}