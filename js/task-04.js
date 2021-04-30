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


const div = document.createElement('div');

const button = document.createElement('button');
button.type = 'button';
button.dataset(action = 'decrement');
button.textContent = '-1';

const span = document.createElement('span');
span.id = 'value';
span.textContent = '0';

const button = document.createElement('button');
button.type = 'button';
button.dataset(action = 'increment');
button.textContent = '+1';

const counterValue = 0;

