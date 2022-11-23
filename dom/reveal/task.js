const hiddenBlocks = document.getElementsByClassName('reveal');

document.addEventListener('scroll', isVisible);

function isVisible() {
    Array.from(hiddenBlocks).forEach(element => {
        const { top, bottom } = element.getBoundingClientRect();          
        if (top < window.innerHeight && bottom > 0) {
            element.classList.add('reveal_active');
        }    
    })
        
}