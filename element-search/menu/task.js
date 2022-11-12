const hidden_menu_array = Array.from(document.querySelectorAll('.menu_sub'));
const menu_link_array = Array.from(document.querySelectorAll('.menu__link'));
const menu_active_arr = document.getElementsByClassName('menu_active');

menu_link_array.forEach(item => {
    item.onclick = function() { 
        for (let i = 0; i < hidden_menu_array.length; i += 1) {
            if (hidden_menu_array[i].parentElement === item.parentElement) {
                if (menu_active_arr.length === 0) {
                    hidden_menu_array[i].classList.add('menu_active');
                } else if (menu_active_arr.length === 1) {
                    if (document.querySelector('.menu_active').closest('.menu_main') && !hidden_menu_array[i].closest('.menu_main')) {
                        hidden_menu_array[i].classList.add('menu_active');
                    } else if (!document.querySelector('.menu_active').closest('.menu_main') && hidden_menu_array[i].closest('.menu_main')) {
                        hidden_menu_array[i].classList.add('menu_active');
                    }  
                } else if (menu_active_arr.length === 2) {
                    for (let k = 0; k < menu_active_arr.length; k += 1) {
                        if (menu_active_arr[k].closest('.menu_main') && hidden_menu_array[i].closest('.menu_main')) {
                            menu_active_arr[k].classList.remove('menu_active');
                            hidden_menu_array[i].classList.add('menu_active');
                        } else if (!menu_active_arr[k].closest('.menu_main') && !hidden_menu_array[i].closest('.menu_main')){
                            menu_active_arr[k].classList.remove('menu_active');
                            hidden_menu_array[i].classList.add('menu_active');
                        }                        
                    }
                }                
                return false;  
            }            
        }        
    }
})

