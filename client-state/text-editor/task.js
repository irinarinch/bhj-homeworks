const textarea = document.querySelector('textarea');
const storedValue = localStorage.getItem('text');
const btn = document.querySelector('button');

textarea.addEventListener('input', () => {  
    localStorage.setItem('text', textarea.value);
})

textarea.value = storedValue;    

btn.addEventListener('click', () => {
    localStorage.removeItem('text');
    textarea.value = '';
}) 
