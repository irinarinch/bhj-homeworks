const input_field = document.querySelector('input');
const addTask_Btn = document.getElementById('tasks__add');
const tasks__list = document.getElementById('tasks__list');
const stored_tasks = JSON.parse(localStorage.getItem('tasks'));
let tasks_array = [] || stored_tasks;

checkLocalStorage();

addTask_Btn.addEventListener('click', addTask); 

function addTask(event) {
    event.preventDefault();

    if (input_field.value.trim() !== '') {
        tasks__list.insertAdjacentHTML('beforeend', `
            <div class="task">
                <div class="task__title"> ${input_field.value} </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        tasks_array.push(input_field.value);
        input_field.value = '';       
    
        localStorage.setItem(`tasks`, JSON.stringify(tasks_array));
    }
   
    deleteTask();    
}

function checkLocalStorage() { 
    if (stored_tasks) {
        stored_tasks.forEach(task => {
            tasks__list.insertAdjacentHTML('beforeend', `
                <div class="task">
                    <div class="task__title"> ${task} </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>        
            `)
        });
        tasks_array = stored_tasks;
        deleteTask();
    }      
}

function deleteTask() {
    document.querySelectorAll('.task__remove').forEach(el => {
        el.onclick = () => {
            const index = tasks_array.findIndex(item => item === el.previousElementSibling.innerText);
            
            tasks_array.splice(index, 1);            
            el.parentElement.remove();
            localStorage.setItem(`tasks`, JSON.stringify(tasks_array));

            return false;
        }
    })
}

