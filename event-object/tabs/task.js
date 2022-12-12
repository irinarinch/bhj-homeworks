const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', switch_tab);
})

function switch_tab(event) {
    const tab__navigation = event.target.parentElement;
    const tab__contents = tab__navigation.nextElementSibling;

    const actived_tab = tab__navigation.querySelector('.tab_active');
    const actived_content = tab__contents.querySelector('.tab__content_active');
    
    const tabs_array = Array.from(tab__navigation.children)
    const tab__content_array = Array.from(tab__contents.children);
    const index = tabs_array.indexOf(event.target);

    actived_tab.classList.remove('tab_active');
    actived_content.classList.remove('tab__content_active');

    event.target.classList.add('tab_active');
    tab__content_array[index].classList.add('tab__content_active');     
}