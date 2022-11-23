const rotators = document.querySelectorAll('.rotator');

function changeCase(element) {
    const activedCase = element.querySelector('.rotator__case_active');
    const nextCase = activedCase.nextElementSibling || element.firstElementChild;
    const speed = nextCase.getAttribute('data-speed');
    const color = nextCase.getAttribute('data-color');

    activedCase.classList.remove('rotator__case_active');
    nextCase.classList.add('rotator__case_active');    
    nextCase.setAttribute('style', `color: ${color}`);

    setTimeout(changeCase, speed, element)
}

changeCase(rotators[0])
//changeCase(rotators[1])




