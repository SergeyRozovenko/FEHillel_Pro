let n;

 do {
  n = parseInt(prompt("Введіть розмір масиву:"));
} while (isNaN(n) || n <= 0)

let arr_A = [];
const B = [];

for (i = 0; i < n; i++) {
  arr_A[i] = Math.floor(Math.random() * n)
}

console.log(arr_A);

let minValue = arr_A[0];
let minItemValue = 0;

let maxValue = arr_A[0];
let maxItemValue = 0;

for (let i = 1; i < n; i++) {
  if (minValue >= arr_A[i]) {
    minValue = arr_A[i];
    minItemValue = i;
  }

  if (maxValue <= arr_A[i]) {
    maxValue = arr_A[i];
    maxItemValue = i;
  }

}

let j = 0;
if (minItemValue < maxItemValue) {
  for (let i = minItemValue + 1; i < maxItemValue; i++) {
    B[j] = arr_A[i];
    j++;
  }
} else {
  for (let i = maxItemValue + 1; i < minItemValue; i++) {
    B[j] = arr_A[i];
    j++;
  }
}




console.log (minItemValue, minValue);
console.log (maxItemValue, maxValue);
console.log (B);