let xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const loader = document.querySelector('.loader');
const items = document.getElementById('items');
const storedValute = JSON.parse(localStorage.getItem('valutes'));
const valutes = storedValute || [];

if (!storedValute) {  
    getExchangeRates(); 
} else {
    addItems();
    getExchangeRates();
}

function getExchangeRates() {
    xhr.open('GET', url);

    xhr.onload = () => {
        loader.classList.remove('loader_active');
        const response = JSON.parse(xhr.response);    
        const valute = Object.values(response.response.Valute); 

        for (let i = 0; i < valute.length; i ++) {            
            valutes.push({charCode: valute[i].CharCode, value: valute[i].Value});            
        } 

        localStorage.setItem('valutes', JSON.stringify(valutes));
        addItems(); 
    }
    
    xhr.send();       
}

function addItems() {
    for(let i = 0; i < valutes.length; i++) {
        items.insertAdjacentHTML("afterend", `
            <div class="item">
                <div class="item__code">
                    ${valutes[i].charCode}                    
                </div>
                <div class="item__value">
                    ${valutes[i].value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
        `); 
    }
}