const cart__products = document.querySelector('.cart__products');
const productsList = document.querySelector('.products');
const products = productsList.getElementsByClassName('product');
const cart = document.querySelector('.cart');

checkLocalStorage();
 
for (let i = 0; i < products.length; i ++) {
    const plus = products[i].querySelector('.product__quantity-control_inc');
    const minus = products[i].querySelector('.product__quantity-control_dec');
    const count = products[i].querySelector('.product__quantity-value');
    const btn = products[i].querySelector('.product__add');
    const product_id = products[i].getAttribute('data-id');
    const product_img_src = products[i].querySelector('img').getAttribute('src');

    plus.addEventListener('click', () => {
        count.textContent ++;
    });
    
    minus.addEventListener('click', () => {
        if (count.textContent > 1) {
            count.textContent --;
        }
    });

    btn.addEventListener('click', addProductAtCart);

    function addProductAtCart() {
        cart.classList.remove('hidden_element'); 
        const cart__product_array = Array.from(document.getElementsByClassName('cart__product'));
        const element_in_cart = cart__product_array.find(element => element.getAttribute('data-id') === product_id);

        if (element_in_cart) {
            const cart__product_count = element_in_cart.querySelector('.cart__product-count');
            cart__product_count.textContent = (+cart__product_count.textContent) + (+count.textContent);
        } else {
            cart__products.innerHTML += `
                <div class="cart__product" data-id="${product_id}">
                    <img class="cart__product-image" src="${product_img_src}">
                    <div class="cart__product-count">${count.textContent}</div>
                    <div class="cart__product-deleter">удалить</div>
                </div>
            `; 
        }

        localStorage.setItem(`cart`, `${cart__products.innerHTML}`);
         
        const product_img = products[i].querySelector('img');
        const { left, top } = product_img.getBoundingClientRect();
        product_img.style.left = `${left}px`; 
        product_img.style.top = `${top}px`; 

        let newTop = top + window.scrollY;
        let newLeft = left + window.scrollX;

        const copy = products[i].insertBefore(product_img.cloneNode(false), product_img);
        copy.style.position = 'absolute';
        copy.style.top = `${newTop}px`;
        copy.style.left = `${newLeft}px`;

        for (let i = 0; i < cart__products.children.length; i ++) {
            const cart_product_img = cart__products.children[i].querySelector('img');
            const { left, top } = cart_product_img.getBoundingClientRect();
            let newLeftAtCart =  left + window.scrollY;
            let newTopAtCart =  top + window.scrollX;
            cart_product_img.style.left = `${newLeftAtCart}px`; 
            cart_product_img.style.top = `${newTopAtCart}px`; 
            const topDifference = newTop - newTopAtCart;     
            const leftDifference = newLeftAtCart - newLeft;

            const intervalId = setInterval(() => {
               setTimeout(changePosition);                
            }, 100)
            
            
            function changePosition() { 
                const step = topDifference / 10;
                const step2 = leftDifference / 10;
                if ((newTop > top) && (left > newLeft)) {
                    copy.style.top = `${newTop -= step}px`;
                    copy.style.left = `${newLeft += step2}px`;
                } else {
                    copy.remove();
                    clearInterval(intervalId);
                    
                    return;
                }                
            }
        } 
        deleteCartProduct();
    }   
}

function deleteCartProduct() {
    const deleters = document.querySelectorAll('.cart__product-deleter');
    Array.from(deleters).forEach(deleter => {
        deleter.addEventListener('click', () => {
            deleter.closest('.cart__product').remove(); 
            localStorage.setItem(`cart`, `${cart__products.innerHTML}`);
            if (cart__products.children.length === 0) {
                cart.classList.add('hidden_element'); 
            }  
        });
    });
}

const remove_cart_products_btn = document.getElementById('product__remove_btn');
remove_cart_products_btn.addEventListener('click', remove_cart_products);

function remove_cart_products() {    
    Array.from(cart__products.children).forEach(cart__product => {
        cart__product.remove(); 
        localStorage.setItem(`cart`, `${cart__products.innerHTML}`)
        cart.classList.add('hidden_element');    
    });
}
            

function checkLocalStorage() {  
    if (localStorage.getItem('cart')) {
        cart__products.insertAdjacentHTML('beforeend', localStorage.getItem('cart')); 
        
        if (cart__products.children.length !== 0) {
            cart.classList.remove('hidden_element');
        }         
    } 
    localStorage.setItem(`cart`, `${cart__products.innerHTML}`);
    deleteCartProduct();
} 

