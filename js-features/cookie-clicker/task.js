const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("click__speed");

function countClicks() {    
    cookie.width = ++counter.textContent % 2 ? 250 : 200;
}

cookie.addEventListener('click', countClicks);