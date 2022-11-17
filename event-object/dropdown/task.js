const dropdown__value = document.querySelectorAll('.dropdown__value');
const dropdown__lists = document.querySelectorAll('.dropdown__list');
const dropdown__items = document.querySelectorAll('.dropdown__item');
 
dropdown__value.forEach(item => {
    item.addEventListener('click', () => {
        for (let i = 0; i < dropdown__lists.length; i += 1) {
            if (dropdown__lists[i].parentElement === item.parentElement) {
                dropdown__lists[i].classList.add('dropdown__list_active');
            }
            
            dropdown__items.forEach(element => {
                element.onclick = function() {
                    document.querySelector('.dropdown__list_active').classList.remove('dropdown__list_active');
                    item.textContent = element.textContent;
                    return false;
                }
            })
        }       
    })
})
  


// почему return false не работает, если не через onclick писать, а addEventListener?


