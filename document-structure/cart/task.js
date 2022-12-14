const cart__products = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart');
const addProductToCart_buttons = document.querySelectorAll('.product__add');
const products_at_Cart = cart__products.children;
const storedProducts = JSON.parse(localStorage.getItem('products'));
const remove_cart_products_btn = document.getElementById('product__remove_btn');

// проверяю хранилище
if (storedProducts) {
  cart.classList.remove('hidden_element');
  storedProducts.forEach(storedProduct => {
    cart__products.insertAdjacentHTML('beforeEnd', `
      <div class="cart__product" data-id="${storedProduct.id}">
        <img class="cart__product-image" src="${storedProduct.src}">
        <div class="cart__product-count">${storedProduct.count}</div>
        <div class="cart__product-deleter">удалить</div>
      </div>
    `); 
  });

  deleteCartProduct();
  saveCart();
} 

// активирую кнопки плюс-минус
products.forEach(product => {
  const increase_quantity_button = product.querySelector('.product__quantity-control_inc');
  const decrease_quantity_button = product.querySelector('.product__quantity-control_dec');
  const quantity = product.querySelector('.product__quantity-value');

  increase_quantity_button.addEventListener('click', () => {
    quantity.textContent ++;
  });
  
  decrease_quantity_button.addEventListener('click', () => {
    if (quantity.textContent > 1) {
      quantity.textContent --;
    }
  });
})

// активирую кнопку добавления товара в корзину
addProductToCart_buttons.forEach(btn => {
  btn.addEventListener('click', addProductToCart);
});

function addProductToCart(event) {
  cart.classList.remove('hidden_element');

  const product = event.target.closest('.product');
  const product_id = product.getAttribute('data-id');
  const product_img = product.querySelector('img')
  const product_img_src = product_img.getAttribute('src');
  const product_quantity = product.querySelector('.product__quantity-value');
  const element_in_cart = Array.from(document.querySelectorAll('.cart__product')).find(element => element.getAttribute('data-id') === product_id);
  let cart__product_image_coords;

  if(!element_in_cart) {
    cart__products.insertAdjacentHTML('beforeEnd', `
      <div class="cart__product" data-id="${product_id}">
        <img class="cart__product-image" src="${product_img_src}">
        <div class="cart__product-count">${product_quantity.textContent}</div>
        <div class="cart__product-deleter">удалить</div>
      </div>
    `);
    // координаты новых продуктов в корзине 
    const new_images_array = Array.from(cart__products.querySelectorAll('.cart__product-image'));
    const new_cart__product_image = new_images_array[new_images_array.length - 1];
    cart__product_image_coords = new_cart__product_image.getBoundingClientRect();        
  } else {
    const cart__product_count = element_in_cart.querySelector('.cart__product-count');        
    cart__product_count.textContent = (+cart__product_count.textContent) + (+product_quantity.textContent);
    // координаты старых продуктов в корзине  
    cart__product_image_coords = element_in_cart.getBoundingClientRect();          
  }    
  deleteCartProduct();
  saveCart();

  // координаты продуктов в списке
  const product_img_coords = product_img.getBoundingClientRect();
  
  // создать копию картинки и расположить над картинкой продукта
  const copy = product.insertBefore(product_img.cloneNode(false), product_img);
  
  copy.style.position = 'absolute';

  let copyTopValue = product_img_coords.top + window.scrollY;
  let copyLeftValue = product_img_coords.left;

  copy.style.top = `${copyTopValue}px`;
  copy.style.left = `${copyLeftValue}px`;

  // вычислить разницу между координатами
  const product_at_cart_LeftValue = cart__product_image_coords.left;
  const product_at_cart_topValue = cart__product_image_coords.top + window.scrollY;

  const topDifference = copyTopValue - Math.abs(product_at_cart_topValue); 
  const leftDifference = product_at_cart_LeftValue - copyLeftValue;
  const step = topDifference / 100;
  const step2 = leftDifference / 100;

  const intervalId = setInterval(() => {
    setTimeout(changeCopyPosition);                
  }, 1);

  // перемещение картинки
  function changeCopyPosition() {
    if ((copyTopValue > product_at_cart_topValue) && (product_at_cart_LeftValue > copyLeftValue)) {
      copy.style.top = `${copyTopValue -= step}px`;            
      copy.style.left = `${copyLeftValue += step2}px`;           
    }  else {
      copy.remove();
      clearInterval(intervalId);
      return;
    }     
  }
}

// сохранение продуктов в локалсторадже
function saveCart() {
  const arrayToStore = Array.from(products_at_Cart).map(element => ({
    id: element.dataset.id,
    src: element.querySelector('img').getAttribute('src'),
    count: element.querySelector('.cart__product-count').textContent,
  }));

  if (arrayToStore.length > 0)  {
    localStorage.setItem('products', JSON.stringify(arrayToStore));
  } else {
    localStorage.removeItem('products');
  }
}

// удаление товаров из корзины
function deleteCartProduct() {
  const deleters = cart__products.querySelectorAll('.cart__product-deleter');
  deleters.forEach(deleter => {
    deleter.addEventListener('click', (event) => {
      event.target.closest('.cart__product').remove();             
      if (cart__products.children.length === 0) {
        cart.classList.add('hidden_element'); 
      } 
      saveCart();  
    });
  });
  
  remove_cart_products_btn.addEventListener('click', () => {
    Array.from(products_at_Cart).forEach(cart__product => {
      cart__product.remove();             
      cart.classList.add('hidden_element');    
    });
    saveCart(); 
  });
}



 
 
   
   
   
   
   
   
   
   
   
   
   
   
   