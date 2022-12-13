const progress = document.getElementById( 'progress' );

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = (event.loaded/(event.total/100)) / 100;        
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    const formData = new FormData(document.forms.form);    
    xhr.send(formData);  
})

