// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

// 1. Створити вхідні змінні
// 2. Додати слухач подій на інпут
// 3. Створити функцію , яка повертає значення інпуту при наборі тексту та при пустому інпуті

const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value === ''
    ? event.currentTarget.value = 'незнакомец'
    : refs.nameOutput.textContent = event.currentTarget.value;
};

