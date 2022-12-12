class Game {
    constructor(container) {
      this.container = container;
      this.wordElement = container.querySelector('.word');
      this.winsElement = container.querySelector('.status__wins');
      this.lossElement = container.querySelector('.status__loss');
      this.timerElement = container.querySelector('.status__timer');
      this.timerId;

      this.reset();  
      this.registerEvents();      
    }
  
    reset() {
      this.setNewWord();
      this.winsElement.textContent = 0;
      this.lossElement.textContent = 0;      
    }
  
    registerEvents() {    
      document.addEventListener('keyup', (e) => {
        if (e.key.toLowerCase() === this.currentSymbol.textContent) {
          this.success();
        } else {
          this.fail(); 
        }
      });
    }

    startTimer() {
      this.timerId = setInterval(()=>{
        if (this.timerElement.textContent > 0) {
          this.timerElement.textContent -= 1;
        } else {
          alert('Быстрее!');

          clearInterval(this.timerId);
          this.startTimer();
        
          document.querySelectorAll('.symbol_correct').forEach(symbol => {
            symbol.classList.remove('symbol_correct');
          });
          this.currentSymbol = document.querySelector('.word').children[0];

          this.timerElement.textContent = document.querySelector('.word').children.length; 
        }   
      }, 1000);       
    }
  
    success() {
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;
      if (this.currentSymbol !== null) {
        return;
      }
  
      if (++this.winsElement.textContent === 10) {
        alert('Победа!');
        this.reset();
      }
      this.setNewWord();
    }
  
    fail() {
      if (++this.lossElement.textContent === 5) {
        alert('Вы проиграли!');
        this.reset();
      }
      this.setNewWord();
    }
  
    setNewWord() {
      const word = this.getWord();
  
      this.renderWord(word);

      this.timerElement.textContent = word.length;

      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.startTimer();
    }
  
    getWord() {
      const words = [
          'bob',
          'awesome',
          'netology',
          'hello',
          'kitty',
          'rock',
          'youtube',
          'popcorn',
          'cinema',
          'love',
          'javascript'
        ],
        index = Math.floor(Math.random() * words.length);
      
      return words[index];
    }
  
    renderWord(word) {
      const html = [...word]
        .map(
          (s, i) =>
            `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
        )
        .join('');
      this.wordElement.innerHTML = html;
  
      this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
  }
  
  new Game(document.getElementById('game'))
