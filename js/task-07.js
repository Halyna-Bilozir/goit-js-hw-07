// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

// 1. Створюємо змінні для інпута та аутпута
// 2. Додаємо слухача подій на інпут
// 3. Створюємо функцію, котра буде слідкувати за зміною повзунка на інпуті

const refs = {
    input: document.getElementById('font-size-control'),
    outputText: document.getElementById('text'),
}

refs.input.addEventListener('input', onInputChangeInlineStyle);

function onInputChangeInlineStyle(event) {
    refs.outputText.style.fontSize = `${event.currentTarget.value}px`;
}