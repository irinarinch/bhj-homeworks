const input = document.querySelector('input');
const btn = document.getElementById('tasks__add');
const tasks__list = document.getElementById('tasks__list');

checkLocalStorage();

btn.onclick = () => {
    if (input.value.trim() !== '') {
        addTask();
    }
   return false; 
};

function addTask() {     
    tasks__list.insertAdjacentHTML('beforeend', 
    `<div class="task">
        <div class="task__title"> ${input.value} </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    localStorage.setItem(`task`, `${tasks__list.innerHTML}`);

    input.value = '';

    deleteTask();
}

function deleteTask() {
    Array.from(document.getElementsByClassName('task__remove')).forEach(elem => {
        elem.addEventListener('click', () => {
            elem.parentElement.remove(); 
            localStorage.setItem(`task`, `${tasks__list.innerHTML}`)                                     
        })
    });      
}

function checkLocalStorage() {  
    if (localStorage.getItem('task')) {
        tasks__list.insertAdjacentHTML('beforeend', localStorage.getItem('task'));        
    } 
    localStorage.setItem(`task`, `${tasks__list.innerHTML}`)
    deleteTask();
}   


// не получается сделать без дублирования обработчика для удаления.