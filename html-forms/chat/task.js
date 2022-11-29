const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const messagesBox = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

let timerId; 

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    timerId = setTimeout(getRobotMessage, 30000);         
})

function sendClientMessage() {
    messagesBox.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">
            ${input.value}
            </div>
        </div>
    `;
   
    input.value = '';
    messagesBox.scrollIntoView(false);
}

function getRobotMessage() {
    const robotMessages = [
        'сообщение робота 1',
        'сообщение робота 20',
        'сообщение робота 33',
        'сообщение робота 47',
        'сообщение робота 52',
        'сообщение робота 68'
    ];
    const index = Math.floor(Math.random() * robotMessages.length);
    
    messagesBox.innerHTML += `
        <div class="message">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">
            ${robotMessages[index]}  
            </div>
        </div>
    `; 
    messagesBox.scrollIntoView(false);     

    clearTimeout(timerId);
    timerId = setTimeout(getRobotMessage, 30000); 
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        sendClientMessage();
        getRobotMessage();             
    }
})



