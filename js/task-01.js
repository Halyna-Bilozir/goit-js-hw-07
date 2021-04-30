// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

//  1. Створити змінну для ul#categories використовуючи querySelector
//  2. Створити змінну для підрахунку кількості категорій.
//  3. Вивести кількість категорій в списку ("В списку "ен" категорій")
//  4. Створити змінну для переліку всіх категорій - li.item, використовуючи querySelector
//  5. Створити функцію для перебору всіх категорій 
//  6. Знайти і вивести назву кожної категорії (тега h2) - textContent Категорія: "назва"
//  7. Вивести кількість елементів в списку кожної категорії (Кількість елементів: ен)

const ulCategories = document.querySelector('ul#categories');
const CategoriesQuantity = ulCategories.children.length;

console.log(`В списке ${CategoriesQuantity} категории.`);

const listOfCategories = document.querySelectorAll('li.item');

listOfCategories.forEach((category) =>
    console.log(`Категорія: ${category.firstElementChild.textContent} \n Кількість елементів: ${category.lastElementChild.children.length}`
    )
)
