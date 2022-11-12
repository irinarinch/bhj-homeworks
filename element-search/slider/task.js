let item = 0;
const slides_array = Array.from(document.getElementsByClassName('slider__item'));
const slider__dots_array = Array.from(document.getElementsByClassName('slider__dot'));

function deactivate() {
    document.querySelector('.slider__dot_active').classList.remove('slider__dot_active');
    document.querySelector('.slider__item_active').classList.remove('slider__item_active');
}

function activate() {
    slides_array[item].classList.add('slider__item_active');
    slider__dots_array[item].classList.add('slider__dot_active'); 
}

function getNextSlide() {    
    if (item < slides_array.length - 1) {        
        deactivate();
        item += 1; 
        activate();                          
    } else if (item === slides_array.length - 1) {
        deactivate();
        item = 0;
        activate();     
    }
}

function getPreviousSlide() {
    if (item === 0) {
        deactivate();
        item = slides_array.length - 1;        
        activate();
    } else if (item < slides_array.length) {
        deactivate();
        item -= 1;
        activate();       
    }
}

slider__dots_array[item].classList.add('slider__dot_active');

for (let i = 0; i < slider__dots_array.length; i += 1) {
    slider__dots_array[i].onclick = function() {
        deactivate();        
        slider__dots_array[i].classList.add('slider__dot_active');
        slides_array[i].classList.add('slider__item_active');        
    }
}

document.querySelector('.slider__arrow_next').addEventListener('click', getNextSlide);
document.querySelector('.slider__arrow_prev').addEventListener('click', getPreviousSlide);