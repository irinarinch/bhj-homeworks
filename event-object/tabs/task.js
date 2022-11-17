const tabsArray = Array.from(document.querySelectorAll('.tab'));
const tab__content_array = Array.from(document.querySelectorAll('.tab__content'));

tabsArray.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        item.classList.add('tab_active');
        const index = tabsArray.indexOf(document.querySelector('.tab_active'));
        tab__content_array[index].classList.add('tab__content_active');
    });   
})

/* 
не поняла вот это: 
"Сделайте акцент на том, что таких механизмов переключения может быть несколько на странице"
*/