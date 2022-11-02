let counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let speed = document.getElementById("click__speed");

function countClicks() {
    counter.textContent ++;
    cookie.width === 200 ? cookie.width += 100 : cookie.width -= 100;    
}

cookie.addEventListener('click', countClicks);