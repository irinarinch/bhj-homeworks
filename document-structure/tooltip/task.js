const elementHasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

tooltip.classList.add('tooltip');
tooltip.setAttribute('data-position', 'left');

elementHasTooltip.forEach(element => {
    element.addEventListener('click', activateTooltip);    
});

function activateTooltip(event) {
    event.preventDefault();

    event.target.insertAdjacentElement('afterend', tooltip);
    tooltip.innerText = `${event.target.title}`;
    tooltip.classList.add('tooltip_active');

    event.target.style.position = 'relative';
    tooltip.style.position = 'absolute';
  
    if (tooltip.getAttribute('data-position') === 'top') {
        tooltip.style.top = `${event.target.offsetTop - tooltip.offsetHeight}px`;
        tooltip.style.left = `${event.target.offsetLeft}px`;
    } else if (tooltip.getAttribute('data-position') === 'left') {
        elementHasTooltip.forEach(element => {
            if (element.nextElementSibling !== tooltip) {
                element.style.marginLeft = '';
            }            
        });

        const difference = tooltip.offsetWidth - event.target.offsetLeft;
        if (difference > 0) { 
            event.target.style.marginLeft = difference+'px';
        } 

        tooltip.style.left = `${event.target.offsetLeft - tooltip.offsetWidth}px`; 
        tooltip.style.top = `${event.target.offsetTop}px`;
    } else if (tooltip.getAttribute('data-position') === 'right') {
        tooltip.style.top = `${event.target.offsetTop}px`;
        tooltip.style.left = `${event.target.offsetLeft + event.target.offsetWidth}px`; 
    } else if (tooltip.getAttribute('data-position') === 'bottom') {        
        tooltip.style.left = `${event.target.offsetLeft}px`;
    }
}