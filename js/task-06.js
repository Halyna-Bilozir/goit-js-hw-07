// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
// border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
// border-color: #4caf50;
// }

// #validation-input.invalid {
// border-color: #f44336;
// }

// 1. Створюємо змінну для інпута
// 2. Додаємо слухача подій на інпут
// 3. Створюємо змінну для валідної довжини інпуту
// 4. Створюємо функцію, котра буде додавати та знімати класи при валідному та невалідому інпуті
// 5. Підключаємо файл css з доданими необхідними класами

const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('change', onInputChange);
const validLength = refs.input.dataset.length;
console.log(validLength);

function onInputChange(event) {
    const inputLength = event.currentTarget.value.length;
    
    inputLength == validLength
        ? refs.input.classList.add('valid')
        : refs.input.classList.remove('valid');
    
    inputLength != validLength 
        ? refs.input.classList.add('invalid')
        : refs.input.classList.remove('invalid');
}