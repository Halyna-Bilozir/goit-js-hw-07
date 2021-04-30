// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


// 1. Створити змінну за допомогою querySelector для елементу body
// 2. Пройтися по масиву ingredients і створити тег li на кожен елемент, вивести масив.
// 3. Створити змінну для створення нового елементу списку інгредієнтів ul
// 4. Дати списку ім'я класу ingredients
// 5. Додати всі елементи-інгредієнти в список
// 6. Добавити тег ul в розмітку (разом з усіма дочірніми елементами) після першого елементу в body



const ingredients = [
'Картошка',
'Грибы',
'Чеснок',
'Помидоры',
'Зелень',
'Приправы',
];

const body = document.querySelector('body');

const liElement = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = [ingredient];
    return li;
});
console.log(liElement);

const listIngredients = document.createElement('ul');
listIngredients.className = 'ingredients';
listIngredients.append(...liElement);

body.insertBefore(listIngredients, body.firstElementChild.nextSibling);
