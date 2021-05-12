// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// 1. Створення об єкту змінних
// 2. Створення об єкту виконання всіх дій по колекції дівів
// 3. Повісити слухача подій на інпут та кнопки
// 4. Написати необхідні функції та внести їх в actionsWithColectionDiv
const refs = {
    refControls: document.querySelector('#controls'),
    refBoxes: document.querySelector('#boxes'),
    refInput: document.querySelector('input'),
    refRenderBtn: document.querySelector('button[data-action="render"]'),
    refDestroyBtn: document.querySelector('button[data-action="destroy"]'),
}

const actionsWithColectionDiv = {
    amount: 0,
    divBox: '',
    widthBox: 30,
    heightBox: 30,

    onCreateBoxesMarkUp,
    onRenderBoxesMarkUp, 
    onDestroyBoxesMarkUp,
    makeRandomRGBColor,
    colorRandomaizer,
}
refs.refInput.addEventListener('input', onInputChange);
refs.refRenderBtn.addEventListener('click', actionsWithColectionDiv.onRenderBoxesMarkUp.bind(actionsWithColectionDiv));
refs.refDestroyBtn.addEventListener('click', actionsWithColectionDiv.onDestroyBoxesMarkUp.bind(actionsWithColectionDiv));

function onInputChange(event) {
    actionsWithColectionDiv.amount = event.currentTarget.value;
};
function onCreateBoxesMarkUp() {
    let { amount, divBox, widthBox, heightBox } = this;
        if (amount > 0 && amount <=100) {
            for (let i = 1; i <= amount; i += 1) {
                divBox += `<div style="width: ${widthBox + 10 * (i-1)}px; height: ${heightBox + 10 * (i-1)}px; background-color: ${this.makeRandomRGBColor()}"></div>`;
            } return divBox;
        } return divBox; 
};
function onRenderBoxesMarkUp() {
    refs.refBoxes.innerHTML = this.onCreateBoxesMarkUp();
};
function onDestroyBoxesMarkUp() {
    refs.refBoxes.innerHTML = '';
    refs.refInput.value = 0;
    this.amount = 0;
};
function makeRandomRGBColor() {
    const r = this.colorRandomaizer(0, 255);
    const g = this.colorRandomaizer(0, 255);
    const b = this.colorRandomaizer(0, 255);
    const colorRGB = `rgb(${r},${g},${b})`;
    return colorRGB;
};
function colorRandomaizer(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};






