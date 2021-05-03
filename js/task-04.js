// Счетчик состоит из спана и кнопок, 
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// {/* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */}

// 1. Створити змінні з розмітки
// 2. Створити змінну для початку відліку 0 in counter для текучого значення лічильника
// 3. Створити функції для спадання і зростання лічильника, віднімати і додавати одиницю
// 4. Додати слухачі подій на спадання і зростання значень лічильника
// 5. Викликати функції

const refs = {
    counterValue: document.querySelector('#value'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
};

const counter = {
    counterValueNumber: 0,
    btnDecrementEvent(){
        this.counterValueNumber -= 1;
    },
    btnIncrementEvent(){
        this.counterValueNumber += 1;
    },
};


refs.btnDecrement.addEventListener('click', () => {
    counter.btnDecrementEvent();
    refs.counterValue.textContent = counter.counterValueNumber;
});

refs.btnIncrement.addEventListener('click', () => {
    counter.btnIncrementEvent();
    refs.counterValue.textContent = counter.counterValueNumber;
});


