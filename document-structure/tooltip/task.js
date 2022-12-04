const hasTooltipElement = document.querySelectorAll('.has-tooltip');

hasTooltipElement.forEach(element => {
    const newTooltip = document.createElement('div');    
    newTooltip.classList.add('tooltip');

    newTooltip.textContent = element.title;
    newTooltip.style.left = `${element.offsetLeft}px`;    
    newTooltip.style.position = 'absolute'; 
    newTooltip.setAttribute('data-position', 'top');    

    element.insertAdjacentElement('afterend', newTooltip);

    element.onclick = () => { 
        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').classList.remove('tooltip_active'); 
        }             
        newTooltip.classList.add('tooltip_active');

        element.style.position = 'relative';

        return false;
    }
});


/*
 newTooltip.style.left присвоила element.offsetLeft, но почему-то left на некоторых подсказках 
 принимает значения, отличные от значения element.offsetLeft (в меньшую сторону). Почему?
*/

// не поняла как использовать атрибут 'data-position'