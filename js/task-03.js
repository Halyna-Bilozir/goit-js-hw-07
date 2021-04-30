// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// 1. Знайти елемент ul з id gallery
// 2. Перебрати масив images і створити список зображень з атрибутами
// 3. Добавити відразу клас item в шаблонну строку зі стилями з css
// 4. Додати до списку ul всі елементи списку до DOM.


const images = [
{
url:
'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'White and Black Long Fur Cat',
},
{
url:
'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
url:
'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Group of Horses Running',
},
];

// Виконання завдання

const ulRef = document.querySelector('ul#gallery');
const ImageRows = makeImageRows(images);

ulRef.insertAdjacentHTML('afterbegin', ImageRows);

function makeImageRows(images) {
    return images
        .map(({ url, alt }) => {
            return `
            <li class="item">
                <img src='${url}' alt='${alt}'>
            </li>
            `;
        })
        .join(' ');
};

console.log(ulRef);
