// let n;
// do {
//   n = parseInt(prompt('Введіть розмір масиву: '));
// } while (isNaN(n) || n <= 0); // Перевіряємо, що n є числом та більше за 0

// const arr = []; // Створюємо порожній масив

// for (let i = 0; i < n; i++) {
//   let num;
//   do {
//     num = parseInt(prompt(`Введіть елемент масиву з індексом ${i}: `));
//   } while (isNaN(num) || num < 0); // Перевіряємо, що num є числом та більше за 0

//   arr.push(num); // Додаємо елемент до масиву
// }

// console.log( arr );

// Запитуємо в користувача розмірність масиву
let n = parseInt(prompt("Введіть розмірність масиву:"));

// Перевіряємо, що користувач ввів коректне значення
while (isNaN(n) || n < 1) {
  n = parseInt(prompt("Введіть коректне значення для розмірності масиву:"));
}

// Створюємо масив
let arr = [];

// Заповнюємо масив значеннями, введеними користувачем
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(prompt(`Введіть значення для елемента масиву з індексом ${i}:`));
}
