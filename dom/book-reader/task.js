const book = document.getElementById('book');

Array.from(document.querySelectorAll('.font-size')).forEach(element => {
    element.onclick = () => {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        element.classList.add('font-size_active');
        
        const size = element.getAttribute('data-size');
     
        book.classList.remove('book_fs-big', 'book_fs-small');
        book.classList.add(`book_fs-${size}`);
                
        return false;
    }   
})

Array.from(document.querySelector('.book__control_color').children).forEach(element => {
    element.onclick = () => {
        document.querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');

        const text_color = element.getAttribute('data-text-color');
        
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${text_color}`);
        
        return false;
    }
})

Array.from(document.querySelector('.book__control_background').children).forEach(element => {
    element.onclick = () => {
        document.querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');

        const bg_color = element.getAttribute('data-bg-color');
        
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${bg_color}`);
        
        return false;
    }
})