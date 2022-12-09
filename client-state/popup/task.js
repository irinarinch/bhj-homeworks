const subscribe_modal = document.getElementById('subscribe-modal');
const modal_close = document.querySelector('.modal__close');
const modal_state = getCookie('modal_state');

if (!modal_state) {
    subscribe_modal.classList.add('modal_active');
}

modal_close.addEventListener('click', () => {
    subscribe_modal.classList.remove('modal_active');
    document.cookie += 'modal_state=' + encodeURIComponent('closed');
});

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie;
}