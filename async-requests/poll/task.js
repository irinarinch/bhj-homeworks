let xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';
const poll__title = document.getElementById('poll__title');
const poll__answers = document.getElementById('poll__answers');
const main = document.querySelector('main');

xhr.open('GET', url);

xhr.onload = () => {
    const response = JSON.parse(xhr.response); 

    poll__title.textContent = response.data.title;
    response.data.answers.forEach(element => {
        poll__answers.insertAdjacentHTML('beforeend', 
            `<button class="poll__answer">
                ${element}                
            </button>`);       
    }); 

    const poll__answer = document.querySelectorAll('.poll__answer');

    poll__answer.forEach(button => {
        button.addEventListener('click', (e) => {
            main.insertAdjacentHTML('beforeend', `
                <div class="modal">
                    <div class="modal__content">
                        <div> Спасибо, ваш голос засчитан! </div>
                        <div class="close_btn">Закрыть</div>
                    </div>
                </div>
            `);

            const index = Array.from(poll__answer).indexOf(e.target);            
            const id = response.id; 
            const body = 'vote=' + encodeURIComponent(id) + '&answer=' + encodeURIComponent(index);

            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = () => {
                const response = JSON.parse(xhr.response);

                for (let i = 0; i < response.stat.length; i ++) {
                    poll__answers.insertAdjacentHTML('beforeBegin', `
                        <div class="stat hidden">${response.stat[i].answer}: ${response.stat[i].votes}%</div>                        
                    `);           
                }               
            }
            xhr.send(body);

            const modal = document.querySelector('.modal');
            const close_btn = document.querySelector('.close_btn');
            
            close_btn.addEventListener('click', () => {
                modal.remove();
                const stat = document.querySelectorAll('.stat');
                stat.forEach(item => {
                    item.classList.remove('hidden');
                });
                poll__answer.forEach(item => {
                    item.classList.add('hidden');
                });
            });
        });
    });    
};
xhr.send();

// уходят ли ответы? почему не меняется процент статистики, когда меняю ответ?


