const dropdown__value = document.querySelectorAll('.dropdown__value');

dropdown__value.forEach(item => {
    item.addEventListener('click', (event) => {
        const dropdown_list = event.target.nextElementSibling;
        
        dropdown_list.classList.toggle('dropdown__list_active');
        dropdown_list.style.left = `${event.target.offsetLeft}px`;
        
        dropdown_list.addEventListener('click', (event) => {
            event.preventDefault();

            item.textContent = event.target.textContent;
            dropdown_list.classList.remove('dropdown__list_active');
        }); 
    });
});