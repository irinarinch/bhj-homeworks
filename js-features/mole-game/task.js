const holes = document.getElementsByClassName('hole');
const lost = document.getElementById(`lost`);
const dead = document.getElementById(`dead`);

function restart(message) {
    alert(message);
    lost.textContent = 0;
    dead.textContent = 0;
}

for (let i = 0; i < holes.length - 1; i += 1) {
    holes[i].addEventListener('click', clickHole);
    
    function clickHole() {
        if (holes[i].classList.contains('hole_has-mole')) {
            if (dead.textContent < 9) {
                dead.textContent ++;
            } else {                
                restart('Победа');
            }
        } else {
            if (lost.textContent < 4) {
                lost.textContent ++;
            } else  {                
                restart('Проигрыш');
            } 
        }
    }
}