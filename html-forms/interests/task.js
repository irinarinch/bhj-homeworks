const checkboxes = document.querySelectorAll('input');

for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
        checkboxes[i].closest('.interest').querySelectorAll('input').forEach(element => {
            if (checkboxes[i].checked) {
                element.checked = true;                
            } else {
                element.checked = false;
            } 
        })
    }) 
}



