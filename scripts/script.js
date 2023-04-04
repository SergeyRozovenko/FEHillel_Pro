function removeElements(array, items) {
  for (let i = 0; i < array.length; i++) {
    if (items.includes(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

const array = [1, 2, 3, 3, 4, 5, 6, 7];
removeElements(array, [3]);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]