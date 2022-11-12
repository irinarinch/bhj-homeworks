let modal_main = document.getElementById('modal_main');
let modal_close = document.getElementsByClassName('modal__close');
let show_success = document.getElementsByClassName('show-success');
let modal_success = document.getElementById('modal_success');
let modal_active = document.getElementsByClassName('modal_active');

modal_main.classList.add('modal_active');

function closeModal() {
    modal_active[0].classList.remove('modal_active');
}

function showSuccessModal() {
    modal_success.classList.add('modal_active');
}

Array.from(modal_close).forEach(element => {
    element.addEventListener('click', closeModal);
});

show_success[0].addEventListener('click', showSuccessModal);

