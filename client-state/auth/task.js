const welcome_content = document.getElementById('welcome');
const signin_content = document.getElementById('signin');
const form = document.forms.signin__form;
const user_id = document.getElementById('user_id');
const storedUser = localStorage.getItem('user');
const inputs = document.querySelectorAll('input');
const logout__btn = document.getElementById('logout__btn');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputs[0].value === '' || inputs[1].value === '') {
        if (!document.getElementById('invalid_values_message')) {
            form.insertAdjacentHTML('afterend', `
                <div id="invalid_values_message">Укажите логин/пароль</div>
            `);
            form.reset();                  
        } 
    } else {
        const xhr = new XMLHttpRequest();    
        xhr.responseType = 'json';

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        
        const formData = new FormData(form);    
       
        xhr.send(formData); 
        xhr.onload = () => {                     
           
            if (xhr.response.success) {
                user_id.textContent = xhr.response.user_id;
                localStorage.setItem('user', xhr.response.user_id);
                changeCardContent(); 
            } else { 
                form.reset(); 
                if (!document.getElementById('invalid_values_message')) {
                    form.insertAdjacentHTML('afterend', `
                        <div id="invalid_values_message">Неверный логин/пароль</div>
                    `);                
                } 
            }    
        }
    }    
});

form.addEventListener('input', () => {
    const invalid_values_message = document.getElementById('invalid_values_message');
    if (invalid_values_message) {
        invalid_values_message.remove();
    }            
});

if (storedUser) {
    user_id.textContent = storedUser;
    changeCardContent(); 
}

logout__btn.addEventListener('click', () => {
    localStorage.removeItem('user');
    location.reload();
});

function changeCardContent() {
    signin_content.classList.remove('signin_active');
    welcome_content.classList.add('welcome_active');
}


 


