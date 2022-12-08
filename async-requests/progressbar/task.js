const progress = document.getElementById( 'progress' );

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 1) {
            progress.value = 0.25;
        } else if (++xhr.readyState) {
            progress.value += 0.25;
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    const formData = new FormData(document.forms.form);    
    xhr.send(formData);  
})

