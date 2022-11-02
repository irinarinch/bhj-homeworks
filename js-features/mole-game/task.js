let holes = document.getElementsByClassName('hole');

function restart() {
    document.getElementById(`lost`).textContent = 0;
    document.getElementById(`dead`).textContent = 0;
}

for (let i = 0; i < holes.length - 1; i += 1) {
    holes[i].addEventListener('click', clickHole);
    
    function clickHole() {
        if (holes[i].classList.contains( 'hole_has-mole' ) === true) {
            if (document.getElementById(`dead`).textContent < 9) {
                document.getElementById(`dead`).textContent ++;
            } else {
                alert('Победа!!!'); 
                restart();
            }
        } else {
            if (document.getElementById(`lost`).textContent < 4) {
                document.getElementById(`lost`).textContent ++
            } else  {
                alert('Вы проиграли('); 
                restart();
            } 
        }
    }
}