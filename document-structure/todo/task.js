const input_field = document.querySelector('input');
const addTask_Btn = document.getElementById('tasks__add');
const tasks__list = document.getElementById('tasks__list');
const stored_tasks = JSON.parse(localStorage.getItem('tasks'));
let tasks_array = [];

if (stored_tasks) {
  stored_tasks.forEach(task => {
    tasks__list.insertAdjacentHTML('beforeend', `
      <div class="task">
        <div class="task__title"> ${task} </div>
        <a href="#" class="task__remove">&times;</a>
      </div>        
    `);
  }); 
  tasks_array = stored_tasks;    
}      

addTask_Btn.addEventListener('click', addTask); 
tasks__list.addEventListener('click', deleteTask);

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
}

function deleteTask(event) {
  if (event.target.classList.contains('task__remove')) {
    const index = tasks_array.findIndex(item => item === event.target.previousElementSibling.innerText);

    tasks_array.splice(index, 1);
    event.target.parentElement.remove();
    tasks_array.length > 0 ? localStorage.setItem(`tasks`, JSON.stringify(tasks_array)) : localStorage.removeItem(`tasks`);
  }
}

